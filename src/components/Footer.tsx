import PromoBanner from './PromoBanner';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1a2b4c] text-white mt-12">
      {/* Pre-footer Ad */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 border-b border-white/10">
        <PromoBanner format="728x90" className="w-full max-w-4xl mx-auto bg-white/5 border-white/10 text-gray-400" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white text-[#1a2b4c] font-black text-xl px-2 py-1 rounded">Free</div>
              <span className="font-extrabold text-2xl text-white tracking-tight">AllAI</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Access the largest list of top-quality AI tools available on the web. Fully optimized for mobile and desktop experiences.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors">Full List</Link></li>
              <li><Link to="/categories" className="hover:text-white transition-colors">AI Categories</Link></li>
              <li><Link to="/tutorials" className="hover:text-white transition-colors">AI Tutorials</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">Subscribe to get the latest tools and articles.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="bg-[#3b82f6] hover:bg-[#2563eb] px-4 py-2 rounded-r-md transition-colors font-bold">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} FreeAllAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
