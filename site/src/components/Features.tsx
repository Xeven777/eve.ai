import { MessageSquare, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <MessageSquare className="w-10 h-10" />,
    title: "Lifelike Conversations",
    description:
      "Experience natural, flowing conversations that truly capture their unique way of speaking.",
    gradient: "from-purple-500 to-pink-500",
    iconBg: "bg-purple-100 dark:bg-purple-900/20",
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: "Advanced AI Understanding",
    description:
      "Our AI learns speech patterns, inside jokes, and even bilingual expressions.",
    gradient: "from-blue-500 to-cyan-400",
    iconBg: "bg-blue-100 dark:bg-blue-900/20",
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Complete Privacy",
    description:
      "Your conversations are encrypted and treated with the utmost respect and security.",
    gradient: "from-emerald-500 to-teal-400",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/20",
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
    <section className="py-24 px-4 relative overflow-hidden">
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
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full"
              >
                <Card
                  className={cn(
                    "h-full p-8 border-0 shadow-xl relative group backdrop-blur-sm bg-white/80 dark:bg-black/50",
                    "before:absolute before:inset-0 before:bg-gradient-to-br",
                    `before:${feature.gradient}`,
                    "before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-10",
                    "overflow-hidden"
                  )}
                >
                  <div className="relative z-10">
                    <div
                      className={cn(
                        "mb-6 p-3 rounded-lg inline-flex text-white",
                        `bg-gradient-to-br ${feature.gradient}`
                      )}
                    >
                      {feature.icon}
                    </div>

                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>

                    <p className="text-muted-foreground text-lg">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div
                      className={cn(
                        "w-20 h-20 rotate-45 transform origin-bottom-left bg-gradient-to-br",
                        feature.gradient,
                        "opacity-20"
                      )}
                    ></div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
