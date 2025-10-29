'use client';

import Image from 'next/image';
import React from 'react';
import Search from '../home/Search';

interface HeaderProps {
  className?: string;
  imageClassName?: string;
}

export default function Header({
  className = "",
  imageClassName = "",
}: HeaderProps) {
  return (
    <header className={`relative w-full h-screen overflow-hidden ${className}`}>
      {/* Background Image */}
      <Image
        src='/hero.jpeg'
        alt="Header background"
        fill
        className={`object-fill w-full h-full ${imageClassName}`}
        priority
        sizes="100vw"
      />

      <div className="absolute inset-0 z-10">
        <Search />
      </div>
  
    </header>
  );
}
