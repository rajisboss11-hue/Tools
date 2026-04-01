import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import PromoBanner from './PromoBanner';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] font-sans pb-24">
      {/* Global Invisible Ads (Highest CPM - Popunder & Social Bar) */}
      <PromoBanner format="popunder" />
      <PromoBanner format="social-bar" />

      <Navbar />
      
      {/* Top Header Ad (Desktop: 728x90, Mobile: 300x250) */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6 flex flex-col items-center gap-4">
        {/* Desktop Only Ad */}
        <PromoBanner format="728x90" className="hidden md:flex w-full max-w-4xl mx-auto" />
        
        {/* Mobile Only Ad - High Revenue First for Mobile Users */}
        <PromoBanner format="300x250" className="flex md:hidden w-full max-w-[300px] mx-auto" />
      </div>

      <main className="flex-grow max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <div className="flex-grow min-w-0">
          <Outlet />
        </div>
        
        {/* Sidebar */}
        <Sidebar />
      </main>

      <Footer />

      {/* Sticky Bottom Ad (High Viewability = High Earnings) */}
      <PromoBanner format="sticky-bottom" className="h-[90px]" />
    </div>
  );
}
