import './App.css';
import Navbar from './components/navbar';
import MiniFooter from './components/mini-footer';
import Footer from './components/footer';
import HerosSection from './components/heros-section';
import ReportSection from './components/report-section';
import ClientSection from './components/clients-section';

function App() {
  return (
    <>
      <div id="home">
        <Navbar />
        <HerosSection />
        {/* reports section */}
        <ReportSection />
        {/* clients section */}
        <ClientSection />
        <MiniFooter />
        <Footer />
      </div>
    </>
  );
}

export default App;
