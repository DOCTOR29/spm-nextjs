import React from 'react';

interface NewsTickerProps {
  news: string[];
  speed?: number;
}

export function NewsTicker({ news, speed = 1905 }: NewsTickerProps) {
  return (
    <div className="relative -mt-16 pt-2 overflow-hidden bg-red-900 text-white font-bold h-12">
      <div 
        className="whitespace-nowrap animate-scroll inline-block"
        style={{
          animationDuration: `${news.join(' ').length * speed}ms`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite'
        }}
      >
        {news.map((item, index) => (
          <span key={index} className="mx-8 text-lg">
            {item}
            <span className="mx-4 text-yellow-400">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}