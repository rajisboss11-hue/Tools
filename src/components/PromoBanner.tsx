import { useEffect, useRef } from 'react';

interface PromoBannerProps {
  format?: '728x90' | '300x250' | '160x300' | '160x600' | '468x60' | '320x50' | 'native' | 'sticky-bottom' | 'popunder' | 'social-bar';
  id?: string;
  className?: string;
}

const AD_CONFIG: Record<string, { key: string; width: number; height: number }> = {
  '728x90': { key: '0d506bfc9ebf8b518b921a2dcab0dbf5', width: 728, height: 90 },
  '300x250': { key: 'df3e160617ee04a5fd65dceb42500f26', width: 300, height: 250 },
  '160x300': { key: '9c1ebc35124cb7380ac5bdb50b877e2d', width: 160, height: 300 },
  '160x600': { key: '6a3a31b90f7ab2e054c09952ae8658d1', width: 160, height: 600 },
  '468x60': { key: '399b06f61d014dbcc900bb6c970f5cff', width: 468, height: 60 },
  '320x50': { key: 'f9c7ad0c3695a2b765cf0b8207ec35b4', width: 320, height: 50 },
  'sticky-bottom': { key: 'f9c7ad0c3695a2b765cf0b8207ec35b4', width: 320, height: 50 },
};

export default function PromoBanner({ format = '728x90', className = '' }: PromoBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (format === 'popunder' || format === 'social-bar') return;
    if (loadedRef.current) return;
    if (!containerRef.current) return;

    loadedRef.current = true;
    const container = containerRef.current;

    if (format === 'native') {
      const script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      script.src = '//thrillingdeepcutlery.com/73333946f9b97c6db4f0c7b0c905df60/invoke.js';

      const nativeDiv = document.createElement('div');
      nativeDiv.id = 'container-73333946f9b97c6db4f0c7b0c905df60';

      container.appendChild(nativeDiv);
      container.appendChild(script);
      return;
    }

    const config = AD_CONFIG[format];
    if (!config) return;

    const optionsScript = document.createElement('script');
    optionsScript.type = 'text/javascript';
    optionsScript.textContent = `
      atOptions = {
        'key' : '${config.key}',
        'format' : 'iframe',
        'height' : ${config.height},
        'width' : ${config.width},
        'params' : {}
      };
    `;

    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.src = `//thrillingdeepcutlery.com/${config.key}/invoke.js`;

    container.appendChild(optionsScript);
    container.appendChild(invokeScript);
  }, [format]);

  if (format === 'popunder' || format === 'social-bar') {
    return null;
  }

  const isSticky = format === 'sticky-bottom';

  const config = AD_CONFIG[format];
  const minW = config ? `${config.width}px` : undefined;
  const minH = config ? `${config.height}px` : format === 'native' ? '150px' : undefined;

  return (
    <div className={`flex flex-col items-center justify-center overflow-hidden ${isSticky ? 'fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] py-2' : ''} ${className}`}>
      <div
        ref={containerRef}
        style={{ minWidth: minW, minHeight: minH, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      />
    </div>
  );
}
