import Header from "../../components/Header";
import About from "../../components/About";
import Plans from "../../components/Plans";
import Forms from "../../components/Forms";
import Footer from "../../components/Footer";

export default function LandingPageSun4() {
  return (
    <div className="min-h-screen flex flex-col font-sans">

    <Header />
    <About/>
    <Plans/>
    <Forms/>
    <Footer/>      
    </div>
  );
}
