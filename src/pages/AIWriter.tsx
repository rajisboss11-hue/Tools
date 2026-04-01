import { useState } from 'react';
import { Loader2, Sparkles, Copy, Check } from 'lucide-react';

export default function AIWriter() {
  const [topic, setTopic] = useState('');
  const [draft, setDraft] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateDraft = async () => {
    if (!topic) return;
    setIsLoading(true);
    setDraft('');
    setCopied(false);

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: 'llama3-70b-8192',
          messages: [
            {
              role: 'user',
              content: `Write a comprehensive, SEO-optimized blog post draft about: "${topic}". Include an engaging title, introduction, 3-4 main sections with headings, and a conclusion. Format it in Markdown.`
            }
          ],
          temperature: 0.7,
        })
      });

      const data = await response.json();
      
      if (data.choices && data.choices.length > 0) {
        setDraft(data.choices[0].message.content);
      } else {
        setDraft('Failed to generate content. Please check your API key or try again.');
        console.error('Groq API Error:', data);
      }
    } catch (error) {
      console.error(error);
      setDraft('An error occurred while generating the draft. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(draft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-blue-600" />
          AI Blog Writer (Groq Powered)
        </h1>
        <p className="text-gray-600 mt-2">Generate SEO-optimized blog post drafts instantly using Groq's Llama 3 model.</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What do you want to write about? (e.g., "Trending AI News", "How to use Groq API")
        </label>
        <div className="flex gap-4">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter a topic or keyword..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            onKeyDown={(e) => e.key === 'Enter' && generateDraft()}
          />
          <button
            onClick={generateDraft}
            disabled={isLoading || !topic}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
            Generate
          </button>
        </div>
      </div>

      {draft && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4 border-b pb-4">
            <h2 className="text-xl font-bold text-gray-900">Generated Draft</h2>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy Markdown'}
            </button>
          </div>
          <div className="prose prose-blue max-w-none whitespace-pre-wrap font-sans">
            {draft}
          </div>
        </div>
      )}
    </div>
  );
}
