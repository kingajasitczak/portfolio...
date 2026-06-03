import Image from "next/image";

export default function Home() {
    return (
        <main className="bg-[#101010] text-white overflow-x-hidden scroll-smooth relative">

            {/* ==================== TŁO (WIDOCZNE CAŁY CZAS) ==================== */}
            <div className="fixed top-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none z-0 animate-drift" />
            <div className="fixed bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none z-0 animate-drift [animation-delay:-10s]" />

            {/* ==================== NAVBAR (PRZYKLEJONY DO GÓRY) ==================== */}
            <div className="fixed top-0 left-0 w-full flex justify-between items-center px-8 md:px-28 py-6 z-[100] bg-[#101010]/30 backdrop-blur-md border-b border-white/5">
                <nav className="flex items-center space-x-6 md:space-x-8 bg-white/5 backdrop-blur-lg border border-white/10 px-8 py-3 rounded-full shadow-lg shadow-black/20">
                    <a href="#home" className="text-sm font-light text-gray-300 hover:text-white hover:scale-105 transition-all">Home</a>
                    <a href="#about" className="text-sm font-light text-gray-300 hover:text-white hover:scale-105 transition-all">About</a>
                    <a href="#skills" className="text-sm font-light text-gray-300 hover:text-white hover:scale-105 transition-all">Skills</a>
                    <a href="#projects" className="text-sm font-light text-gray-300 hover:text-white hover:scale-105 transition-all">Projects</a>
                    <a href="#contact" className="text-sm font-light text-gray-300 hover:text-white hover:scale-105 transition-all">Contact</a>
                </nav>
                <p className="text-xl md:text-2xl font-light text-gray-300 tracking-wide hidden sm:block">
                    Hi, I&#39;m Kinga.
                </p>
            </div>

            {/* ==================== STICKY SOCIALS (PRZYKLEJONE DO PRAWEJ) ==================== */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-[100]">
                {/* Klasa 'invert' sprawia, że czarne logo staje się białe na ciemnym tle */}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full opacity-50 hover:opacity-100 hover:scale-110 transition-all shadow-lg">
                    <Image src="/img/linkedin.png" alt="LinkedIn" width={20} height={20} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full opacity-50 hover:opacity-100 hover:scale-110 transition-all shadow-lg">
                    <Image src="/img/github.png" alt="GitHub" width={20} height={20} />
                </a>
            </div>

            {/* ==================== 1. EKRAN HERO ==================== */}
            <section id="home" className="relative h-screen w-full flex items-center justify-center pt-20 z-10">
                <div className="w-full max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-8 md:px-28 z-10">
                    <div className="lg:col-span-5 flex flex-col justify-center items-start space-y-6 order-2 lg:order-1">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                            Navigating <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
                                the tech world.
                            </span>
                        </h1>
                        <p className="text-base md:text-lg text-gray-400 max-w-lg font-light leading-relaxed">
                            A 3rd-year IT student and versatile developer. Currently coding, building interfaces, and enjoying my Erasmus+ exchange in Italy!
                        </p>

                        {/* PRZYCISKI - W tym nowy przycisk CV z animacją */}
                        <div className="pt-4 flex flex-wrap gap-4">
                            <a href="#projects" className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-800/30 backdrop-blur-lg px-8 py-3 text-sm tracking-wider font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
                                <span className="relative z-10">VIEW PROJECTS</span>
                                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                                    <div className="relative h-full w-10 bg-white/20"></div>
                                </div>
                            </a>

                            <a href="/Kinga_Jasitczak_CV.pdf" download className="group/cv relative inline-flex items-center justify-center overflow-hidden rounded-full bg-indigo-500/20 backdrop-blur-lg px-8 py-3 text-sm tracking-wider font-medium text-indigo-300 hover:text-white transition-all duration-300 ease-in-out hover:bg-indigo-500/40 hover:scale-105 border border-indigo-500/30">
                                <span className="relative z-10">DOWNLOAD CV</span>
                                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/cv:duration-1000 group-hover/cv:[transform:skew(-13deg)_translateX(100%)]">
                                    <div className="relative h-full w-10 bg-white/20"></div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-7 flex justify-center items-center order-1 lg:order-2 h-full">
                        <div className="animate-float w-full max-w-[450px] sm:max-w-[600px] lg:max-w-[900px] xl:max-w-[1000px] max-h-[50vh] lg:max-h-[70vh] flex justify-center items-center drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
                            <Image src="/img/comp.png" alt="Kinga's workspace" width={1200} height={1200} className="w-full h-full object-contain" priority />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 w-full flex justify-center items-center z-20">
                    <div className="animate-bounce cursor-pointer">
                        <a href="#about">
                            <Image src="/img/down.png" alt="Scroll down" width={32} height={32} className="opacity-50 hover:opacity-100 transition-opacity mix-blend-screen" />
                        </a>
                    </div>
                </div>
            </section>

            {/* ==================== 2. SEKCJA ABOUT & STATS ==================== */}
            <section id="about" className="relative min-h-screen w-full flex items-center px-8 md:px-28 py-24 z-10">
                <div className="absolute top-[30%] left-[20%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[150px] pointer-events-none z-0 animate-drift" />

                <div className="w-full max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
                    <div className="lg:col-span-5 flex flex-col gap-8 justify-center lg:justify-start items-center">
                        <div className="relative w-full max-w-[350px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                            <Image src="/img/me.jpg" alt="Kinga Jasitczak" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-lg">
                                <p className="text-sm text-gray-300 font-light flex items-center gap-2">
                                    <span className="relative flex h-3 w-3">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </span>
                                    Currently in Dalmine, Italy 🇮🇹
                                </p>
                            </div>
                        </div>

                        <div className="hover:-translate-y-2 group bg-[#1a1a1a] border border-white/10 duration-500 w-full max-w-[350px] h-32 flex text-white flex-row justify-center items-center relative rounded-2xl overflow-hidden shadow-2xl">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute blur-xl z-10 fill-indigo-500/30 duration-500 group-hover:blur-md group-hover:scale-105">
                                <path transform="translate(100 100)" d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"></path>
                            </svg>
                            <div className="z-20 flex flex-col justify-center items-center text-center">
                                <span className="font-bold text-3xl ml-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">PP-RAI 2026</span>
                                <p className="font-light text-gray-300 text-sm mt-1">Conference Publication & Poster</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 flex flex-col space-y-8">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">code.</span>
                        </h2>
                        <div className="space-y-5 text-gray-400 font-light text-lg leading-relaxed">
                            <p>I&#39;m Kinga Jasitczak, a 3rd-year IT student at Lodz University of Technology, currently broadening my horizons on an Erasmus+ exchange at Università degli Studi di Bergamo.</p>
                            <p>I love transforming complex problems into elegant interfaces and robust systems. My hands-on experience ranges from building the commercial <strong className="text-gray-200">Morska Mila</strong> website and the <strong className="text-gray-200">EMSIB</strong> platform, to developing native Android applications.</p>
                            <p>I&#39;m also deeply passionate about academic research, focusing on computer vision and facial recognition algorithms.</p>
                            <p>And when I&#39;m not debugging? I&#39;m probably drawing on my crisis-management skills—honed during my fast-paced stint as a machine operator at the Hopa Lupa amusement park!</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== 3. SEKCJA SKILLS ==================== */}
            <section id="skills" className="relative min-h-[80vh] w-full flex flex-col items-center justify-center px-8 md:px-28 py-20 z-10 overflow-hidden">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-20 text-center">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Stack.</span>
                </h2>
                <div className="relative h-[400px] w-full flex items-center justify-center scale-75 md:scale-100">
                    <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-600/50 animate-[spin_60s_linear_infinite]">

                        {/* 1. Python (Góra - 0°) */}
                        <div className="group profile_item absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] hover:scale-110 hover:z-50 transition-all duration-500 animate-[spin_60s_linear_infinite_reverse]">
                            <span className="flex items-center justify-center w-[50px] h-[50px] rounded-full z-[2] bg-[#101010] p-2 relative">
                                <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#3776AB" d="M63.9 0C30.5 0 24 14.4 24 31.1v17.4h40.3v6H22.7C8.1 54.5 0 66.8 0 85.5c0 19.5 9.4 30.6 30.2 30.6h11.2v-16.9c0-12.5 10.4-22.9 22.9-22.9h23.5c8.6 0 15.6-7 15.6-15.6V23.7C103.4 9.1 91.5 0 63.9 0zm-15.1 19c3.2 0 5.8 2.6 5.8 5.8 0 3.2-2.6 5.8-5.8 5.8-3.2 0-5.8-2.6-5.8-5.8 0-3.2 2.6-5.8 5.8-5.8z"/><path fill="#FFD43B" d="M64.1 128c33.4 0 39.9-14.4 39.9-31.1V79.5H63.7v-6h41.6c14.6 0 22.7-12.3 22.7-31 0-19.5-9.4-30.6-30.2-30.6H86.6v16.9c0 12.5-10.4 22.9-22.9 22.9H40.2c-8.6 0-15.6 7-15.6 15.6v37c0 14.6 11.9 23.7 39.5 23.7zm15.1-19c-3.2 0-5.8-2.6-5.8-5.8 0-3.2 2.6-5.8 5.8-5.8 3.2 0 5.8 2.6 5.8 5.8 0 3.2-2.6 5.8-5.8 5.8z"/></svg>
                            </span>
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-[100] bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 text-gray-200 text-xs font-light tracking-wide px-3 py-1.5 rounded-full shadow-2xl">
                                Python
                            </div>
                        </div>

                        {/* 2. React (Prawy górny skos - 60°) */}
                        <div className="group profile_item absolute top-[25%] left-[93.3%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] hover:scale-110 hover:z-50 transition-all duration-500 animate-[spin_60s_linear_infinite_reverse]">
                            <span className="flex items-center justify-center w-[50px] h-[50px] rounded-full z-[2] bg-[#101010] p-2 relative">
                                <svg viewBox="0 0 128 128"><path fill="#61DAFB" d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9z"></path></svg>
                            </span>
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-[100] bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 text-gray-200 text-xs font-light tracking-wide px-3 py-1.5 rounded-full shadow-2xl">
                                React
                            </div>
                        </div>

                        {/* 3. Tailwind CSS (Prawy dolny skos - 120°) */}
                        <div className="group profile_item absolute top-[75%] left-[93.3%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] hover:scale-110 hover:z-50 transition-all duration-500 animate-[spin_60s_linear_infinite_reverse]">
                            <span className="flex items-center justify-center w-[50px] h-[50px] rounded-full z-[2] bg-[#101010] p-2 relative">
                                <svg viewBox="0 0 128 128" fill="none"><path d="M64 26.5C46.8 26.5 35.5 34.6 31 46.8c5.4-6.8 12.2-9 18-7.7 6.4 1.5 10.9 6.2 15.9 11.4 7.6 7.8 16.5 17 32.1 17 17.2 0 28.5-8.1 33-20.3-5.4 6.8-12.2 9-18 7.7-6.4-1.5-10.9-6.2-15.9-11.4-7.6-7.8-16.5-17-32.1-17zm-33 38.6C13.8 65.1 2.5 73.2-2 85.4c5.4-6.8 12.2-9 18-7.7 6.4 1.5 10.9 6.2 15.9 11.4 7.6 7.8 16.5 17 32.1 17 17.2 0 28.5-8.1 33-20.3-5.4 6.8-12.2 9-18 7.7-6.4-1.5-10.9-6.2-15.9-11.4-7.6-7.8-16.5-17-32.1-17z" fill="#06B6D4"/></svg>
                            </span>
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-[100] bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 text-gray-200 text-xs font-light tracking-wide px-3 py-1.5 rounded-full shadow-2xl whitespace-nowrap">
                                Tailwind CSS
                            </div>
                        </div>

                        {/* 4. JavaScript (Dół - 180°) */}
                        <div className="group profile_item absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] hover:scale-110 hover:z-50 transition-all duration-500 animate-[spin_60s_linear_infinite_reverse]">
                            <span className="flex items-center justify-center w-[50px] h-[50px] rounded-full z-[2] bg-[#101010] p-2 relative">
                                <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="20" fill="#F7DF1E"/><path fill="#000" d="M38.8 100.8c-4.4-3.1-7.8-8-9.4-13.8l10.9-4.8c1.1 4.2 2.9 7 5.7 8.6 2.6 1.6 5.9 2.4 9.8 2.4 4.1 0 7.3-.8 9.5-2.5 2.1-1.6 3.2-3.8 3.2-6.6 0-2.2-.8-4-2.5-5.3-1.6-1.4-4.8-2.8-9.3-4.2-6.5-2-11.4-4-14.8-6.1-3.3-2-5.9-4.5-7.5-7.5-1.7-3-2.5-6.6-2.5-10.7 0-4.8 1.4-8.9 4-12.2 2.7-3.3 6.2-5.7 10.6-7.2 4.4-1.5 9.4-2.2 15.1-2.2 8.3 0 15 2.1 20 6.2 5 4.1 8.2 9.9 9.6 17.5l-11.2 3.8c-.8-4.4-2.6-7.7-5.5-9.8-2.9-2.1-6.8-3.1-11.7-3.1-4.1 0-7.3.7-9.3 2.1-2.1 1.4-3.1 3.2-3.1 5.5 0 2 .8 3.7 2.4 4.8 1.5 1.1 4.7 2.4 9.4 3.9 6.5 2 11.4 4.1 14.8 6.1 3.4 2 6 4.6 7.7 7.6 1.7 3.1 2.5 6.9 2.5 11.3 0 4.9-1.5 9.2-4.4 12.7-2.9 3.5-6.8 6-11.8 7.7-5 1.7-10.8 2.5-17.5 2.5-9.7 0-17.5-2.3-22.7-6.9zM19.7 65.5V26.8h12.5v72.4c0 6.6-1.5 11.6-4.5 14.8-3 3.3-7.5 4.9-13.6 4.9-3.8 0-7.3-.6-10.4-1.7v-10.5c2.3.8 4.6 1.1 6.8 1.1 3.3 0 5.6-.9 6.9-2.7 1.3-1.8 1.9-4.5 1.9-8.1V65.5h.4z"/></svg>
                            </span>
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-[100] bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 text-gray-200 text-xs font-light tracking-wide px-3 py-1.5 rounded-full shadow-2xl">
                                JavaScript
                            </div>
                        </div>

                        {/* 5. TypeScript (Lewy dolny skos - 240°) */}
                        <div className="group profile_item absolute top-[75%] left-[6.7%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] hover:scale-110 hover:z-50 transition-all duration-500 animate-[spin_60s_linear_infinite_reverse]">
                            <span className="flex items-center justify-center w-[50px] h-[50px] rounded-full z-[2] bg-[#101010] p-2 relative">
                                <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="20" fill="#3178C6"/><path fill="#FFF" d="M68.8 89.6c0-11-8.5-14.7-18-17.2-7-1.8-10.2-3.5-10.2-7.2 0-3.5 3.3-6.2 8.7-6.2 5.3 0 8.7 2.5 10.3 7l8.4-5.2c-2.7-6.5-8.5-10.5-18.7-10.5-10.5 0-18.3 6.2-18.3 15.3 0 10.3 8 14.5 17.5 16.8 7.5 1.8 10.8 3.8 10.8 7.8 0 4.2-4 6.7-9.5 6.7-6.5 0-10.8-3-12.7-8.5l-8.7 4.8c3 8.3 10.5 12.5 21.3 12.5 11.5.1 19.1-6.4 19.1-16.1zM120.3 43.1H94.5v59.8H84.3V43.1H58.6v-8.7h61.8v8.7z"/></svg>
                            </span>
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-[100] bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 text-gray-200 text-xs font-light tracking-wide px-3 py-1.5 rounded-full shadow-2xl">
                                TypeScript
                            </div>
                        </div>

                        {/* 6. Figma (Lewy górny skos - 300°) */}
                        <div className="group profile_item absolute top-[25%] left-[6.7%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] hover:scale-110 hover:z-50 transition-all duration-500 animate-[spin_60s_linear_infinite_reverse]">
                            <span className="flex items-center justify-center w-[50px] h-[50px] rounded-full z-[2] bg-[#101010] p-2 relative">
                                <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129z" fill="#0acf83"></path><path d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5z" fill="#a259ff"></path><path d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5z" fill="#f24e1e"></path><path d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67z" fill="#ff7262"></path><path d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5z" fill="#1abcfe"></path></svg>
                            </span>
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-[100] bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 text-gray-200 text-xs font-light tracking-wide px-3 py-1.5 rounded-full shadow-2xl">
                                Figma
                            </div>
                        </div>

                        {/* Centralne zdjęcie */}
                        <div className="w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 transition-all duration-500 z-0 animate-[spin_60s_linear_infinite_reverse]">
                            <div className="w-full h-full relative rounded-full overflow-hidden">
                                <Image src="/img/me.jpg" alt="Kinga" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== 4. SEKCJA PROJECTS ==================== */}
            <section id="projects" className="relative min-h-screen w-full flex flex-col items-center px-8 md:px-28 py-24 z-10">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-20 text-center">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Projects.</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-16 w-full max-w-[100rem]">

                    {/* PROJEKT 1: Pet Care App */}
                    <div className="relative h-[480px] w-[350px] overflow-hidden rounded-3xl bg-[#1a1a1a] drop-shadow-xl group border border-white/10">
                        <div className="absolute inset-0.5 z-[1] flex flex-col items-center justify-start gap-4 rounded-[1.3rem] bg-[#101010] p-6 text-white opacity-90">
                            <div className="h-48 w-full overflow-hidden rounded-xl bg-zinc-800 flex justify-center items-center relative before:absolute before:top-1/2 before:-left-48 before:-translate-x-12 before:-translate-y-12 before:w-full before:h-24 before:bg-white/5 before:z-10 group-hover:before:left-12 before:transition-all before:duration-700 before:border-y before:border-white/10">
                                <div className="flex z-20 gap-2.5 translate-x-48 group-hover:-translate-x-2 duration-1000 transition-all flex-col">
                                    <button className="flex z-10 w-40 items-center justify-center gap-4 rounded-md border border-white/20 bg-black/50 backdrop-blur-md p-2 text-white hover:bg-white/20 transition-all">
                                        <span className="text-sm font-light">Source Code</span>
                                    </button>
                                </div>
                                <div className="absolute duration-700 group-hover:opacity-0 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 stroke-green-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>
                                </div>
                            </div>
                            <div className="flex flex-col w-full items-start mt-4">
                                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">Pet Care App</p>
                                <p className="text-gray-400 font-light text-sm mt-3">
                                    Android app for comprehensive pet management. UI logic and permissions are fully implemented. Currently integrating a background worker for autonomous notifications and deep linking.
                                </p>
                            </div>
                        </div>
                        <div className="absolute transition-all duration-500 top-1/2 -left-1/2 group-hover:top-12 group-hover:-left-1/4 h-48 w-56 -z-10 bg-green-600 blur-[60px]"></div>
                    </div>

                    {/* PROJEKT 2: EMSIB */}
                    <div className="relative h-[480px] w-[350px] overflow-hidden rounded-3xl bg-[#1a1a1a] drop-shadow-xl group border border-white/10">
                        <div className="absolute inset-0.5 z-[1] flex flex-col items-center justify-start gap-4 rounded-[1.3rem] bg-[#101010] p-6 text-white opacity-90">
                            <div className="h-48 w-full overflow-hidden rounded-xl bg-zinc-800 flex justify-center items-center relative before:absolute before:top-1/2 before:-left-48 before:-translate-x-12 before:-translate-y-12 before:w-full before:h-24 before:bg-white/5 before:z-10 group-hover:before:left-12 before:transition-all before:duration-700 before:border-y before:border-white/10">
                                <div className="flex z-20 gap-2.5 translate-x-48 group-hover:-translate-x-2 duration-1000 transition-all flex-col">
                                    <button className="flex z-10 w-40 items-center justify-center gap-4 rounded-md border border-white/20 bg-black/50 backdrop-blur-md p-2 text-white hover:bg-white/20 transition-all">
                                        <span className="text-sm font-light">View Details</span>
                                    </button>
                                </div>
                                <div className="absolute duration-700 group-hover:opacity-0 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 stroke-indigo-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                                </div>
                            </div>
                            <div className="flex flex-col w-full items-start mt-4">
                                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">EMSIB Platform</p>
                                <p className="text-gray-400 font-light text-sm mt-3">
                                    A complex full-stack web platform built for efficient data handling and user management. Features a highly interactive dashboard and robust backend logic.
                                </p>
                            </div>
                        </div>
                        <div className="absolute transition-all duration-500 top-1/2 -left-1/2 group-hover:top-12 group-hover:-left-1/4 h-48 w-56 -z-10 bg-indigo-600 blur-[60px]"></div>
                    </div>

                    {/* PROJEKT 3: Morska Mila */}
                    <div className="relative h-[480px] w-[350px] overflow-hidden rounded-3xl bg-[#1a1a1a] drop-shadow-xl group border border-white/10">
                        <div className="absolute inset-0.5 z-[1] flex flex-col items-center justify-start gap-4 rounded-[1.3rem] bg-[#101010] p-6 text-white opacity-90">
                            <div className="h-48 w-full overflow-hidden rounded-xl bg-zinc-800 flex justify-center items-center relative before:absolute before:top-1/2 before:-left-48 before:-translate-x-12 before:-translate-y-12 before:w-full before:h-24 before:bg-white/5 before:z-10 group-hover:before:left-12 before:transition-all before:duration-700 before:border-y before:border-white/10">
                                <div className="flex z-20 gap-2.5 translate-x-48 group-hover:-translate-x-2 duration-1000 transition-all flex-col">
                                    <button className="flex z-10 w-40 items-center justify-center gap-4 rounded-md border border-white/20 bg-black/50 backdrop-blur-md p-2 text-white hover:bg-white/20 transition-all">
                                        <span className="text-sm font-light">Live Demo</span>
                                    </button>
                                </div>
                                <div className="absolute duration-700 group-hover:opacity-0 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 stroke-cyan-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                                </div>
                            </div>
                            <div className="flex flex-col w-full items-start mt-4">
                                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Morska Mila</p>
                                <p className="text-gray-400 font-light text-sm mt-3">
                                    A commercial website developed from scratch. Engineered responsive interfaces and streamlined booking processes to ensure a seamless user experience.
                                </p>
                            </div>
                        </div>
                        <div className="absolute transition-all duration-500 top-1/2 -left-1/2 group-hover:top-12 group-hover:-left-1/4 h-48 w-56 -z-10 bg-cyan-600 blur-[60px]"></div>
                    </div>

                </div>
            </section>

            {/* ==================== 5. SEKCJA CONTACT ==================== */}
            <section id="contact" className="relative min-h-[60vh] w-full flex flex-col items-center justify-center px-8 md:px-28 py-20 z-10">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center">
                    Let&#39;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Talk.</span>
                </h2>

                <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 md:p-16 rounded-[2.5rem] w-full max-w-3xl text-center shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

                    <p className="text-gray-300 text-lg md:text-xl font-light mb-10 leading-relaxed">
                        Currently based in Dalmine and open for new challenges. Whether you have a question, a project proposal, or just want to say hi, I&#39;ll try my best to get back to you!
                    </p>

                    <a href="mailto:your.email@example.com" className="inline-block px-10 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
                        Say Hello
                    </a>
                </div>
            </section>

        </main>
    );
}