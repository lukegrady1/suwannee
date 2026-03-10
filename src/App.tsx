import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Accommodations from './components/Accommodations';
import EventsSection from './components/EventsSection';
import Experiences from './components/Experiences';
import Weddings from './components/Weddings';
import VisitorInfo from './components/VisitorInfo';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Accommodations />
      <EventsSection />
      <Experiences />
      <Weddings />
      <VisitorInfo />
      <Footer />
    </>
  );
}
