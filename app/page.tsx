"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const gifCategories = [
  {
    category: "Base Humans",
    gifs: [
      { src: "gifs/base_idle_walk_small.gif", title: "Small" },
      { src: "gifs/base_idle_walk_medium.gif", title: "Medium" },
      { src: "gifs/base_idle_walk_mediumfit.gif", title: "Medium Fit" },
      { src: "gifs/base_idle_walk_large.gif", title: "Large" },
      { src: "gifs/base_idle_walk_xlarge.gif", title: "Extra Large" },
    ],
  },
  {
    category: "Base Humans: Guns",
    gifs: [
      { src: "gifs/base_idle_walk_handgun_medium.gif", title: "Handgun" },
      { src: "gifs/base_idle_walk_rifle_medium.gif", title: "Rifle" },
      { src: "gifs/base_idle_walk_shotgun_medium.gif", title: "Shotgun" },
      { src: "gifs/base_idle_walk_semiauto_medium.gif", title: "Semi Auto" },
      {
        src: "gifs/base_idle_walk_rocketlauncher_medium.gif",
        title: "Rocket",
      },
    ],
  },
  {
    category: "Clothing Options Humans",
    gifs: [
      { src: "gifs/flight_suit_idle_walk_medium.gif", title: "Wet Suit" },
      { src: "gifs/mechanic_idle_walk_medium.gif", title: "Mechanic" },
      { src: "gifs/security_idle_walk_medium.gif", title: "Security" },
      { src: "gifs/nurse_idle_walk_medium.gif", title: "Nurse" },
    ],
  },
  {
    category: "Slimes",
    gifs: [
      { src: "gifs/slime_idle_walk_greys.gif", title: "Corrupted Greys" },
    ],
  },
];

export default function GifShowcase() {
  const [selectedGifs, setSelectedGifs] = useState(
    gifCategories.map((category) => category.gifs[0])
  );

  return (
    <div className="flex flex-col items-center p-6 space-y-6">
      {/* Header */}
      <header className="w-full flex flex-col items-center p-4 text-white">
        <img src="logo.png" alt="Pocket Space Logo" className="w-32 h-32" />
      </header>

      <h1 className="text-3xl font-bold">POCKET SPACE: IDLE</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gifCategories.map((category, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-semibold">{category.category}</h2>
            <Card className="w-[500px] h-[300px] flex items-center justify-center">
              <CardContent className="flex items-center justify-center">
                <motion.img
                  key={selectedGifs[index].src}
                  src={selectedGifs[index].src}
                  alt={selectedGifs[index].title}
                  className="max-w-full max-h-full rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </CardContent>
            </Card>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 overflow-auto max-w-[500px]">
              {category.gifs.map((gif, gifIndex) => (
                <Button
                  key={gifIndex}
                  onClick={() => {
                    const updatedGifs = [...selectedGifs];
                    updatedGifs[index] = gif;
                    setSelectedGifs(updatedGifs);
                  }}
                  className="px-4 py-2 text-sm font-medium border rounded-lg text-center w-full truncate"
                >
                  {gif.title}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="w-full p-4 bg-gray-900 text-white text-center">
        &copy; {new Date().getFullYear()} Craig Pfau. All rights reserved.
      </footer>
    </div>
  );
}
