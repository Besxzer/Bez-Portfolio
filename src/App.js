import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Welcome from './component/Welcome';
import About from './component/About';
import Contact from './component/Contact'
import Projects from './component/Projects';

function App() {
  return (
    <div className="App bg-neutral-900 h-full scroll-smooth w-full overflow-hidden flex flex-col items-center">
      <Navbar />
      <div className="flex flex-col items-center">
        <Welcome />
        <About id="about"/>
        <Projects id-="projects"/>
        <Contact id="contact"/>
        <p className='text-sm text-white mb-10'>Bez Be Easy!</p>
      </div>
    </div>

  );
}

export default App;
