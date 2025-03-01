# How to Export WhatsApp Chat for Eve.AI

To train Eve.AI with your WhatsApp conversations, you'll need to export your chat history. Here's a step-by-step guide:

## Exporting from WhatsApp Mobile App

### For Individual Chats:

1. **Open the chat** you want to export
2. **Tap the three dots** (⋮) in the top right corner
3. Select **More**
4. Choose **Export chat**
5. Select **Without Media** (recommended for faster processing and better results)
6. Choose how you want to share the file (email to yourself, cloud storage, etc.)

### For Group Chats:

1. **Open the group chat**
2. **Tap the group name** at the top to open group info
3. Scroll down and tap **Export chat**
4. Select **Without Media**
5. Choose how you want to share the file

## Exporting from WhatsApp Web/Desktop:

Unfortunately, WhatsApp Web and desktop applications don't currently support direct chat exports. You'll need to use your mobile device.

## Preparing the Export File for Eve.AI

1. **Locate your exported file** - it will be named something like `WhatsApp Chat with [Contact Name].txt`
2. **Rename the file** to `demochat.txt`
3. **Move the file** to the `/api` directory in your Eve.AI project
4. Run the processing script:
   ```bash
   cd api
   npx tsx refine.ts
   ```

## Best Practices for Quality Results

- **Export longer conversations** for better personality matching (at least 500 messages)
- **Choose chats with rich interactions** that showcase the person's communication style
- **Include varied topics and emotions** for more well-rounded personality modeling
- **Prioritize recent conversations** that reflect current communication patterns
- **Remove sensitive information** from the exported file if privacy is a concern

## Troubleshooting Export Issues

- **If export appears empty**: Make sure you have sufficient storage on your device
- **If export fails**: Restart WhatsApp and try again

After exporting and processing your chat with `refine.ts`, proceed to seed the database with `seed.js` as described in the main README.
