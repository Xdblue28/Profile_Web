
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Features } from './sections/Features';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black w-full overflow-x-hidden selection:bg-primary selection:text-black text-[#E1E0CC]">
      <Hero />
      <About />
      <Features />
      <Contact />
    </div>
  );
}

export default App;
