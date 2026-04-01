import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Download } from 'lucide-react';
import AdBanner from '../components/AdBanner';

export default function SinglePost() {
  const { id } = useParams();

  // Mock data for the post
  const post = {
    title: 'The Ultimate Guide to Monetizing with Adsterra',
    date: 'April 1, 2026',
    author: 'Admin',
    category: 'Monetization',
    image: 'https://picsum.photos/seed/monetize/1200/600',
    content: `
      <p>Monetizing your blog or tool website is crucial for sustaining your online business. Adsterra is one of the best ad networks for publishers, offering high CPMs and various ad formats.</p>
      
      <h2>1. Choosing the Right Ad Formats</h2>
      <p>Not all ad formats are created equal. For a blog with embedded tools, we recommend a mix of:</p>
      <ul>
        <li><strong>Popunders:</strong> High revenue, but use them sparingly to avoid annoying users.</li>
        <li><strong>Social Bar:</strong> Highly engaging and non-intrusive.</li>
        <li><strong>Native Banners:</strong> Blend perfectly with your blog content.</li>
      </ul>

      <h2>2. Strategic Ad Placement</h2>
      <p>Placement is everything. If you place ads where users don't look, your CTR (Click-Through Rate) will be zero. Here are the best spots:</p>
      <ul>
        <li><strong>Header (728x90):</strong> Immediately visible on desktop.</li>
        <li><strong>Sidebar (300x250 or 160x600):</strong> Stays visible as users read your content.</li>
        <li><strong>In-Content:</strong> Placing an ad after the 2nd or 3rd paragraph works wonders.</li>
      </ul>

      <h2>3. Balancing UX and Revenue</h2>
      <p>It's tempting to flood your site with ads, but this will increase your bounce rate. Keep your site fast, ensure your iframe tools load quickly, and use lazy loading for your ad scripts.</p>
      
      <p>By following these strategies, you can turn your blog and tools website into a passive income machine.</p>
    `
  };

  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Post Header Image */}
      <div className="relative h-[300px] sm:h-[400px] w-full">
        <img 
          src={post.image} 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white">
          <Link to="/blog" className="inline-flex items-center text-sm font-medium text-blue-300 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium mb-3">
            <span className="bg-blue-600 px-3 py-1 rounded-full">{post.category}</span>
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {post.date}</span>
            <span className="flex items-center"><User className="w-4 h-4 mr-1" /> {post.author}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">{post.title}</h1>
        </div>
      </div>

      {/* Post Content */}
      <div className="p-6 sm:p-8">
        {/* Top Content Ad */}
        <AdBanner format="728x90" className="w-full mb-8" />

        {/* Professional Direct Link Button */}
        <div className="my-8 flex justify-center">
          <a 
            href="https://example.com/your-adsterra-direct-link" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium py-3 px-8 rounded flex items-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download Resources</span>
          </a>
        </div>

        <div 
          className="prose prose-lg max-w-none prose-blue prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Mid Content Ad (Native) */}
        <AdBanner format="native" className="w-full my-8 min-h-[150px]" />

        {/* Bottom Content Ad */}
        <AdBanner format="300x250" className="w-full mt-8" />

        {/* Tags */}
        <div className="mt-8 pt-8 border-t flex items-center gap-2 text-sm text-gray-500">
          <Tag className="w-4 h-4" />
          <span className="font-medium text-gray-700">Tags:</span>
          <span className="bg-gray-100 px-2 py-1 rounded-md">Adsterra</span>
          <span className="bg-gray-100 px-2 py-1 rounded-md">Monetization</span>
          <span className="bg-gray-100 px-2 py-1 rounded-md">Blogging</span>
        </div>
      </div>
    </article>
  );
}
