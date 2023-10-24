import HeroSection from "./components/HeroSection/HeroSection";
import Music from "./components/Music/Music";
import styles from "./App.module.css";
import { bg1, bg2, bg3 } from "./images";
import Biography from "./components/Biography/Biography";
import Press from "./components/Press/Press";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Music />
      <img src={bg1} alt="#" className={styles.image} />
      <Biography />
      <img src={bg2} alt="#" className={styles.image} />
      <Press />
      <img src={bg3} alt="#" className={styles.image} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
