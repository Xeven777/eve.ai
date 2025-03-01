# 🤖 Eve.AI - Personalized Chat AI

Eve.AI is a system that learns communication patterns from WhatsApp chat history and creates a personalized AI chat experience that mimics a specific person's unique communication style, language patterns, and personality.

The system consists of three main components:

1. **🧹 Data Processing Pipeline**: Cleanses and structures raw WhatsApp chat exports
2. **🧠 Vector Database**: Stores conversations for semantic retrieval
3. **⚙️ API Server**: Handles chat requests and generates personalized responses

## 🔍 How It Works

### 1. Data Processing

The system takes raw WhatsApp chat exports and processes them to create clean, structured data:

- Removes system messages, media notifications, and other noise
- Creates a structured JSON with participants and conversations
- Filters out very short messages and keeps meaningful interactions

```bash
# Process a WhatsApp chat export
npx tsx refine.ts
```

### 2. Vector Database Seeding

The processed conversations are embedded and stored in a Pinecone vector database:

- Text is split into manageable chunks
- Google's AI creates vector embeddings for each chunk
- These vectors are stored in Pinecone for semantic search

```bash
# Seed the vector database with processed chat data
node seed.js
```

### 3. API Server

The API retrieves relevant messages and generates personalized responses:

- When a query is received, it performs semantic search to find relevant past conversations
- These conversations provide context about how the person would typically respond
- A carefully crafted prompt instructs the language model to mimic the person's style
- The AI generates a response that matches the person's unique communication patterns

## 🚀 Setup Instructions

1. **Environment Setup**

   Create a `.env` file with the following variables:

   ```
   PINECONE_API_KEY="your-pinecone-api-key"
   PINECONE_HOST="your-pinecone-host"
   PINECONE_ENVIRONMENT="your-pinecone-environment"
   PINECONE_INDEX="your-pinecone-index-name"
   GOOGLE_API_KEY="your-google-api-key"
   GROQ_API_KEY="your-groq-api-key" # Optional alternative model
   NAME="Person's name"
   FEATURES="Description of person's communication style and personality traits"
   ```

2. **Install Dependencies**

   ```bash
   pnpm install
   ```

3. **Export and Process Chat Data**

   Export your WhatsApp chat (see [WhatsApp Export Guide](../docs/whatsapp-export-guide.md) for detailed instructions).

   Place your WhatsApp chat export in the api directory as `demochat.txt` and run:

   ```bash
   npx tsx refine.ts
   ```

4. **Seed Vector Database**

   Ensure your Pinecone database is set up, then run:

   ```bash
   node seed.js
   ```

5. **Start the API Server**

   ```bash
   node index.js
   ```

## 📡 API Usage

### Chat Endpoint

```http
POST /chat
Content-Type: application/json

{
  "question": "How's your day going?"
}
```

Response:

```json
{
  "answer": "Ekdom moja korchi ajke! Office er kaj shesh kore ektu cooking niye busy chilam. Tui bol, tor ki hocche?"
}
```

## 🛠️ Technology Stack

### Backend

- **🔄 Runtime**: Node.js
- **🌐 Server Framework**: Express.js
- **🧠 AI/ML**:
  - **LangChain**: Framework for building LLM applications
  - **Google Gemini 1.5 Pro**: Primary language model
  - **Groq/Llama 3.3 70B**: Alternative language model
  - **Google text-embedding-004**: Embedding model for semantic search
- **💾 Database**:
  - **Pinecone**: Vector database for efficient semantic retrieval
- **📝 Languages**:
  - **JavaScript/TypeScript**: Core programming languages

### Development Tools

- **📦 Package Management**: npm/pnpm
- **⚙️ Environment Management**: dotenv
- **🔄 TypeScript Compiler**: tsx for direct execution of TypeScript files

## ✨ Customization

The personality and response style are controlled through environment variables:

- `NAME`: The name of the person being mimicked
- `FEATURES`: Description of the person's communication style and personality traits
