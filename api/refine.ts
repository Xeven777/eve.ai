import path from "path";
import fs from "fs";

interface PurifiedMessage {
  sender: string;
  content: string;
}

export function purifyWhatsAppChat(rawChat: string) {
  const output = {
    participants: new Set<string>(),
    conversation: [] as PurifiedMessage[],
  };

  const skipPatterns = [
    "<Media omitted>",
    "Messages and calls are end-to-end encrypted",
    "image omitted",
    "video omitted",
    "sticker omitted",
    "audio omitted",
    "document omitted",
    "contact card omitted",
    "location shared",
    "missed call",
    "joined using invite link",
    "left the group",
    "added",
    "removed",
    "changed the subject",
    "changed this group's icon",
    "deleted this message",
    "This message was deleted",
  ];

  const messageRegex =
    /(\d{1,2}\/\d{1,2}\/\d{4},\s\d{1,2}:\d{2}\s[ap]m)\s-\s([^:]+):\s(.+)/i;

  const lines = rawChat.split("\n").filter((line) => {
    return (
      line.trim() &&
      !skipPatterns.some((pattern) => line.includes(pattern)) &&
      !line.match(/^\d{1,2}\/\d{1,2}\/\d{4},\s\d{1,2}:\d{2}\s[ap]m$/i)
    );
  });

  for (const line of lines) {
    const match = line.match(messageRegex);
    if (match) {
      const [_, __, sender, content] = match;
      const cleanContent = content.trim();

      if (cleanContent && cleanContent.length > 1) {
        // Skip single-character messages
        output.participants.add(sender.trim());
        output.conversation.push({
          sender: sender.trim(),
          content: cleanContent,
        });
      }
    }
  }

  return {
    participants: Array.from(output.participants),
    conversation: output.conversation,
  };
}

const filePath = path.join(__dirname, "demochat.txt");
const rawChat = fs.readFileSync(filePath, "utf-8");
const purifiedChat = purifyWhatsAppChat(rawChat);
fs.writeFileSync(
    path.join(__dirname, "purified-chat.json"),
    JSON.stringify(purifiedChat, null, 2)
);
