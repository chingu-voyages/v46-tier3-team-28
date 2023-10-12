import Feed from "./Feed"

function LandingPage() {
  return (
    <section>
      <div className="home_img">
      <h1 className="text-center text-white">Discover the easiest way to save and organize your favorite URLs with our intuitive bookmarking app
      </h1>
      <p className="text-center text-white">Capture, Categorize, and Share with Ease
      </p>

      <Feed/>
      </div>
    </section>
  )
}

export default LandingPage;