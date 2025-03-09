import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Tour from './components/Tour';

function App() {
    return (
        <>
            <Navbar />
            <Banner />
            <About />
            <Services />
            <Tour />
            <Footer />
        </>
    );
}

export default App;
