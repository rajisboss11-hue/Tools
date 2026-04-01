import PromoBanner from './PromoBanner';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const categories = ['Technology', 'SEO Tools', 'Web Development', 'Blogging Tips', 'Monetization'];
  
  const recentPosts = [
    { id: 1, title: 'How to maximize Adsterra Revenue', path: '/blog/1' },
    { id: 2, title: 'Top 10 Free SEO Tools in 2026', path: '/blog/2' },
    { id: 3, title: 'Getting started with React & Tailwind', path: '/blog/3' },
  ];

  return (
    <aside className="w-full lg:w-80 flex-shrink-0 space-y-6">
      {/* Sidebar Ad 1 */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Advertisement</h3>
        <PromoBanner format="300x250" className="w-full min-h-[250px]" />
      </div>

      {/* Categories Widget */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category, idx) => (
            <li key={idx}>
              <Link to="/blog" className="text-gray-600 hover:text-blue-600 flex items-center justify-between">
                <span>{category}</span>
                <span className="bg-gray-100 text-gray-500 text-xs py-1 px-2 rounded-full">
                  {Math.floor(Math.random() * 20) + 1}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts Widget */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Recent Posts</h3>
        <ul className="space-y-3">
          {recentPosts.map((post) => (
            <li key={post.id}>
              <Link to={post.path} className="text-gray-600 hover:text-blue-600 text-sm font-medium line-clamp-2">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar Ad 2 */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 sticky top-20">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Advertisement</h3>
        <PromoBanner format="160x600" className="w-full min-h-[600px]" />
      </div>
    </aside>
  );
}
