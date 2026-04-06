
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-white from-50% to-[#296eb4] py-24 px-6 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
        <span className="text-blue-600">Build</span>{" "}
        <span className="text-gray-800">Your Dream PC.</span>{" "}
        <span className="text-orange-400">Order</span>
        <br />
        <span className="text-orange-400">Today.</span>
      </h1>
      <p className="text-gray-500 text-lg mt-4 mb-10">
        Choose parts, check compatibility, and place your order with our shop.
      </p>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => navigate("/build")}
          className="flex items-center gap-2 bg-[#296eb4] hover:bg-[#1d5ca3] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Start a Build
        </button>
        <button
          onClick={() => navigate("/build")}
          className="border border-orange-400 text-orange-500 hover:bg-orange-50 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
        >
          Browse Deals
        </button>
      </div>
    </section>
  );
}

function EverythingYouNeed() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Everything You Need</h2>
      <p className="text-center text-gray-500 mb-12 text-sm">
        Start building, explore deals, or get help from our experts
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {/* Start a Build — large card */}
        <div
          onClick={() => navigate("/build")}
          className="cursor-pointer col-span-2 md:col-span-1 row-span-2 bg-[#296eb4] hover:bg-[#1d5ca3] transition-colors rounded-2xl p-6 flex flex-col justify-end min-h-[260px]"
        >
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
            </svg>
          </div>
          <h3 className="text-white font-semibold text-lg">Start a Build</h3>
          <p className="text-blue-200 text-sm mt-1">Select compatible parts and create your custom PC</p>
        </div>

        {/* Prebuilt Deals */}
        <div
          onClick={() => navigate("/build")}
          className="cursor-pointer bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow"
        >
          <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 text-sm">Prebuilt Deals</h3>
          <p className="text-gray-500 text-xs mt-1">Ready-to-go configurations at special prices</p>
        </div>

        {/* Shop by Category */}
        <div
          onClick={() => navigate("/build")}
          className="cursor-pointer bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow"
        >
          <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 text-sm mb-2">Shop by Category</h3>
          <div className="grid grid-cols-2 gap-1 text-xs text-gray-600">
            {["CPU", "GPU", "RAM", "Storage"].map((cat) => (
              <span key={cat} className="bg-gray-100 rounded px-2 py-1 text-center">{cat}</span>
            ))}
          </div>
        </div>

        {/* Student Discounts */}
        <div
          onClick={() => navigate("/contact")}
          className="cursor-pointer bg-[#f97316] hover:bg-[#ea580c] transition-colors rounded-2xl p-5"
        >
          <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center mb-3">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <h3 className="text-white font-semibold text-sm">Student Discounts</h3>
          <p className="text-orange-200 text-xs mt-1">Special pricing for students and educators</p>
        </div>

        {/* How it Works */}
        <div
          onClick={() => navigate("/contact")}
          className="cursor-pointer bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow"
        >
          <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 text-sm">How it Works</h3>
          <p className="text-gray-500 text-xs mt-1">Learn how to build your perfect PC with our guides</p>
        </div>

      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: (
        <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
        </svg>
      ),
      title: "Compatibility Check",
      desc: "Real-time validation ensures all your parts work together perfectly",
      path: "/build",
    },
    {
      icon: (
        <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast Pickup & Delivery",
      desc: "Same-day pickup or 2-3 day delivery straight to your door",
      path: "/contact",
    },
    {
      icon: (
        <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Expert Support",
      desc: "Our team is here to help you choose the right components",
      path: "/contact",
    },
  ];

  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {features.map((f) => (
          <div
            key={f.title}
            onClick={() => navigate(f.path)}
            className="cursor-pointer flex flex-col items-center hover:scale-105 transition-transform"
          >
            <div className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-4 shadow-sm">
              {f.icon}
            </div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">{f.title}</h3>
            <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <EverythingYouNeed />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;