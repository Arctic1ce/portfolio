"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Snowflake, Flame } from "lucide-react";
import { Mountains_of_Christmas } from "next/font/google";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const mountains = Mountains_of_Christmas({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  fallback: ["serif"],
});

type CardPreset = {
  recipientName: string;
  insideLines: string[];
  signOff: string;
  middleImageSrc?: string;
  middleImageAlt?: string;
  coverImageSrc?: string;
  coverSubImageSrc?: string;
  coverBadgeSrc?: string;
  coverBadgeAlt?: string;
};

const cardPresets: Record<string, CardPreset> = {
  default: {
    recipientName: "Liepa",
    insideLines: [
      "You are the greatest thing to have ever happened to me. You make me laugh, smile, and feel so loved. I'm so grateful to have met you and to have you in my life.",
      "Your kindness is truly remarkable, and you have so much love to give to the people in your life. I love all your silly little obsessions and hobbies and how much joy they bring you.",
      "Above all else, I appreciate you always being there for me and listening without any judgment. It truly means the world to me and I will be forever grateful for your presence in my life.",
      "I hope you have a wonderful Christmas and a happy new year, and I hope to spend many more with you!",
      "P.S. I know I'm not the most creative person like you, and most definitely not as skilled of an artist as you, but I still wanted to make you a Christmas card. I hope you like it!",
    ],
    signOff: "I love you so much,\nArtin",
    middleImageSrc: "/weinerdog.jpg",
    middleImageAlt: "Holiday dachshund illustration",
    coverImageSrc: "/beigechristmas.jpg",
    coverSubImageSrc: "/santa_sleigh.png",
    coverBadgeSrc: "/weinerdog.jpg",
    coverBadgeAlt: "Holiday dachshund illustration",
  },
};

type Snowflake = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
};

export default function XMasCard() {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const rawName = searchParams?.get("name")?.trim() ?? "";
  const hasName = rawName.length > 0;
  const presetKey = hasName ? rawName.toLowerCase() : "default";
  const preset = cardPresets[presetKey] ?? cardPresets.default;
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 10,
      duration: 14 + Math.random() * 10,
      delay: Math.random() * 5,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Cozy cabin background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c1916] via-[#2b261f] to-[#141210]" />

      {/* Snow */}
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute text-white/30"
          style={{ left: `${flake.left}%` }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: "110vh", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Snowflake size={flake.size} />
        </motion.div>
      ))}

      {/* Landing content */}
      <div className="relative z-10 text-center">
        <Flame className="mx-auto mb-6 text-orange-400" size={42} />
        <h1
          className={`text-4xl md:text-5xl mb-4 text-[#f4efe9] drop-shadow-lg ${mountains.className}`}
        >
          A Cozy Winter Night
        </h1>
        <div className="space-y-2 mb-10">
          <p
            className={`text-[#d8cfc4] max-w-md mx-auto leading-relaxed ${mountains.className}`}
          >
            Snow falls quietly outside the cabin.
            <br />
            Click the card to open it.
          </p>
          {!hasName && (
            <p
              className={`text-[#d8cfc4] max-w-md mx-auto leading-relaxed ${mountains.className}`}
            >
              Sorry, you don&apos;t have a card...
            </p>
          )}
        </div>

        {/* Card container */}
        <div
          className={`relative mx-auto h-[500px] w-[350px] ${
            hasName ? "cursor-pointer" : "cursor-not-allowed opacity-90"
          }`}
          style={{ transformStyle: "preserve-3d" }}
          onClick={() => hasName && setOpen(!open)}
          aria-disabled={!hasName}
        >
          {/* Back (inside left) */}
          <div
            className="absolute top-0 left-0 h-full w-full bg-[#f5efe6] p-6 shadow-2xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="mt-4 text-[#6b2e1f] text-center">
              <h5 className="font-serif text-lg mb-3">
                Dear {preset.recipientName},
              </h5>
              <div className="text-[11px] leading-snug space-y-3">
                {preset.insideLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <h6 className="font-serif text-lg mt-4 whitespace-pre-line">
                {preset.signOff}
              </h6>
            </div>
          </div>

          {/* Middle page */}
          <motion.div
            className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#3a342c] to-[#26221d] shadow-2xl"
            style={{
              transformOrigin: "left center",
              transformStyle: "preserve-3d",
            }}
            animate={{ rotateY: open ? -159 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="h-full flex items-center justify-center">
              {preset.middleImageSrc && (
                <Image
                  src={preset.middleImageSrc}
                  alt={preset.middleImageAlt ?? "Christmas illustration"}
                  width={360}
                  height={360}
                  className="max-h-[60%] max-w-[60%] object-contain drop-shadow-lg rounded-lg"
                  priority={false}
                />
              )}
            </div>
          </motion.div>

          {/* Front cover */}
          <motion.div
            className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#4a3f34] to-[#2a241d] shadow-2xl"
            style={{
              transformOrigin: "left center",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
            animate={{ rotateY: open ? -160 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Cover background image */}
            {preset.coverImageSrc && (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${preset.coverImageSrc}')`,
                }}
              />
            )}

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Front cover text */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4">
              {preset.coverSubImageSrc && (
                <Image
                  src={preset.coverSubImageSrc}
                  alt="Santa's sleigh"
                  width={150}
                  height={150}
                  className="mt-4 max-h-[95px] w-auto object-contain drop-shadow-lg"
                  priority={false}
                />
              )}
              <h2
                className={`text-4xl text-[#f5efe6] tracking-wide drop-shadow-lg ${mountains.className}`}
              >
                Merry
                <br />
                Christmas
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
