import Hero from './components/Hero';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}