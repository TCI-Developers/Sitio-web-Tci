import Hero from './home-ui/Hero.tsx';
import Systems from './home-ui/Systems.tsx';
import ManagmentTeam from './home-ui/ManagmentTeam.tsx';
import TciAroundTheWorld from './home-ui/TciAroundTheWorld.tsx';
import Blog from './home-ui/Blog.tsx';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          const yOffset = -80; 
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          setTimeout(() => {
            window.scrollTo({ top: y, behavior: "smooth" });
          }, 100); 
        }
      }
    };

    scrollToHash();
  }, [location]);
  
  return (
    <section className='mt-20 text-text w-full' style={{letterSpacing:'-0.099em'}}>
      
      <Hero />
      <div className='backdrop-blur-[200px] rounded-[50px]'>
        <Systems />
        <ManagmentTeam />
      </div>
      <TciAroundTheWorld />
      <Blog />
    
    </section>
  )
}

export default Home
