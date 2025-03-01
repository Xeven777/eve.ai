import { motion } from "motion/react";
import { Github, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Documentation", href: "/docs" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

const socialLinks = [
  {
    icon: <Github className="h-5 w-5" />,
    href: "https://github.com/xeven777",
    label: "GitHub",
  },
  {
    icon: <Twitter className="h-5 w-5" />,
    href: "https://x.com/xevenbiswas",
    label: "Twitter",
  },
  {
    icon: <Instagram className="h-5 w-5" />,
    href: "https://instagram.com/anish_biswas_7_",
    label: "Instagram",
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://linkedin.com/in/anishbiswas777",
    label: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t rounded-t-xxl relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto pt-16 pb-8 px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-3"
          >
            <div className="mb-4 flex gap-2 items-center">
              <div className="rounded-full size-8 bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-200"></div>
              <h3 className="font-serif text-2xl bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                Eve.ai
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Preserving voices and memories through advanced AI technology.
              Create lifelike conversations that truly capture the essence of
              your loved ones.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background rounded-full hover:bg-muted transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * sectionIndex }}
              viewport={{ once: true }}
              className="col-span-1"
            >
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="pt-8 border-t border-muted/50">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} eve.ai. All rights reserved.
            </motion.p>
            <motion.div
              className="flex items-center space-x-1 mt-4 md:mt-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>
                by the
                <a
                  href="http://anish7.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 hover:underline"
                >
                  Anish
                </a>
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
