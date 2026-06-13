import { useRef } from "react";
import About from "./Components/about/About.jsx";
import Achivement from "./Components/achivement/Achivement.jsx";
import BestMT5 from "./Components/bestMT5/BestMT5.jsx";
import Contact from "./Components/contact/Contact.jsx";
import Experience from "./Components/experience/Experience.jsx";
import HeroBanner from "./Components/heroBanner/HeroBanner.jsx";
import Pricing from "./Components/pricing/Pricing.jsx";
import ScrollUp from "./Components/ScrollUp.jsx";
import Services from "./Components/services/Services.jsx";
import Testimonials from "./Components/testimonials/Testimonials.jsx";
import WhyChooseUs from "./Components/whyChooseUs/WhyChooseUs.jsx";
import Whymt5 from "./Components/whymt5/Whymt5.jsx";
import Footer from "./layout/Footer.jsx";
import Header from "./layout/Header.jsx";

function LandingPage() {
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <>
            <Header aboutRef={aboutRef} servicesRef={servicesRef} contactRef={contactRef} />
            <HeroBanner />
            <div ref={servicesRef}><Services /></div>
            <div ref={aboutRef}><About /></div>
            <WhyChooseUs />
            <Experience />
            <Whymt5 />
            <Achivement />
            <BestMT5 />
            <Pricing />
            <Testimonials />
            <div ref={contactRef}><Contact /></div>
            <ScrollUp />
            <Footer aboutRef={aboutRef} servicesRef={servicesRef} contactRef={contactRef} />
        </>
    );
}

export default LandingPage;