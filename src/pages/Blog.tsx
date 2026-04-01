import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AdBanner from '../components/AdBanner';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'The Ultimate Guide to Monetizing with Adsterra',
      excerpt: 'Learn how to properly place Adsterra ads on your Blogger or React site to maximize your CPM and revenue without hurting user experience.',
      date: 'April 1, 2026',
      category: 'Monetization',
      image: 'https://picsum.photos/seed/monetize/800/400'
    },
    {
      id: 2,
      title: 'Why Iframe Tools Drive Massive Traffic',
      excerpt: 'Embedding free tools on your blog is the best way to get returning visitors and lower your bounce rate. Here is how to do it effectively.',
      date: 'March 28, 2026',
      category: 'SEO Tools',
      image: 'https://picsum.photos/seed/tools/800/400'
    },
    {
      id: 3,
      title: 'Responsive Design Best Practices for 2026',
      excerpt: 'Ensure your website looks perfect on mobile, tablet, and desktop using modern CSS frameworks like Tailwind CSS.',
      date: 'March 25, 2026',
      category: 'Web Development',
      image: 'https://picsum.photos/seed/design/800/400'
    },
    {
      id: 4,
      title: 'How to Increase Your Blog Traffic Organically',
      excerpt: 'Stop paying for ads. Use these 5 proven SEO strategies to rank higher on Google and bring organic traffic to your blog.',
      date: 'March 20, 2026',
      category: 'Blogging Tips',
      image: 'https://picsum.photos/seed/traffic/800/400'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-extrabold text-gray-900">Blog Articles</h1>
        <p className="text-gray-600 mt-2">Read the latest tips on blogging, SEO, and monetization.</p>
      </div>

      <div className="space-y-8">
        {posts.map((post, index) => (
          <div key={post.id}>
            <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full font-medium">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  <Link to={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                  Read full article <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
            
            {/* Insert an ad after EVERY post for maximum earning */}
            {index !== posts.length - 1 && (
              <div className="my-8">
                <AdBanner format="native" className="w-full min-h-[120px]" />
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Pagination Placeholder */}
      <div className="flex justify-center pt-8">
        <nav className="flex gap-2">
          <button className="px-4 py-2 border rounded-md bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
          <button className="px-4 py-2 border rounded-md bg-blue-600 text-white font-medium">1</button>
          <button className="px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-50">2</button>
          <button className="px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-50">3</button>
          <button className="px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-50">Next</button>
        </nav>
      </div>
    </div>
  );
}
