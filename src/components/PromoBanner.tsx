import { useEffect, useRef } from 'react';

interface PromoBannerProps {
  format?: '728x90' | '300x250' | '160x300' | '160x600' | '468x60' | '320x50' | 'native' | 'sticky-bottom' | 'popunder' | 'social-bar';
  id?: string;
  className?: string;
}

export default function PromoBanner({ format = '728x90', id = 'demo-ad-id', className = '' }: PromoBannerProps) {
  const banner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // We don't inject popunder/social-bar here anymore, they are in index.html
    if (format === 'popunder' || format === 'social-bar') return;

    if (banner.current && !banner.current.querySelector('.adsterra-script')) {
      // Clear existing content just in case
      banner.current.innerHTML = '';

      let key = '';
      let width = 0;
      let height = 0;

      if (format === '728x90') {
        key = '0d506bfc9ebf8b518b921a2dcab0dbf5';
        width = 728;
        height = 90;
      } else if (format === '300x250') {
        key = 'df3e160617ee04a5fd65dceb42500f26';
        width = 300;
        height = 250;
      } else if (format === '160x300') {
        key = '9c1ebc35124cb7380ac5bdb50b877e2d';
        width = 160;
        height = 300;
      } else if (format === '160x600') {
        key = '6a3a31b90f7ab2e054c09952ae8658d1';
        width = 160;
        height = 600;
      } else if (format === '468x60') {
        key = '399b06f61d014dbcc900bb6c970f5cff';
        width = 468;
        height = 60;
      } else if (format === '320x50' || format === 'sticky-bottom') {
        key = 'f9c7ad0c3695a2b765cf0b8207ec35b4';
        width = 320;
        height = 50;
      }

      if (format === 'native') {
        // Native Banner
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.dataset.cfasync = 'false';
        script.src = '//thrillingdeepcutlery.com/73333946f9b97c6db4f0c7b0c905df60/invoke.js';
        script.className = 'adsterra-script';
        
        const containerDiv = document.createElement('div');
        containerDiv.id = 'container-73333946f9b97c6db4f0c7b0c905df60';
        
        banner.current.append(script);
        banner.current.append(containerDiv);
      } else if (key) {
        // Standard Banners
        const conf = document.createElement('script');
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `//thrillingdeepcutlery.com/${key}/invoke.js`;
        script.className = 'adsterra-script';
        conf.type = 'text/javascript';
        conf.innerHTML = `atOptions = {
          'key' : '${key}',
          'format' : 'iframe',
          'height' : ${height},
          'width' : ${width},
          'params' : {}
        };`;
        banner.current.append(conf);
        banner.current.append(script);
      }
    }
  }, [format]);

  if (format === 'popunder' || format === 'social-bar') {
    return null; // Handled in index.html
  }

  const isSticky = format === 'sticky-bottom';

  return (
    <div className={`flex flex-col items-center justify-center overflow-hidden ${isSticky ? 'fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] py-2' : ''} ${className}`}>
      <div ref={banner} className="w-full h-full flex flex-col items-center justify-center min-h-[50px]">
        {/* Adsterra ad will be injected here */}
      </div>
    </div>
  );
}
