
import About from '../../components/Home/About';
import Banner from '../../components/Home/Banner';
import Contact from '../../components/Home/Contact';
import Projects from '../../components/Home/Projects';
import Services from '../../components/Home/Services';
import Testimonials from '../../components/Home/Testimonials';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <About />
            <Services />
            <Projects />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;