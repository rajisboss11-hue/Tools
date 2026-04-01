import { useEffect, useRef } from 'react';

interface PromoBannerProps {
  format?: '728x90' | '300x250' | '160x300' | '468x60' | '320x50' | 'native' | 'sticky-bottom' | 'popunder' | 'social-bar';
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
        key = '25042be093b75b7434193374360a96ee';
        width = 728;
        height = 90;
      } else if (format === '300x250') {
        key = '4df301aeb258f547f22be9a622fb66af';
        width = 300;
        height = 250;
      } else if (format === '160x300') {
        key = '5711bf352c2e72e85fc5863c1710cfcf';
        width = 160;
        height = 300;
      } else if (format === '468x60') {
        key = '84fd07df2f45cacdff86949dfd140d2d';
        width = 468;
        height = 60;
      } else if (format === '320x50' || format === 'sticky-bottom') {
        key = '0767639872c645df6b5dc11a9a211327';
        width = 320;
        height = 50;
      }

      if (format === 'native') {
        // Native Banner
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.dataset.cfasync = 'false';
        script.src = '//thrillingdeepcutlery.com/ef62270d1cae19026cdc37ef862eb7b0/invoke.js';
        script.className = 'adsterra-script';
        
        const containerDiv = document.createElement('div');
        containerDiv.id = 'container-ef62270d1cae19026cdc37ef862eb7b0';
        
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
