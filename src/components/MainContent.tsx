import '../styles/globals.css';
import Hero from './ui/Hero';
import Systems from './ui/Systems';
import ManagmentTeam from './ui/ManagmentTeam';
import TciAroundTheWorld from './ui/TciAroundTheWorld';
import Blog from './ui/Blog';



const MainContent = () => {
  return (
    <main className='mt-20 text-text w-full' style={{letterSpacing:'-0.099em'}}>
      <Hero />
      <div className='backdrop-blur-[200px] rounded-[50px]'>
        <Systems />
        <ManagmentTeam />
      </div>
      <TciAroundTheWorld />
      <Blog />
      
    </main>
  )
}

export default MainContent
