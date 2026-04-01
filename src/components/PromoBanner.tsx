import { useEffect, useRef } from 'react';

interface PromoBannerProps {
  format?: '728x90' | '300x250' | '160x300' | '160x600' | '468x60' | '320x50' | 'native' | 'sticky-bottom' | 'popunder' | 'social-bar';
  id?: string;
  className?: string;
}

export default function PromoBanner({ format = '728x90', id = 'demo-ad-id', className = '' }: PromoBannerProps) {
  if (format === 'popunder' || format === 'social-bar') {
    return null;
  }

  let key = '';
  let width = 0;
  let height = 0;
  let isNative = false;

  if (format === '728x90') { key = '0d506bfc9ebf8b518b921a2dcab0dbf5'; width = 728; height = 90; }
  else if (format === '300x250') { key = 'df3e160617ee04a5fd65dceb42500f26'; width = 300; height = 250; }
  else if (format === '160x300') { key = '9c1ebc35124cb7380ac5bdb50b877e2d'; width = 160; height = 300; }
  else if (format === '160x600') { key = '6a3a31b90f7ab2e054c09952ae8658d1'; width = 160; height = 600; }
  else if (format === '468x60') { key = '399b06f61d014dbcc900bb6c970f5cff'; width = 468; height = 60; }
  else if (format === '320x50' || format === 'sticky-bottom') { key = 'f9c7ad0c3695a2b765cf0b8207ec35b4'; width = 320; height = 50; }
  else if (format === 'native') { isNative = true; height = 150; }

  const isSticky = format === 'sticky-bottom';
  const w = width ? `${width}px` : '100%';
  const h = height ? `${height}px` : '100%';

  const src = `/ad.html?key=${key}&w=${width}&h=${height}&native=${isNative}`;

  return (
    <div className={`flex flex-col items-center justify-center overflow-hidden ${isSticky ? 'fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] py-2' : ''} ${className}`}>
      <iframe
        src={src}
        style={{ width: w, height: h, border: 'none', overflow: 'hidden' }}
        scrolling="no"
        title={`Adsterra ${format}`}
      />
    </div>
  );
}
