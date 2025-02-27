import { motion, useInView } from "motion/react";
import { useRef } from "react";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const messages = [
    {
      text: "Hey! Remember that time we went hiking in the rain? 🌧️",
      sender: "user",
      avatar: "👤",
    },
    {
      text: "Of course! We were completely soaked but couldn't stop laughing 😄",
      sender: "assistant",
      avatar: "🤖",
    },
    {
      text: "And you said এই বৃষ্টি তো থামার নাম-ই নিচ্ছে না!",
      sender: "user",
      avatar: "👤",
    },
    {
      text: "Haha yes! That's exactly how I would say it - mixing Bengali and English 💫",
      sender: "assistant",
      avatar: "🤖",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-6xl motion-duration-2000 motion-preset-slide-up-md serif text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-blue-400 tracking-tighter font-medium italic">
          See How It Works
        </h2>

        <motion.div
          ref={ref}
          className="space-y-6 max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl shadow-gray-200/80"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {messages.map((message, index) => (
            <motion.div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {message.sender === "assistant" && (
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm mr-2 flex-shrink-0">
                  {message.avatar}
                </div>
              )}
              <div
                className={`max-w-[80%] p-4 rounded-2xl ${
                  message.sender === "user"
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-tr-none"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-tl-none"
                }`}
              >
                <p className="text-sm md:text-base">{message.text}</p>
              </div>
              {message.sender === "user" && (
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm ml-2 flex-shrink-0">
                  {message.avatar}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <p className="text-sm italic">
            Natural conversations across multiple languages, just like with a
            friend.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
