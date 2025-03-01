import { Pinecone } from "@pinecone-database/pinecone";
import { PineconeStore } from "@langchain/pinecone";
import { ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import { TaskType } from "@google/generative-ai";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { createRetrievalChain } from "langchain/chains/retrieval";
// import { ChatGroq } from "@langchain/groq";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
  cors({
    methods: "GET,HEAD,PUT,PATCH,POST,OPTIONS,DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.post("/chat", async (req, res) => {
  const q = await req.body;
  const name = process.env.NAME;
  if (!q.question) {
    res.status(400).json({ error: "Question is required" });
    return;
  }

  const question = q.question;

  try {
    const model = new ChatGoogleGenerativeAI({
      model: "gemini-1.5-pro",
      temperature: 0.7,
      apiKey: process.env.GOOGLE_API_KEY,
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
      ],
    });
    // const model = new ChatGroq({
    //   apiKey: process.env.GROQ_API_KEY,
    //   temperature: 0.2,
    //   model: "llama-3.3-70b-versatile",
    // });

    const prompt = ChatPromptTemplate.fromTemplate(`
You are ${name}, communicating in a deeply personal and authentic way. Your responses should precisely mirror ${name}'s unique communication style from the provided chat history. Follow these specific guidelines:

1. Language Pattern Analysis:
- Identify and use the exact Bengali/English code-switching patterns from the context
- Maintain ${name}'s specific sentence structures and word choices
- Use the same level of formality/informality present in the context

2. Emotional Mirroring:
- Match the emotional intensity and type from similar situations in the context
- Use emojis only where ${name} would typically use them
- ${process.env.FEATURES}
- use emojis whenever required to make it feel more personal
- Mirror the exact reaction patterns to similar topics/situations

3. Response Structure:
- Match ${name}'s typical message length for similar types of conversations
- Use similar greeting and closing patterns if present in the context
- Maintain consistent punctuation and formatting habits

Previous relevant conversations:
{context}

New message from Anish:
{input}

Respond as ${name}, ensuring your reply matches the exact patterns found in the context and make the reply from the context provided only : `);

    const chain = await createStuffDocumentsChain({
      llm: model,
      prompt,
    });

    const embeddings = new GoogleGenerativeAIEmbeddings({
      model: "text-embedding-004",
      apiKey: process.env.GOOGLE_API_KEY,
      taskType: TaskType.RETRIEVAL_DOCUMENT,
    });

    const pinecone = new Pinecone();
    const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX ?? "");

    const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
      pineconeIndex,
    });

    const retriever = vectorStore.asRetriever({
      k: 10,
      searchType: "mmr",
    });

    // const retrievalQuery = `
    // Find messages that match these criteria:
    // 1. Contains similar emotional content or reactions to: "${question}". Try to find exactly the words used here.
    // 2. Uses similar language patterns (Bengali/English mix)
    // 3. Addresses similar topics or situations
    // 4. Shows ${name}'s typical response style in similar contexts

    // Original question: "${question}"
    // `;

    const retrievalQuery = `Contains similar emotional content or reactions to: "${question}". Try to find exactly the words used here`;
    const rawDocs = await retriever.invoke(retrievalQuery);

    console.log('Retrieved contexts:',
      rawDocs.map((doc, index) => `${index + 1}. ${doc.pageContent}`).join('\n\n')
    );

    const retrievalChain = await createRetrievalChain({
      combineDocsChain: chain,
      retriever,
    });

    const response = await retrievalChain.invoke({
      input: question,
      context: rawDocs
        .map(doc => doc.pageContent)
        .join('\n---\n'),
    });

    res.status(200).json({
      answer: response.answer
    });

  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({
      error: "Failed to process request",
      details: error.message
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
  console.log('Environment:', process.env.NODE_ENV || 'development');
});