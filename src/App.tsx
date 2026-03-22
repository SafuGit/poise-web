import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Steps from './components/Steps';
import Grid from './components/Grid';
import Quote from './components/Quote';
import Transparency from './components/Transparency';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Steps />
        <Grid />
        <Quote />
        <Transparency />
      </main>
    </div>
  );
}