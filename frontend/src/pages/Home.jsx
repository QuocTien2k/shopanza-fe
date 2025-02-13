import Hero from '../components/Hero';
import Features from '../components/Features';
import NewArrivals from '../components/NewArrivals';
import PopularProducts from '../components/PopularProducts';
import Banner from '../components/Banner';
import About from '../components/About';
import Newsletter from '../components/Newsletter';
import Blog from './Blog';
import Footer from '../components/Footer';
const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <NewArrivals />
            <PopularProducts />
            <Banner />
            <About />
            <Blog />
            <Newsletter />
            <Footer />
        </>
    )
}
export default Home