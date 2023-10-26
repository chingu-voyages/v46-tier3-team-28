import Feed from "./Feed";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen"> 
      <section className="flex-grow pb-4">
        <div>
          <h1 className="text-center font-extrabold text-2xl text-white">Discover the easiest way to save and organize your favorite URLs with our intuitive bookmarking app</h1>
          <p className="text-center font-semibold text-lg text-white">Capture, Categorize, and Share with Ease</p>
          <Feed />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage;
