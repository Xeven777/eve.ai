import { Button } from "@/components/ui/button";
import img1 from "@/assets/generated-image(18).jpeg";
import img2 from "@/assets/image-11.webp";
import img3 from "@/assets/image-12.webp";
import img4 from "@/assets/hearts-5947464_1280.png";
import img5 from "@/assets/hands.svg";
import Floating, {
  FloatingElement,
} from "@/fancy/components/image/parallax-floating";
import StitchesButton from "@/components/stichesBtn";
import { SparklesText } from "@/components/SparkleText";

const Hero = () => {
  return (
    <Floating className="flex flex-col items-center px-4 relative overflow-hidden pb-96">
      <div className="absolute inset-0 bg-gradient-to-br -z-10 from-primary/20 to-purple-600/30 via-background" />
      <div className="absolute -z-10 -inset-2.5 bg-[linear-gradient(to_right,#f2f2f2_1px,transparent_1px),linear-gradient(to_bottom,#f2f2f2_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <h1 className="text-4xl md:text-6xl lg:text-8xl serif mt-32 md:mt-40 text-center font-medium tracking-tighter mb-6 motion-duration-1000 motion-preset-blur-up pointer-events-none">
        Reconnect with the
        <SparklesText className="text-pink-500 italic font-light" text="Ones" />
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

      <FloatingElement depth={0.8} className="absolute top-20 left-12">
        <img
          src={img4}
          alt="img"
          className="object-cover size-40 rotate-12 drop-shadow-md"
        />
      </FloatingElement>

      <FloatingElement depth={0.8} className="absolute top-16 right-10">
        <img src={img5} alt="img" className="object-cover size-64 rotate-12" />
      </FloatingElement>

      <FloatingElement depth={1.5} className="absolute bottom-28 left-24">
        <div className="border-2 rounded-md backdrop-blur-md bg-card/50 border-pink-300 border-dashed p-2 overflow-hidden shadow-lg cursor-pointer motion-duration-1500 motion-preset-blur-right-lg -rotate-12">
          <img
            src={img1}
            alt="img"
            className="rounded-md mb-8 object-cover size-60"
          />
        </div>
      </FloatingElement>

      <FloatingElement depth={0.7} className="absolute bottom-16">
        <div className="border-2 rounded-md backdrop-blur-md bg-card/50 border-pink-300 border-dashed p-2 overflow-hidden shadow-lg cursor-pointer motion-duration-2000 motion-preset-blur-left-lg rotate-2">
          <img
            src={img3}
            alt="img"
            className="rounded-md mb-8 object-cover size-60"
          />
        </div>
      </FloatingElement>

      <FloatingElement depth={1.4} className="absolute bottom-32 right-24">
        <div className="border-2 rounded-md backdrop-blur-md bg-card/50 border-pink-300 border-dashed p-2 overflow-hidden shadow-lg cursor-pointer motion-duration-2000 motion-preset-blur-left-lg rotate-12">
          <img
            src={img2}
            alt="img"
            className="rounded-md mb-8 object-cover size-60"
          />
        </div>
      </FloatingElement>
    </Floating>
  );
};

export default Hero;
