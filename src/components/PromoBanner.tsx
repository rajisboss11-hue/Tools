import { useEffect, useRef } from 'react';

interface PromoBannerProps {
  format?: '728x90' | '300x250' | '160x600' | '468x60' | 'native' | 'sticky-bottom' | 'popunder' | 'social-bar';
  id?: string;
  className?: string;
}

export default function PromoBanner({ format = '728x90', id = 'demo-ad-id', className = '' }: PromoBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);

  // In a real Adsterra integration, you would inject the script tag here.
  // Example:
  // useEffect(() => {
  //   if (adRef.current && !adRef.current.firstChild) {
  //     const script = document.createElement('script');
  //     script.type = 'text/javascript';
  //     script.src = `//www.highperformanceformat.com/${id}/invoke.js`;
  //     script.async = true;
  //     adRef.current.appendChild(script);
  //   }
  // }, [id]);

  if (format === 'popunder' || format === 'social-bar') {
    return (
      <div className="hidden" data-ad-id={id} data-format={format}>
        {/* Inject Adsterra Popunder or Social Bar script here. These are invisible but trigger on clicks or as overlays. */}
      </div>
    );
  }

  const isSticky = format === 'sticky-bottom';

  return (
    <div className={`flex flex-col items-center justify-center bg-gray-200 border-2 border-dashed border-gray-400 p-4 text-center overflow-hidden ${isSticky ? 'fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]' : 'rounded-md'} ${className}`}>
      <div ref={adRef} className="w-full h-full flex flex-col items-center justify-center min-h-[50px]">
        <span className="text-gray-600 font-bold text-sm mb-1">Adsterra {isSticky ? 'Sticky Ad' : 'Ad Space'}</span>
        <span className="text-gray-500 text-xs">{format}</span>
        <span className="text-gray-400 text-[10px] mt-1">Replace with Adsterra script</span>
      </div>
    </div>
  );
}
