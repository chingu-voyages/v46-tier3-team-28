import Url from "@/components/Url";
import LandingPage from "@/components/LandingPage";

const Home = () => {
  return (
    <header className="homepage">
      <section className="flex-1 pt-36 padding-x">
        <h1 className="homepage_title text-center">
          Effortlessly Save, Categorize, and Share Your Favorite URLs with Our Versatile Bookmarking App!
        </h1>
        <p className="homepage_subtitle">
          Effortless URL Management and Organization at Your Fingertips
        </p>
      
        <Url />
        <LandingPage/>
      </section>
    </header>
  );
}

export default Home; 