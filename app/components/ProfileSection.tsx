import React from 'react';
import { MapPin } from 'lucide-react';
import { Github, Twitter, Instagram } from './Icons';
import Image from 'next/image';

interface ProfileSectionProps {
  profile: {
    name: string;
    avatar: string;
    title: string;
    bio: string;
    location: string;
    socialLinks: {
      github: string;
      twitter: string;
      instagram: string;
    };
    stats: Array<{
      label: string;
      value: string;
      emoji: string;
    }>;
  };
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ profile }) => (
  <div className="text-center mb-12">
    <div className="relative inline-block mb-8 group">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 opacity-75"></div>
      <Image
        src={profile.avatar}
        alt={profile.name}
        width={128}
        height={128}
        className="relative rounded-full border-4 border-white shadow-xl transform transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    
    <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
      {profile.name}
    </h1>
    <p className="text-xl font-semibold text-gray-700 mb-2">{profile.title}</p>
    <p className="text-gray-600 mb-4 flex items-center justify-center">
      <MapPin className="w-5 h-5 mr-1" />
      {profile.location}
    </p>
    <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-700">{profile.bio}</p>
    
    {/* Fun Stats */}
    <div className="flex justify-center gap-8 mb-8 flex-wrap">
      {profile.stats.map((stat, index) => (
        <div 
          key={index} 
          className="bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-2 border-2 border-transparent hover:border-purple-200"
        >
          <div className="text-4xl mb-2">{stat.emoji}</div>
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            {stat.value}
          </div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
    
    {/* Social Links */}
    <div className="flex justify-center gap-8">
      {Object.entries(profile.socialLinks).map(([platform, link]) => (
        <a 
          key={platform}
          href={link}
          className="group flex items-center gap-2 text-gray-600 hover:text-purple-600 transform transition-all duration-300 hover:scale-110"
        >
          {platform === 'github' && <Github />}
          {platform === 'twitter' && <Twitter />}
          {platform === 'instagram' && <Instagram />}
          <span>{platform}</span>
        </a>
      ))}
    </div>
  </div>
);

