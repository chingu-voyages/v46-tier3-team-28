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
        src="https://drive.google.com/uc?id=1ELKF9ujWbkq8kZOP9BBUGS-qvPbIBpf1"
        alt="Landing page bakground image"
      />
      <div className="h-screen w-screen absolute inset-0 bg-gradient-to-r from-[#2d2d2d] to-[#0000001A]" />
      <div className="z-[1] h-fit max-w-5xl flex flex-col gap-5 px-[5%]">
        <h1 className="text-center font-extrabold text-3xl md:text-5xl text-white tracking-wider leading-tight">
          Discover the easiest way to save and organize your <span className="text-[#633CFF]">favorite</span> URLs with
          our intuitive bookmarking app
        </h1>
        <p className="text-center font-semibold text-xs md:text-lg text-white mb-10">
          Capture, Categorize, and Share with Ease
        </p>
        <Link
          className="h-fit w-fit py-5 px-10 text-white font-bold text-md bg-[#633CFF] rounded-md self-center hover:bg-slate-50 hover:text-[#633CFF] transition-all duration-500"
          href="/register"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default LandingPage;
