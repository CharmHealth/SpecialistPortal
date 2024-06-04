import AboutCurve from "./Assets/AboutCurve.svg";
import TestimonialContainer from "./Components/NewTestimonialContainer";
import About from "./Components/NewAbout";
import FooterPlain from '../Elements/Footerplain';

const AboutUs = () => {
    return (
        <div className="h-screen mb-32 w-full">
          <About />
          <img className="-mt-32 w-screen" src={AboutCurve} alt="Slightly cheating" />
          <TestimonialContainer />
        <footer className="background-radial-gradient">
            <FooterPlain/>
        </footer>
        </div>
      );
    }
  
export default AboutUs;

