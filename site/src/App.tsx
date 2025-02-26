import { Button } from "@/components/ui/button";
import { MessageSquare, Shield, Sparkles } from "lucide-react";
import img1 from "@/assets/generated-image(18).jpeg";
import img2 from "@/assets/image-11.webp";
import img3 from "@/assets/image-12.webp";
import { Card } from "@/components/ui/card";
import Floating, {
  FloatingElement,
} from "@/fancy/components/image/parallax-floating";

import Navbar from "./components/Navbar";
import StitchesButton from "./components/stichesBtn";
import { SparklesText } from "./components/SparkleText";
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
      <Floating className="flex flex-col items-center px-4 relative overflow-hidden pb-96">
        <div className="absolute inset-0 bg-gradient-to-br -z-10 from-primary/15 via-background to-accent/5" />
        <div className="absolute -z-10 -inset-2.5 bg-[linear-gradient(to_right,#f2f2f2_1px,transparent_1px),linear-gradient(to_bottom,#f2f2f2_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="size-32 -z-10 bg-primary/30 rounded-full absolute blur-3xl" />
        <h1 className="text-4xl md:text-6xl lg:text-8xl serif mt-32 md:mt-40 text-center font-medium tracking-tighter mb-6 motion-duration-1000 motion-preset-blur-up pointer-events-none">
          Reconnect with the
          <SparklesText
            className="bg-gradient-to-r from-rose-400 to-pink-600 text-transparent bg-clip-text italic font-light"
            text="Ones"
          />
          <br />
          you
          <span className="font-medium px-4 bg-gradient-to-r from-rose-400 to-pink-600 text-transparent bg-clip-text italic">
            miss
          </span>
          the most
        </h1>

        <p className="text-lg pointer-events-none md:text-xl text-center max-w-2xl mb-8 text-muted-foreground motion-duration-1000 motion-preset-blur-up">
          Transform your cherished chat histories into interactive conversations
          that capture their unique personality, tone, and style.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <StitchesButton>Get Started</StitchesButton>

          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
        <FloatingElement depth={1.5} className="absolute bottom-28 left-24">
          <div className="border-2 rounded-md border-pink-300 border-dashed p-2 overflow-hidden shadow-xl cursor-pointer motion-duration-1500 motion-preset-blur-right-lg -rotate-12">
            <img
              src={img1}
              alt="img"
              className="rounded-md mb-8 object-cover size-60"
            />
          </div>
        </FloatingElement>

        <FloatingElement depth={0.7} className="absolute bottom-16">
          <div className="border-2 rounded-md border-pink-300 border-dashed p-2 overflow-hidden shadow-xl cursor-pointer motion-duration-2000 motion-preset-blur-left-lg rotate-2">
            <img
              src={img3}
              alt="img"
              className="rounded-md mb-8 object-cover size-60"
            />
          </div>
        </FloatingElement>

        <FloatingElement depth={1.4} className="absolute bottom-32 right-24">
          <div className="border-2 rounded-md border-pink-300 border-dashed p-2 overflow-hidden shadow-xl cursor-pointer motion-duration-2000 motion-preset-blur-left-lg rotate-12">
            <img
              src={img2}
              alt="img"
              className="rounded-md mb-8 object-cover size-60"
            />
          </div>
        </FloatingElement>
      </Floating>

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
