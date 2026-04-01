import { Link } from 'react-router-dom';
import { ArrowRight, Wrench } from 'lucide-react';
import AdBanner from '../components/AdBanner';

export default function Home() {
  const featuredTools = [
    { id: 5, name: 'Super Grok AI', desc: 'Advanced AI assistant powered by Grok. Requires your API key.' },
    { id: 1, name: 'SEO Analyzer', desc: 'Analyze your website SEO instantly.' },
    { id: 3, name: 'JSON Formatter', desc: 'Format and validate your JSON data.' },
  ];

  const recentPosts = [
    {
      id: 1,
      title: 'The Ultimate Guide to Monetizing with Adsterra',
      excerpt: 'Learn how to properly place Adsterra ads on your Blogger or React site to maximize your CPM and revenue without hurting user experience.',
      date: 'April 1, 2026',
      category: 'Monetization'
    },
    {
      id: 2,
      title: 'Why Iframe Tools Drive Massive Traffic',
      excerpt: 'Embedding free tools on your blog is the best way to get returning visitors and lower your bounce rate. Here is how to do it.',
      date: 'March 28, 2026',
      category: 'SEO Tools'
    },
    {
      id: 3,
      title: 'Responsive Design Best Practices for 2026',
      excerpt: 'Ensure your website looks perfect on mobile, tablet, and desktop using modern CSS frameworks like Tailwind CSS.',
      date: 'March 25, 2026',
      category: 'Web Development'
    }
  ];

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Welcome to <span className="text-blue-600">Blog&Tools</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Your one-stop destination for insightful articles and powerful free online tools. Fully optimized for all devices and ready for monetization.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/tools" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center">
            <Wrench className="w-5 h-5 mr-2" />
            Explore Tools
          </Link>
          <Link to="/blog" className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            Read Blog
          </Link>
        </div>
      </section>

      {/* In-content Ad */}
      <AdBanner format="728x90" className="w-full" />

      {/* Featured Tools Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Tools</h2>
          <Link to="/tools" className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-sm">
            View all <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTools.map(tool => (
            <Link key={tool.id} to="/tools" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <Wrench className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.name}</h3>
              <p className="text-gray-600 text-sm">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Posts Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
          <Link to="/blog" className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-sm">
            View all <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="space-y-6">
          {recentPosts.map(post => (
            <article key={post.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                <span className="bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full font-medium">
                  {post.category}
                </span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                <Link to={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                Read more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
