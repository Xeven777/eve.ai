import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Steps, Step } from "@/components/ui/steps";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/ui/code-block";
import {
  Github,
  Terminal,
  Database,
  MessageSquare,
  Cog,
  FileCode,
} from "lucide-react";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const iconVariants = {
  initial: { scale: 0.8, rotate: 0 },
  animate: {
    scale: 1,
    rotate: [0, 10, -10, 10, 0],
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

const gitCloneCommand =
  "git clone https://github.com/Xeven777/eve.ai\ncd eve.ai/api";
const installCommands = {
  npm: "npm install",
  pnpm: "pnpm install",
};

const envConfig = `PINECONE_API_KEY="your-pinecone-api-key"
PINECONE_HOST="your-pinecone-host"
PINECONE_ENVIRONMENT="your-pinecone-environment"
PINECONE_INDEX="your-pinecone-index-name"
GOOGLE_API_KEY="your-google-api-key"
GROQ_API_KEY="your-groq-api-key" # Optional alternative model
NAME="Person's name"
FEATURES="Description of person's communication style and personality traits"`;

const processCommand = "npx tsx refine.ts";
const seedCommand = "node seed.js";
const startCommand = "node index.js";

const apiUsageExample = `POST /chat
Content-Type: application/json

{
  "question": "Ei, ki korchis?"
}`;

const apiResponseExample = `{
  "answer": "Ei kaj shesh kore ektu cooking niye busy chilam😆. Tui bol, tui ki korchis?"
}`;

const HowToSetup = () => {
  return (
    <section
      className="py-24 rounded-xxl bg-gradient-to-b from-accent/5 to-secondary/20"
      id="setup"
    >
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="text-center mb-16"
          variants={fadeInVariants}
          custom={0}
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <motion.div variants={iconVariants}>
              <Badge className="mb-2 px-5 py-1 bg-gradient-to-r from-primary to-accent">
                🚀 Installation
              </Badge>
            </motion.div>
          </motion.div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Setup Guide
          </h2>
          <p className="text-muted-foreground text-sm md:text-base px-2 max-w-2xl mx-auto">
            Get started with EVE.AI in minutes. Follow these simple steps to
            create a personalized AI chat experience that feels just like
            talking to a friend.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="max-w-3xl mx-auto">
          <motion.div variants={itemVariants}>
            <Card className="border border-primary/40 bg-background/50 backdrop-blur-sm shadow-lg mb-8">
              <CardHeader className="bg-gradient-to-r from-background to-accent/10 border-b">
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="size-5" />
                  Setup Instructions
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Steps>
                  <Step>
                    <div className="step-title flex items-center gap-2">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Github className="size-5 mr-1 text-primary" />
                      </motion.div>
                      <span className="font-semibold tracking-tight">
                        Clone the Repository
                      </span>
                    </div>
                    <div className="step-description mb-4">
                      Start by cloning the EVE.AI repository to your local
                      machine 📦
                    </div>
                    <CodeBlock language="bash" code={gitCloneCommand} />
                  </Step>

                  <Step>
                    <div className="step-title flex items-center gap-2">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Cog className="size-5 mr-1 text-primary" />
                      </motion.div>
                      <span className="font-semibold tracking-tight">
                        Environment Setup
                      </span>
                    </div>
                    <div className="step-description mb-4">
                      Create a <code>.env</code> file in the root directory with
                      the following variables ⚙️
                    </div>
                    <CodeBlock language="bash" code={envConfig} />
                  </Step>

                  <Step>
                    <div className="step-title flex items-center gap-2">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Terminal className="size-5 mr-1 text-primary" />
                      </motion.div>
                      <span className="font-semibold tracking-tight">
                        Install Dependencies
                      </span>
                    </div>
                    <div className="step-description mb-4">
                      Install required packages using your preferred package
                      manager 📚
                    </div>
                    <Tabs defaultValue="pnpm">
                      <TabsList className="mb-2">
                        <TabsTrigger value="npm">npm</TabsTrigger>
                        <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                      </TabsList>
                      {Object.entries(installCommands).map(
                        ([manager, command]) => (
                          <TabsContent key={manager} value={manager}>
                            <CodeBlock language="bash" code={command} />
                          </TabsContent>
                        )
                      )}
                    </Tabs>
                  </Step>

                  <Step>
                    <div className="step-title flex items-center gap-2">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <FileCode className="size-5 mr-1 text-primary" />
                      </motion.div>
                      <span className="font-semibold tracking-tight">
                        Process Chat Data
                      </span>
                    </div>
                    <div className="step-description mb-4">
                      Export your WhatsApp chat and place it in the api
                      directory as <code>demochat.txt</code>, then run: 🧹
                    </div>
                    <CodeBlock language="bash" code={processCommand} />
                  </Step>

                  <Step>
                    <div className="step-title flex items-center gap-2">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Database className="size-5 mr-1 text-primary" />
                      </motion.div>
                      <span className="font-semibold tracking-tight">
                        Seed Vector Database
                      </span>
                    </div>
                    <div className="step-description mb-4">
                      Ensure your Pinecone database is set up, then run: 🧠
                    </div>
                    <CodeBlock language="bash" code={seedCommand} />
                  </Step>

                  <Step>
                    <div className="step-title flex items-center gap-2">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Terminal className="size-5 mr-1 text-primary" />
                      </motion.div>
                      <span className="font-semibold tracking-tight">
                        Start the API Server
                      </span>
                    </div>
                    <div className="step-description mb-4">
                      Launch the API server to start using your personalized
                      chat AI 🚀
                    </div>
                    <CodeBlock language="bash" code={startCommand} />
                  </Step>

                  <Step>
                    <div className="step-title flex items-center gap-2">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <MessageSquare className="size-5 mr-1 text-primary" />
                      </motion.div>
                      <span className="font-semibold tracking-tight">
                        API Usage
                      </span>
                    </div>
                    <div className="step-description mb-4">
                      Make a POST request to the chat endpoint 💬
                    </div>
                    <CodeBlock language="http" code={apiUsageExample} />
                    <div className="mt-4 mb-2 font-medium">Response:</div>
                    <CodeBlock language="json" code={apiResponseExample} />
                  </Step>
                </Steps>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center text-muted-foreground"
          >
            <p>✨ Start chatting with your personalized AI in minutes! ✨</p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-2 text-sm"
            >
              Need help? Check out our{" "}
              <a
                href="https://github.com/Xeven777/eve.ai#-eveai---personalized-chat-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary hover:text-primary/80"
              >
                documentation
              </a>
              .
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowToSetup;
