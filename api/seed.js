import { Pinecone } from "@pinecone-database/pinecone";
import { PineconeStore } from "@langchain/pinecone";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { JSONLoader } from "langchain/document_loaders/fs/json";

async function seedData() {
  console.time("seeding time");
  console.log("Data loading started");

  const loader = new JSONLoader("./purified-chat.json");

  const docs = await loader.load();
  console.log("Data loaded successfully");

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 2000,
    chunkOverlap: 50,
  });

  const splitDocs = await splitter.splitDocuments(docs);
  console.log("Data split successfully");

  const embeddings = new GoogleGenerativeAIEmbeddings({
    model: "text-embedding-004",
    apiKey: process.env.GOOGLE_API_KEY,
    taskType: TaskType.RETRIEVAL_DOCUMENT,
  });

  const pinecone = new Pinecone();
  const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX ?? "");

  await PineconeStore.fromDocuments(splitDocs, embeddings, {
    pineconeIndex,
  });
  console.log("Data seeded successfully");
  console.timeLog("seeding time");
  process.exit(0);
}

await seedData();
