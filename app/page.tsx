'use client';

import React, { useCallback, useState, useRef } from 'react';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { ProfileSection } from './components/ProfileSection';
import { ProjectsGrid } from './components/ProjectsGrid';

export default function Page() {
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [isConfettiRunning, setIsConfettiRunning] = useState(false);
  const { width, height } = useWindowSize();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleConfettiClick = useCallback(() => {
    setIsConfettiActive(true);
    setIsConfettiRunning(true);
    const audio = new Audio('/pop.wav');
    audio.play();
  }, []);

  const handleConfettiComplete = useCallback(() => {
    setIsConfettiActive(false);
    setIsConfettiRunning(false);
  }, []);

  const profile = {
    name: "Hito",
    avatar: "/zork.png",
    title: "Young Entrepreneur",
    bio: "Turning ideas into reality, one line of code at a time. A passionate problem solver, builder, and dreamer who's not afraid to think big.",
    location: "Kenya",
    socialLinks: {
      github: "https://github.com/HI-T0",
      twitter: "https://x.com/MayaImani163427",
      instagram: "https://www.instagram.com/hi._.t0/"
    },
    stats: [
      {
        label: "Projects Launched",
        value: "2",
        emoji: "🚀"
      },
      {
        label: "Happy Users",
        value: "10+",
        emoji: "😊"
      },
      {
        label: "Coffee Consumed",
        value: "∞",
        emoji: "☕"
      }
    ],
  };

  const projects = [
    {
      title: "WorldWide chat",
      description: "A chat app that connects you with people around the world. Say hello to the world!",
      tech: ["React", "Node.js", "TypeScript"],
      status: "Live",
      color: "from-purple-500 to-blue-500",
      url: "https://worldwidechat.vercel.app"
    },
    {
      title: "Puzzle-Quest",
      description: "Test your wits with Puzzle Quest, a fun and challenging Wordle-inspired game. Solve daily puzzles and become the ultimate word master!",
      tech: ["React", "TypeScript", "Node.js"],
      status: "Live",
      color: "from-purple-500 to-blue-500",
      url: "https://puzzlequest.vercel.app/"
    },
    // You can add more projects here
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8 animate-gradient-xy">
      {isConfettiActive && (
        <ReactConfetti
          width={width}
          height={height}
          recycle={isConfettiRunning}
          numberOfPieces={200}
          gravity={0.2}
          onConfettiComplete={handleConfettiComplete}
        />
      )}
      <div className="max-w-4xl mx-auto px-4 relative">
        <button
          onClick={handleConfettiClick}
          className="absolute top-4 right-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Click Me!
        </button>
        <ProfileSection profile={profile} />
        <ProjectsGrid projects={projects} />
      </div>
    </div>
  );
}

