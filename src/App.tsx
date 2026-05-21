
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Features } from './sections/Features';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black w-full overflow-x-hidden selection:bg-primary selection:text-black text-[#E1E0CC]">
      <Hero />
      <About />
      <Skills />
      <Features />
      <Contact />
    </div>
  );
}

export default App;
