import './globals.css';
import SparklesIcon from '@/components/SparklesIcon';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import ContactIcon from '@/icons/contactIcon';
import HomeIcon from '@/icons/homeIcon';
import AboutIcon from '@/icons/abouticon';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CaptionCraft ',
  description: 'Add captions to your videos effortlessly!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black min-h-screen text-white`}>
        <div className="stars" aria-hidden="true">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="star" style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              animationDuration: `${Math.random() * 5 + 3}s`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
            }} />
          ))}
        </div>
        
        <main className="p-6 max-w-4xl mx-auto relative z-10">
          <header className="flex justify-between my-4 sm:my-1 items-center">
            <Link href="/" className="flex gap-2  items-center text-xl font-bold hover:scale-105 transition-transform">
              <SparklesIcon />
              <span className="neon-glow">CaptionCraft</span>
            </Link>
            <nav className="flex items-center gap-4 sm:gap-8 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full shadow-lg border border-white/20">
            
              <Link href='/' className='flex items-center gap-2 text-lg hover:scale-110 transition-transform neon-glow'>
                <HomeIcon />
                <span>Home</span>
              </Link>
              <Link href='/about' className='flex items-center gap-2 text-lg hover:scale-110 transition-transform neon-glow'>
                <AboutIcon />
                <span>About</span>
              </Link>
              <Link href='mailto:jeevithdharanish98@gmail.com' className='flex items-center gap-2 text-lg hover:scale-110 transition-transform neon-glow'>
                <ContactIcon />
                <span>Contact</span>
              </Link>
              
            </nav>
          </header>

          {children}
        </main>
      </body>
    </html>
  );
}
