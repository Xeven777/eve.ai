import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Shield, Sparkles } from "lucide-react";

import { Card } from "@/components/ui/card";
import Navbar from "./components/Navbar";
const features = [
  {
    icon: <MessageSquare className="w-10 h-10" />,
    title: "Lifelike Conversations",
    description:
      "Experience natural, flowing conversations that truly capture their unique way of speaking.",
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: "Advanced AI Understanding",
    description:
      "Our AI learns speech patterns, inside jokes, and even bilingual expressions.",
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Complete Privacy",
    description:
      "Your conversations are encrypted and treated with the utmost respect and security.",
  },
];

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="min-h-svh flex flex-col items-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br -z-10 from-primary/15 via-background to-accent/5" />
        {/* <div className="absolute top-0 h-svh w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(340,100,75,0.3),rgba(255,255,255,0))] opacity-65 brightness-200"></div> */}
        <div className="absolute -z-10 -inset-2.5 bg-[linear-gradient(to_right,#f2f2f2_1px,transparent_1px),linear-gradient(to_bottom,#f2f2f2_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="size-32 -z-10 bg-primary/30 rounded-full absolute blur-3xl" />
        <h1 className="text-4xl md:text-6xl lg:text-7xl serif mt-32 md:mt-44 text-center font-medium tracking-tighter mb-6 motion-preset-slide-right motion-duration-1000 motion-preset-fade">
          Reconnect with the Ones You Miss
        </h1>
        <Heart className="absolute size-52 bottom-0 fill-primary/10 stroke-none z-10 motion-preset-fade " />

        <p className="text-lg md:text-xl text-center max-w-2xl mb-8 text-muted-foreground motion-preset-fade motion-duration-2000">
          Transform your cherished chat histories into interactive conversations
          that capture their unique personality, tone, and style.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg">Get Started</Button>

          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
            See How It Works
          </h2>

          <div className="space-y-4">
            <div
              className="chat-bubble chat-bubble-left"
              style={{ animationDelay: "200ms" }}
            >
              Hey! Remember that time we went hiking in the rain? 🌧️
            </div>

            <div
              className="chat-bubble chat-bubble-right"
              style={{ animationDelay: "400ms" }}
            >
              Of course! We were completely soaked but couldn't stop laughing 😄
            </div>

            <div
              className="chat-bubble chat-bubble-left"
              style={{ animationDelay: "600ms" }}
            >
              And you said "এই বৃষ্টি তো থামার নাম-ই নিচ্ছে না!"
            </div>

            <div
              className="chat-bubble chat-bubble-right"
              style={{ animationDelay: "800ms" }}
            >
              Haha yes! That's exactly how I would say it - mixing Bengali and
              English 💫
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
            Preserve Their Voice
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-background hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-4 text-primary">{feature.icon}</div>

                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>

                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
