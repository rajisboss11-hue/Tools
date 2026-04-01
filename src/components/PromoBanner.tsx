import { useEffect, useRef } from 'react';

interface PromoBannerProps {
  format?: '728x90' | '300x250' | '160x300' | '160x600' | '468x60' | '320x50' | 'native' | 'sticky-bottom' | 'popunder' | 'social-bar';
  id?: string;
  className?: string;
}

export default function PromoBanner({ format = '728x90', id = 'demo-ad-id', className = '' }: PromoBannerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (format === 'popunder' || format === 'social-bar') return;

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

    const writeAd = () => {
      if (!iframeRef.current) return;
      const doc = iframeRef.current.contentWindow?.document;
      if (!doc) return;

      doc.open();
      if (format === 'native') {
        doc.write(`
          <html>
            <head>
              <style>body{margin:0;padding:0;overflow:hidden;background:transparent;}</style>
            </head>
            <body>
              <script async="async" data-cfasync="false" src="//thrillingdeepcutlery.com/73333946f9b97c6db4f0c7b0c905df60/invoke.js"></script>
              <div id="container-73333946f9b97c6db4f0c7b0c905df60"></div>
            </body>
          </html>
        `);
      } else if (key) {
        doc.write(`
          <html>
            <head>
              <style>body{margin:0;padding:0;overflow:hidden;display:flex;justify-content:center;align-items:center;background:transparent;}</style>
            </head>
            <body>
              <script type="text/javascript">
                atOptions = {
                  'key' : '${key}',
                  'format' : 'iframe',
                  'height' : ${height},
                  'width' : ${width},
                  'params' : {}
                };
              </script>
              <script type="text/javascript" src="//thrillingdeepcutlery.com/${key}/invoke.js"></script>
            </body>
          </html>
        `);
      }
      doc.close();
    };

    // Small delay to ensure iframe is ready
    const timer = setTimeout(writeAd, 100);
    return () => clearTimeout(timer);
  }, [format]);

  if (format === 'popunder' || format === 'social-bar') {
    return null;
  }

  const isSticky = format === 'sticky-bottom';
  
  // Determine iframe dimensions
  let w = '100%';
  let h = '100%';
  if (format === '728x90') { w = '728px'; h = '90px'; }
  else if (format === '300x250') { w = '300px'; h = '250px'; }
  else if (format === '160x300') { w = '160px'; h = '300px'; }
  else if (format === '160x600') { w = '160px'; h = '600px'; }
  else if (format === '468x60') { w = '468px'; h = '60px'; }
  else if (format === '320x50' || format === 'sticky-bottom') { w = '320px'; h = '50px'; }
  else if (format === 'native') { h = '150px'; } // Approximate height for native

  return (
    <div className={`flex flex-col items-center justify-center overflow-hidden ${isSticky ? 'fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] py-2' : ''} ${className}`}>
      <iframe
        ref={iframeRef}
        style={{ width: w, height: h, border: 'none', overflow: 'hidden' }}
        scrolling="no"
        title={`Adsterra ${format}`}
      />
    </div>
  );
}
