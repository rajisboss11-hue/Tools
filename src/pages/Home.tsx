import { Link } from 'react-router-dom';
import { ArrowRight, Wrench } from 'lucide-react';
import PromoBanner from '../components/PromoBanner';

export default function Home() {
  const featuredTools = [
    { id: 5, name: 'Super Grok AI', desc: 'Advanced AI assistant powered by Grok. Requires your API key.' },
    { id: 1, name: 'Free CC Generator', desc: 'Generate test credit card numbers for development.' },
    { id: 3, name: 'JSON Formatter', desc: 'Format and validate your JSON data.' },
  ];

  const recentPosts = [
    {
      id: 1,
      title: 'Grok AI: The Future of Uncensored Artificial Intelligence',
      excerpt: 'Explore how Grok AI is changing the landscape of artificial intelligence with real-time knowledge and a rebellious streak.',
      date: 'April 1, 2026',
      category: 'AI Tools'
    },
    {
      id: 2,
      title: 'Free Credit Cards Generator: How It Works and Use Cases',
      excerpt: 'Learn about virtual credit card generators, how developers use them for testing payment gateways, and safety tips.',
      date: 'March 28, 2026',
      category: 'Tools'
    },
    {
      id: 3,
      title: 'Seedance 2.0: Revolutionizing AI Video Generation',
      excerpt: 'Discover the new features in Seedance 2.0, the ultimate AI video generator that brings your imagination to life.',
      date: 'March 25, 2026',
      category: 'AI Video'
    }
  ];

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Welcome to <span className="text-blue-600">FREE ALL AI</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Your one-stop destination for the latest AI news, insights, and powerful free online tools. Fully optimized for all devices.
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
      <PromoBanner format="728x90" className="w-full" />

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
