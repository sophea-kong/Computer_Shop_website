import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import LearnCardLeft from "../components/LearnCardLeft";
import LearnCardRight from "../components/LearnCardRight";
import { Hammer, Cpu, Layout, Zap, Monitor, CheckCircle, Settings, HardDrive, Wrench } from 'lucide-react';

function Learn() {

    return (
        <div className="bg-slate-50 min-h-screen">
            <NavBar />
            
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b bg-[#ff8811]/50">
                <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#ff8811] px-4 py-2 shadow-md">
                            <span className="text-sm font-semibold text-white uppercase tracking-wider">Complete Building Guide</span>
                        </div>
                        <h1 className="mb-6 font-extrabold tracking-tight text-slate-900">
                            Master Your First PC Build
                        </h1>
                        <p className="mb-10 text-xl text-slate-600 leading-relaxed">
                            Building your own computer is a rewarding experience. Our expert guide walks you through 
                            every screw, cable, and component to ensure a successful first boot.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <div className="text-white">
                                <Link to="/build" className="bg-[#296eb4] hover:bg-[#296eb4]/90 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl">
                                    Start Custom Build
                                </Link>
                            </div>
                            <button className="bg-white border-2 border-slate-200 hover:border-[#ff8811] text-slate-700 font-bold py-3 px-8 rounded-xl transition-all">
                                Watch Tutorial Video
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                {/* Step 1: Preparation */}
                <LearnCardLeft 
                    stepNumber="01"
                    Icon={Wrench}
                    iconColor="text-[#296eb4]"
                    iconBg="bg-[#296eb4]/10"
                    title="Preparation & Tools"
                    description="Before opening any boxes, clear a large, non-carpeted workspace. Static electricity is the enemy of electronics, so work on a hard surface."
                    imageSrc="https://intelcorp.scene7.com/is/image/intelcorp/s9-u05-01-overhead-pc-build-tools-original-rwd:1920-1080?wid=1920&hei=1080"
                    imageAlt="PC Building Tools"
                >
                    <div className="space-y-4">
                        <div className="bg-orange-50 border-l-4 border-[#ff8811] p-5 rounded-r-xl">
                            <p className="text-[#ff8811] font-bold text-sm mb-1 uppercase tracking-wide">Essential Toolkit:</p>
                            <p className="text-slate-700">Phillips #2 (Magnetic), Phillips #0 (for M.2 SSDs), and an 8GB+ USB drive for Windows/OS installation.</p>
                        </div>
                        <div className="bg-blue-50 border-l-4 border-[#296eb4] p-5 rounded-r-xl">
                            <p className="text-[#296eb4] font-bold text-sm mb-1 uppercase tracking-wide">Pro Tip:</p>
                            <p className="text-slate-700">Organize your screws in an egg carton or magnetic tray. Each component usually comes with its own specific hardware.</p>
                        </div>
                    </div>
                </LearnCardLeft>

                {/* Step 2: Components */}
                <LearnCardRight 
                    stepNumber="02"
                    Icon={Cpu}
                    iconColor="text-[#ff8811]"
                    iconBg="bg-[#ff8811]/10"
                    title="The Core Components"
                    description="Understanding how your parts interact is crucial. Every build revolves around the Motherboard - the central hub where everything connects."
                    imageSrc="https://intelcorp.scene7.com/is/image/intelcorp/s9-u05-03-overhead-pc-components-original-rwd:1920-1080?wid=1920&hei=1080"
                    imageAlt="PC Components"
                >
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl border border-slate-100 bg-slate-50">
                            <p className="font-bold text-[#296eb4]">CPU</p>
                            <p className="text-xs text-slate-500">The Brain (Intel/AMD)</p>
                        </div>
                        <div className="p-4 rounded-2xl border border-slate-100 bg-slate-50">
                            <p className="font-bold text-[#296eb4]">GPU</p>
                            <p className="text-xs text-slate-500">The Visual Powerhouse</p>
                        </div>
                        <div className="p-4 rounded-2xl border border-slate-100 bg-slate-50">
                            <p className="font-bold text-[#296eb4]">RAM</p>
                            <p className="text-xs text-slate-500">Short-term Memory</p>
                        </div>
                        <div className="p-4 rounded-2xl border border-slate-100 bg-slate-50">
                            <p className="font-bold text-[#296eb4]">SSD</p>
                            <p className="text-xs text-slate-500">Fast Long-term Storage</p>
                        </div>
                    </div>
                </LearnCardRight>

                {/* Step 3: Motherboard Assembly */}
                <LearnCardLeft 
                    stepNumber="03"
                    Icon={Layout}
                    iconColor="text-purple-600"
                    iconBg="bg-purple-100"
                    title="Internal Assembly"
                    description="It's easier to install the CPU, RAM, and M.2 SSD while the motherboard is still outside the case. Use the motherboard box as a non-static test bench."
                    imageSrc="https://intelcorp.scene7.com/is/image/intelcorp/s9-u05-12-install-cpu-original-rwd:1920-1080?wid=1920&hei=1080"
                    imageAlt="Installing CPU"
                >
                    <ul className="space-y-4 text-slate-600">
                        <li className="flex items-start gap-3">
                            <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                            <span>Carefully place the CPU into the socket, matching the triangle indicators.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                            <span>Press RAM sticks firmly into slots until you hear a satisfying click.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                            <span>Slide the M.2 SSD into its slot at an angle and secure with the tiny screw.</span>
                        </li>
                    </ul>
                </LearnCardLeft>

                {/* Step 4: PSU & Storage */}
                <LearnCardRight 
                    stepNumber="04"
                    Icon={Zap}
                    iconColor="text-yellow-600"
                    iconBg="bg-yellow-100"
                    title="Powering Up"
                    description="Install the Power Supply Unit (PSU) into the bottom of your case. If your PSU is modular, only plug in the cables you actually need."
                    imageSrc="https://intelcorp.scene7.com/is/image/intelcorp/s9-u05-24-power-supply-install-original-rwd:1920-1080?wid=1920&hei=1080"
                    imageAlt="Power Supply Installation"
                >
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                        <div className="flex gap-4 mb-4">
                            <HardDrive className="text-[#296eb4]" />
                            <p className="font-bold text-slate-800">Cables Needed:</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm text-slate-500">
                            <p>• 24-Pin Motherboard</p>
                            <p>• 8-Pin CPU (EPS)</p>
                            <p>• 6+2 Pin GPU (PCIe)</p>
                            <p>• SATA Power (if needed)</p>
                        </div>
                    </div>
                </LearnCardRight>

                {/* Step 5: The Final Stretch */}
                <LearnCardLeft 
                    stepNumber="05"
                    Icon={Monitor}
                    iconColor="text-emerald-600"
                    iconBg="bg-emerald-100"
                    title="The First Boot"
                    description="After mounting the GPU and connecting all power cables, it's time for the moment of truth. Connect your monitor to the GPU (not the motherboard) and power on."
                    imageSrc="https://intelcorp.scene7.com/is/image/intelcorp/s9-u05-40-screenshot-of-operating-system-original-rwd:1920-1080?wid=1920&hei=1080"
                    imageAlt="Finished PC Build"
                >
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 rounded-xl border border-emerald-50 bg-emerald-50/30">
                            <Settings className="text-emerald-600" />
                            <p className="text-slate-700 font-medium">Enter BIOS to enable XMP/DOCP for your RAM speed.</p>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-xl border border-blue-50 bg-blue-50/30">
                            <HardDrive className="text-[#296eb4]" />
                            <p className="text-slate-700 font-medium">Install Windows/OS from your prepared USB drive.</p>
                        </div>
                    </div>
                </LearnCardLeft>
            </div>

            {/* CTA Section */}
            <section className="bg-[#296eb4] py-16">
                <div className="container mx-auto px-4 text-center text-white">
                    <h2 className="text-4xl font-bold mb-6">Ready to Start Your Build?</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Head over to our PC Builder tool to select compatible parts and bring your dream machine to life.
                    </p>
                    <Link to="/build" className="inline-block bg-[#ff8811] hover:bg-[#ff8811]/90 text-white font-extrabold py-4 px-12 rounded-2xl transition-all shadow-xl hover:scale-105">
                        GO TO BUILDER
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Learn;