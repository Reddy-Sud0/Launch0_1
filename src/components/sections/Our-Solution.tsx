'use client';

import Image from 'next/image';

export default function SolutionSection() {
  return (
    <section className="relative py-8 sm:py-12 lg:py-16 overflow-hidden bg-black bg-[url('https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/657ff6ae9b0c3dd15743c144_PurpleLine.svg'),radial-gradient(circle_at_50%_0,#000000_1%,#00000014_5%,transparent_14%),url('https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/657d7a6d3e44cc3168e9df1e_stars.svg'),radial-gradient(circle_at_50%_0,#ffd90080_9%,#0c0e00a3_55%)] bg-[position:50%_0,0_0,50%_-11%,0_0] bg-[size:contain,auto,auto,auto] bg-no-repeat">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 pt-[20px] sm:pt-[30px] pb-[30px] sm:pb-[50px] lg:pb-[70px] relative">
        <div>
          <div className="flex flex-col items-center justify-center gap-8 sm:gap-[72px]">
            {/* Header Section */}
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 max-w-2xl">
                <span className="text-white uppercase text-xs sm:text-sm tracking-wide bg-[black] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10">Our Solution</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                  Your own internal tool. Built uniquely for your business.
                </h2>
                <p className="text-white/70 text-sm sm:text-base md:text-lg text-center">
                  Your business is unique—your tools should be too. <br />
                  We create solutions that scale with you.
                </p>
              </div>
            </div>

            {/* Monitor Container */}
            <div className="flex flex-col justify-start items-start mt-4 sm:mt-8 relative w-full z-[2]">
              <div className="relative w-full">
                <Image
                  src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/65846d6254201a5c7a40cfad_Body%20Details%20(1).png"
                  alt="Monitor Body"
                  width={2488}
                  height={1400}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1280px"
                  priority
                />
                <div className="absolute top-[3%] left-[2%] right-[2%] z-[2] aspect-video bg-[#17181a] rounded-md overflow-visible">
                  <Image
                    src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/672e4a0518f06222f6dd9331_monitor_image.png"
                    alt="Monitor Screen"
                    width={2392}
                    height={1346}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1280px"
                  />
                </div>
              </div>

              {/* Layers Wrap */}
              <div className="z-[1] w-full relative -mt-[5%] sm:-mt-[10%] pt-6 sm:pt-10">
                <div className="flex flex-col items-center w-full relative h-[200px] sm:h-[260px] mb-[60px] sm:mb-[120px]">
                  <div className="text-center text-white text-lg sm:text-[22px] font-medium leading-7 sm:leading-8 mb-6 sm:mb-10 relative z-[2]">
                    <div className="relative z-[2]">3 Layers Required</div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[300px] h-12 sm:h-16 bg-[#17181a] rounded-full blur-6xl z-[1]"></div>
                  </div>
                  <div className="hidden sm:block absolute bottom-[-412px] left-10 w-full h-[400px] z-10 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 817 260" className="w-full h-[70%] overflow-visible absolute -top-[400px]">
                      <defs>
                        <linearGradient id="lineGradient" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(255, 217, 0, 1)" />
                          <stop offset="50%" stopColor="rgba(255, 255, 0, 0.8)" />
                          <stop offset="100%" stopColor="rgba(255, 217, 0, 0.4)" />
                        </linearGradient>
                        <style>
                          {`
                            @keyframes lightEffect {
                              0% {
                                stroke-dashoffset: 1000;
                                opacity: 0;
                              }
                              50% {
                                opacity: 1;
                              }
                              100% {
                                stroke-dashoffset: 0;
                                opacity: 0;
                              }
                            }
                            .base-path {
                              stroke: rgba(0, 0, 0, 0.19);
                              stroke-width: 1;
                              stroke-linecap: round;
                              stroke-linejoin: round;
                            }
                            .light-path {
                              stroke: #ffd900;
                              stroke-width: 3;
                              stroke-linecap: round;
                              stroke-linejoin: round;
                              stroke-dasharray: 1000;
                              stroke-dashoffset: 1000;
                              animation: lightEffect 4.5s ease-in-out infinite;
                              filter: drop-shadow(0 0 5px #ffd900) 
                                      drop-shadow(0 0 10px #ffd900)
                                      drop-shadow(0 0 15px #ffd900)
                                      drop-shadow(0 0 20px rgba(255, 217, 0, 0.5));
                            }
                          `}
                        </style>
                      </defs>
                      <g>
                        <path className="base-path" d="M373.5,0 L373.5,89 L357.9,105 C354.7,108.2 350.4,110 345.9,110 L136.1,110 C132.1,110 128.3,111.6 125.5,114.4 L104.9,135 C101.7,138.2 97.4,140 92.9,140 L36.6,140 C32.6,140 28.8,141.6 26,144.4 L6.4,164 C3.6,166.8 2,170.6 2,174.6 L2,285" fill="none" />
                        <path className="base-path" d="M373,0 L373,213" fill="none" />
                        <path className="base-path" d="M373,0 L373,89 L387.5,103.6 C390.3,106.4 394.1,108 398.1,108 L607.9,108 C612.4,108 616.7,109.8 619.9,113 L640.5,133.6 C643.3,136.4 647.1,138 651.1,138 L710.4,138 C714.9,138 719.2,139.8 722.4,143 L742,162.6 C745.2,165.8 747,170.1 747,174.6 L747,285" fill="none" />
                        <path className="light-path" d="M373.5,0 L373.5,89 L357.9,105 C354.7,108.2 350.4,110 345.9,110 L136.1,110 C132.1,110 128.3,111.6 125.5,114.4 L104.9,135 C101.7,138.2 97.4,140 92.9,140 L36.6,140 C32.6,140 28.8,141.6 26,144.4 L6.4,164 C3.6,166.8 2,170.6 2,174.6 L2,285" fill="none" />
                        <path className="light-path" d="M373,0 L373,213" fill="none" />
                        <path className="light-path" d="M373,0 L373,89 L387.5,103.6 C390.3,106.4 394.1,108 398.1,108 L607.9,108 C612.4,108 616.7,109.8 619.9,113 L640.5,133.6 C643.3,136.4 647.1,138 651.1,138 L710.4,138 C714.9,138 719.2,139.8 722.4,143 L742,162.6 C745.2,165.8 747,170.1 747,174.6 L747,285" fill="none" />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Cards Row */}
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-4 lg:gap-10 w-full max-w-[1200px] -mt-[60px] sm:-mt-[245px] mx-auto relative z-[2] px-4 sm:px-6">
                  {/* Interface Card */}
                  <div className="bg-[rgba(23,24,26,0.7)] dark:bg-[rgba(255,255,255,0.7)] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 dark:border-black/10 backdrop-blur-2xl relative shadow-lg translate-y-0 sm:translate-y-0 lg:translate-y-12 hover:shadow-[0_0_30px_rgba(255,217,0,0.5)] dark:hover:shadow-[0_0_30px_rgba(255,217,0,0.5)] transition-all duration-300 sm:aspect-[16/9] lg:aspect-square hover:border-[#ffd900] dark:hover:border-[#ffd900]">
                    <div className="relative w-full h-full flex flex-col">
                      <div className="relative w-full h-[50%] sm:h-[60%] bg-[#1a1a1a] overflow-hidden">
                        <Image
                          src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/6580e889743df4400db7e45a_screen.png"
                          alt="Interface"
                          width={1066}
                          height={600}
                          className="w-full h-full object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.15)] to-transparent opacity-70"></div>
                      </div>
                      <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-[rgba(23,24,26,0.95)] to-[rgba(23,24,26,0.98)]">
                        <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3">Interface</div>
                        <div className="text-white/70 text-sm sm:text-base leading-relaxed">The front-end your team interacts with daily. A seamless, intuitive experience designed for clarity and ease of use.</div>
                      </div>
                    </div>
                  </div>

                  {/* AI Workflows Card */}
                  <div className="bg-[rgba(23,24,26,0.7)] dark:bg-[rgba(255,255,255,0.7)] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 dark:border-black/10 backdrop-blur-2xl relative shadow-lg translate-y-0 sm:translate-y-0 lg:-translate-y-8 hover:shadow-[0_0_30px_rgba(255,217,0,0.5)] dark:hover:shadow-[0_0_30px_rgba(255,217,0,0.5)] transition-all duration-300 sm:aspect-[16/9] lg:aspect-square hover:border-[#ffd900] dark:hover:border-[#ffd900]">
                    <div className="relative w-full h-full flex flex-col">
                      <div className="relative w-full h-[50%] sm:h-[60%] bg-[#1a1a1a] overflow-hidden">
                        <Image
                          src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/672e51b61fc86077b132633d_automations.png"
                          alt="AI Workflows"
                          width={1066}
                          height={600}
                          className="w-full h-full object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.15)] to-transparent opacity-70"></div>
                      </div>
                      <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-[rgba(23,24,26,0.95)] to-[rgba(23,24,26,0.98)]">
                        <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3">AI Workflows</div>
                        <div className="text-white/70 text-sm sm:text-base leading-relaxed">The engine automating processes behind the scenes. AI-powered workflows that optimize tasks and eliminate inefficiencies.</div>
                      </div>
                    </div>
                  </div>

                  {/* Data Card */}
                  <div className="bg-[rgba(23,24,26,0.7)] dark:bg-[rgba(255,255,255,0.7)] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 dark:border-black/10 backdrop-blur-2xl relative shadow-lg translate-y-0 sm:translate-y-0 lg:translate-y-12 hover:shadow-[0_0_30px_rgba(255,217,0,0.5)] dark:hover:shadow-[0_0_30px_rgba(255,217,0,0.5)] transition-all duration-300 sm:aspect-[16/9] lg:aspect-square hover:border-[#ffd900] dark:hover:border-[#ffd900]">
                    <div className="relative w-full h-full flex flex-col">
                      <div className="relative w-full h-[50%] sm:h-[60%] bg-[#1a1a1a] overflow-hidden">
                        <Image
                          src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/672e6dbd369f99e0a1c71aeb_data.png"
                          alt="Data"
                          width={1066}
                          height={600}
                          className="w-full h-full object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.15)] to-transparent opacity-70"></div>
                      </div>
                      <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-[rgba(23,24,26,0.95)] to-[rgba(23,24,26,0.98)]">
                        <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3">Data</div>
                        <div className="text-white/70 text-sm sm:text-base leading-relaxed">The foundation that powers everything. Centralized, real-time data that informs decisions and drives insights.</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
