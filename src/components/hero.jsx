import heroBackground from "../assets/blue.jpg";

function Hero() {
  return (
    <div className="relative h-[500px]">
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Students learning"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="relative max-w-7xl mx-auto h-full flex flex-col items-center justify-center text-center text-gray-800  px-4">
        <div className="max-w-5xl bg-white/70 p-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Improve your skills on your own To prepare for a better future
          </h1>
          <a href="/login">
          <button className="bg-pink-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-rose-700 transition-colors">
            REGISTER NOW
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
