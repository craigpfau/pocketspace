"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const gifCategories = [
  {
    category: "Human (Small)",
    gifs: [{ src: "gifs/human_s_base_idle_walk.gif", title: "Base Idle" }],
  },
  {
    category: "Human (Medium)",
    gifs: [
      { src: "gifs/human_m_base_idle_walk.gif", title: "Base Idle" },
      { src: "gifs/human_m_admiral_idle_walk.gif", title: "Admiral Idle" },
      {
        src: "gifs/human_m_containment_idle_walk.gif",
        title: "Containment Idle",
      },
      { src: "gifs/human_m_cryo_idle_walk.gif", title: "Cryo Idle" },
      { src: "gifs/human_m_hoodie_idle_walk.gif", title: "Hoodie" },
      { src: "gifs/human_m_mechanic_idle_walk.gif", title: "Mechanic" },
      { src: "gifs/human_m_nurse_idle_walk.gif", title: "Nurse" },
      { src: "gifs/human_m_security_idle_walk.gif", title: "Security" },
      { src: "gifs/human_m_base_idle_walk_handgun.gif", title: "Handgun" },
      { src: "gifs/human_m_base_idle_walk_rifle.gif", title: "Rifle" },
      {
        src: "gifs/human_m_base_idle_walk_rocketlauncher.gif",
        title: "Rocket",
      },
      { src: "gifs/human_m_base_idle_walk_semiauto.gif", title: "Semi Auto" },
      { src: "gifs/human_m_base_idle_walk_shotgun.gif", title: "Shotgun" },
    ],
  },
  {
    category: "Human (Medium Fit)",
    gifs: [{ src: "gifs/human_mf_base_idle_walk.gif", title: "Base Idle" }],
  },
  {
    category: "Human (Large)",
    gifs: [{ src: "gifs/human_l_base_idle_walk.gif", title: "Base Idle" }],
  },
  {
    category: "Human (Extra Large)",
    gifs: [
      { src: "gifs/human_xl_base_idle_walk.gif", title: "Base Idle" },
      { src: "gifs/human_xl_cryo_idle_walk.gif", title: "Cryo Idle" },
    ],
  },
  {
    category: "Furries",
    gifs: [{ src: "gifs/furries_idle_walk.gif", title: "Idle" }],
  },
  {
    category: "Greys",
    gifs: [{ src: "gifs/greys_idle_walk.gif", title: "Idle" }],
  },
  {
    category: "Robots",
    gifs: [{ src: "gifs/robots_idle_walk.gif", title: "Idle" }],
  },
  {
    category: "Slimes",
    gifs: [
      { src: "gifs/slimes_idle_walk_greys.gif", title: "Corrupted Greys Idle" },
    ],
  },
];

export default function GifShowcase() {
  const [selectedGifs, setSelectedGifs] = useState(
    gifCategories.map((category) => category.gifs[0])
  );

  return (
    <div className="flex flex-col items-center p-6">
      {/* Header */}
      <header className="w-full flex flex-col items-center p-4 text-white">
        <img src="logo.png" alt="Pocket Space Logo" className="w-32 h-32" />
      </header>

      <h1 className="text-3xl font-bold">POCKET SPACE: IDLE</h1>
      <div className="flex flex-col items-center p-6 space-y-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 space-y-6">
        {gifCategories.map((category, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-semibold">{category.category}</h2>
            <Card className="w-[350px] h-[300px] flex items-center justify-center">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 overflow-auto max-w-[350px]">
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
