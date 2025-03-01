import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import React, { Suspense } from "react";
import CustomCursor from "./components/ui/Cursor";
import ReactLenis from "lenis/react";

const HowItWorks = React.lazy(() => import("./components/HowItWorks"));
const Features = React.lazy(() => import("./components/Features"));
const Footer = React.lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <ReactLenis root>
      <CustomCursor />
      <main className="relative">
        <Navbar />
        <Hero />

        <Suspense>
          <HowItWorks />
        </Suspense>
        <Suspense>
          <Features />
        </Suspense>
        <Suspense>
          <Footer />
        </Suspense>
      </main>
    </ReactLenis>
  );
};

export default App;
