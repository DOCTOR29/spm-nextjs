import React from 'react';

interface NewsTickerProps {
  news: string[];
  speed?: number;
}

export function NewsTicker({ news, speed = 1905 }: NewsTickerProps) {
  return (
    <div className="relative -mt-16 pt-3 mx-auto text-center mb-20 overflow-hidden bg-red-900 text-white font-bold h-12">
      {news}
      </div>
    // </div>
  );
}