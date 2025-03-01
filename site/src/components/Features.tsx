import { MessageSquare, Shield, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import datenight from "@/assets/datenight.svg";
import ai from "@/assets/ai.svg";
import privacy from "@/assets/privacy.svg";

const features = [
  {
    icon: <MessageSquare className="size-10" />,
    title: "Lifelike Conversations",
    description:
      "Experience natural, flowing conversations that truly capture their unique way of speaking.",
    gradient: "from-purple-500 to-pink-500",
    iconBg: "bg-purple-100 dark:bg-purple-900/20",
    imgurl: datenight,
  },
  {
    icon: <Sparkles className="size-10" />,
    title: "Advanced AI Understanding",
    description:
      "Our AI learns speech patterns, inside jokes, and even bilingual expressions.",
    gradient: "from-blue-500 to-cyan-400",
    iconBg: "bg-blue-100 dark:bg-blue-900/20",
    imgurl: ai,
  },
  {
    icon: <Shield className="size-10" />,
    title: "Complete Privacy",
    description:
      "Your conversations are encrypted and treated with the utmost respect and security.",
    gradient: "from-emerald-500 to-teal-400",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/20",
    imgurl: privacy,
  },
];

const Features = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      className="pt-32 pb-44 px-4 relative overflow-hidden"
      id="features"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-5 w-72 h-72 bg-primary/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/50 rounded-full blur-3xl" />
      </div>

      <div className="container relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl serif mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text tracking-tight">
            Preserve their <span className="italic">Voice</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card
                className={cn(
                  "h-[500px] p-8 border-0 relative group bg-gradient-to-r hover:shadow-lg transition-shadow duration-500",
                  feature.gradient,
                  "before:absolute before:inset-0 before:bg-gradient-to-br before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-10 overflow-hidden flex",
                  `before:${feature.gradient}`
                )}
              >
                <img
                  src="/noise.svg"
                  alt=""
                  className="w-full inset-0 object-cover absolute z-0 opacity-70"
                />
                <div className="mb-6 p-3 rounded-lg inline-flex text-white absolute top-0 left-0 z-10">
                  {feature.icon}
                </div>
                <img
                  src={feature.imgurl}
                  alt={feature.title}
                  className="w-full absolute top-28 left-0 px-4 z-10"
                />
                <div className="absolute w-full bottom-0 h-2/3 left-0 bg-gradient-to-t from-white z-0" />
                <div className="absolute size-32 -top-20 -left-20 bg-white/80 blur-2xl" />
                <div className="absolute size-32 -top-20 -right-20 bg-white/80 blur-2xl" />

                <div className="relative z-10 mt-auto">
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>

                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
