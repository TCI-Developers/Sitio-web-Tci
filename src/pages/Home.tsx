import Navbar from '../components/navbar';
import MainContent from '../components/mainContent.tsx';
import Footer from '../components/Footer.tsx';

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-r from-[#0f245f] to-[#00c0f4] m-0'>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  )
}

export default Home
