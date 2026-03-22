import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Steps from './components/Steps';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Steps />
      </main>
    </div>
  );
}