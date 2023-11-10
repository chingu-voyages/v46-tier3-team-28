import Feed from '@/components/Feed/Feed';
import Image from 'next/image';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <section className="relative h-screen w-screen flex flex-col justify-center items-center">
      <Image
        className="h-screen w-full absolute inset-0 object-cover object-center"
        width={3000}
        height={2000}
        src="/assets/images/landing-page-bg.jpg"
        alt="Landing page bakground image"
      />
      <div className="h-screen w-screen absolute inset-0 bg-gradient-to-b from-[#0e0e0e] to-[#0000001A]" />
      <div className="z-[1] h-fit max-w-5xl flex flex-col gap-5 px-[5%]">
        <h1 className="text-center font-extrabold text-3xl md:text-5xl text-gray-300 tracking-wider leading-tight drop-shadow-lg">
          Discover the easiest way to save and organize your{' '}
          <span className="text-[#633CFF] drop-shadow-lg">favorite</span> URLs with our intuitive bookmarking app
        </h1>
        <p className="text-center font-semibold text-xs md:text-lg text-gray-200 mb-10 drop-shadow-lg">
          Capture, Categorize, and Share with Ease
        </p>
        <Link
          className="h-fit w-fit py-4 px-8 text-white font-bold text-md bg-[#633CFF] rounded-md self-center shadow-lg hover:bg-slate-50 hover:text-[#633CFF] transition-all duration-500"
          href="/register"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default LandingPage;
