import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import React, { Suspense } from "react";
import CustomCursor from "./components/ui/Cursor";

const HowItWorks = React.lazy(() => import("./components/HowItWorks"));
const Features = React.lazy(() => import("./components/Features"));
const Footer = React.lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <main className="relative">
      <CustomCursor />
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
  );
};

export default App;
