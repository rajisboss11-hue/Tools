import { useState } from 'react';
import { Maximize2, Minimize2, Wrench } from 'lucide-react';
import AdBanner from '../components/AdBanner';

export default function Tools() {
  const [activeTool, setActiveTool] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // We use safe Wikipedia or Example.com iframes as placeholders for the user's actual tools.
  const toolsList = [
    { 
      id: 1, 
      name: 'Chkr.cc Tool', 
      desc: 'can you test it?',
      iframeUrl: 'https://chkr.cc/' 
    },
    { 
      id: 2, 
      name: 'Word & Character Counter', 
      desc: 'Count words, characters, and estimate reading time.',
      iframeUrl: 'https://example.com' 
    },
    { 
      id: 3, 
      name: 'JSON Formatter & Validator', 
      desc: 'Format, validate, and beautify your JSON data.',
      iframeUrl: 'https://example.com' 
    },
    { 
      id: 4, 
      name: 'Color Palette Generator', 
      desc: 'Extract colors from images or generate random palettes.',
      iframeUrl: 'https://example.com' 
    },
    { 
      id: 5, 
      name: 'Super Grok AI', 
      desc: 'Advanced AI assistant powered by Grok. Requires your API key.',
      iframeUrl: 'https://v0-grokpaid.vercel.app/' 
    },
  ];

  const handleToolClick = (id: number) => {
    setActiveTool(id);
    setIsFullscreen(false);
    // Scroll to the tool viewer
    setTimeout(() => {
      document.getElementById('tool-viewer')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const activeToolData = toolsList.find(t => t.id === activeTool);

  return (
    <div className="space-y-8">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-extrabold text-gray-900">Free Online Tools</h1>
        <p className="text-gray-600 mt-2">Select a tool below to use it directly on our site.</p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {toolsList.map((tool) => (
          <button
            key={tool.id}
            onClick={() => handleToolClick(tool.id)}
            className={`text-left p-5 rounded-xl border transition-all ${
              activeTool === tool.id 
                ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' 
                : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm'
            }`}
          >
            <h3 className={`text-lg font-bold ${activeTool === tool.id ? 'text-blue-700' : 'text-gray-900'}`}>
              {tool.name}
            </h3>
            <p className="text-gray-500 text-sm mt-1">{tool.desc}</p>
          </button>
        ))}
      </div>

      {/* Adsterra Ad between grid and viewer */}
      <AdBanner format="728x90" className="w-full my-6" />

      {/* Tool Viewer (Iframe) */}
      {activeToolData && (
        <div className="space-y-4">
          {/* High CTR placement right above the tool */}
          <AdBanner format="native" className="w-full min-h-[100px]" />
          
          {/* Professional Sponsor Link */}
          <div className="flex justify-center py-2">
            <a 
              href="https://example.com/your-adsterra-direct-link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium py-2 px-6 rounded flex items-center gap-2 transition-colors w-full sm:w-auto justify-center"
            >
              <span>Sponsored: Discover Premium Features</span>
            </a>
          </div>

          <div 
            id="tool-viewer" 
            className={`bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col transition-all duration-300 ${
              isFullscreen ? 'fixed inset-0 z-[100] m-0 rounded-none' : 'h-[600px]'
            }`}
          >
            {/* Viewer Header */}
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
            <h2 className="font-bold text-gray-800 flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              {activeToolData.name}
            </h2>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
          
          {/* Iframe Container */}
          <div className="flex-grow relative bg-gray-100">
            {/* 
              In a real scenario, you would replace the src with your actual tool URL.
              We use sandbox attributes to ensure security when embedding third-party tools.
            */}
            <iframe 
              src={activeToolData.iframeUrl}
              className="absolute inset-0 w-full h-full border-none"
              title={activeToolData.name}
              sandbox="allow-scripts allow-same-origin allow-forms"
              loading="lazy"
            />
          </div>
        </div>

        {/* High CTR placement right below the tool */}
        <AdBanner format="728x90" className="w-full" />
      </div>
      )}

      {!activeToolData && (
        <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl h-64 flex flex-col items-center justify-center text-gray-500">
          <Wrench className="w-12 h-12 text-gray-300 mb-3" />
          <p>Select a tool from the grid above to start using it.</p>
        </div>
      )}
    </div>
  );
}
