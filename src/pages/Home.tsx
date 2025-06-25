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
    if (!location.hash) return;
  
    const id = location.hash;
    let attempts = 0;
    const maxAttempts = 20;
  
    const tryScroll = () => {
      const element = document.querySelector(id);
      if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(tryScroll, 300); // cada 100ms
      }
    };
  
    tryScroll();
  }, [location]);
  
  

  return (
    <section className='mt-20 text-text w-full' style={{letterSpacing:'-0.099em'}}>
      <Hero />
      <div id='servicios' className='backdrop-blur-[200px] rounded-[50px]'>
        <Systems />
        <ManagmentTeam />
      </div>
      <TciAroundTheWorld />
      <Blog />
    
    </section>
  )
}

export default Home
