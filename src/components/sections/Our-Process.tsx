"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
// cSpell:ignore gsap
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Array of process items with positions for circular arrangement
const processItems = [{
  text: "Scheduling Conflicts",
  delay: 100,
  position: {
    top: '60%',
    left: '20%',
    mobileTop: '55%',
    mobileLeft: '15%'
  }
}, {
  text: "Delayed Payments",
  delay: 200,
  position: {
    top: '60%',
    left: '80%',
    mobileTop: '55%',
    mobileLeft: '85%'
  }
}, {
  text: "Lost Documents",
  delay: 300,
  position: {
    top: '67%',
    left: '30%',
    mobileTop: '62%',
    mobileLeft: '25%'
  }
}, {
  text: "Limited Insights",
  delay: 400,
  position: {
    top: '67%',
    left: '70%',
    mobileTop: '62%',
    mobileLeft: '75%'
  }
}, {
  text: "Compliance Gaps",
  delay: 500,
  position: {
    top: '75%',
    left: '25%',
    mobileTop: '70%',
    mobileLeft: '20%'
  }
}, {
  text: "Missed Leads",
  delay: 600,
  position: {
    top: '70%',
    left: '50%',
    mobileTop: '65%',
    mobileLeft: '50%'
  }
}, {
  text: "Inefficient Training",
  delay: 700,
  position: {
    top: '75%',
    left: '75%',
    mobileTop: '70%',
    mobileLeft: '80%'
  }
}, {
  text: "Technical Errors",
  delay: 800,
  position: {
    top: '83%',
    left: '40%',
    mobileTop: '78%',
    mobileLeft: '35%'
  }
}, {
  text: "Customer Feedback",
  delay: 900,
  position: {
    top: '83%',
    left: '60%',
    mobileTop: '78%',
    mobileLeft: '65%'
  }
}, {
  text: "Data Security",
  delay: 1000,
  position: {
    top: '78%',
    left: '50%',
    mobileTop: '73%',
    mobileLeft: '50%'
  }
}];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const dashboardRef = useRef<HTMLDivElement | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    // Add event listener for window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // GSAP ScrollTrigger animation for the wrap effect
    const wrapEffect = circleRef.current?.querySelector('.wrap_effect');
    if (wrapEffect) {
      // Main scale and opacity animation with adjusted trigger points
      gsap.fromTo(wrapEffect,
        {
          scale: 0.7,
          opacity: 0.8,
          transformOrigin: 'center center'
        },
        {
          scale: 1.2,
          opacity: 1,
          transformOrigin: 'center center',
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
            toggleActions: "play reverse play reverse"
          }
        }
      );

      // Enhanced blur animation with adjusted trigger points
      const blurElement = wrapEffect.querySelector('feGaussianBlur');
      if (blurElement) {
        gsap.fromTo(blurElement,
          {
            attr: { stdDeviation: "30" }
          },
          {
            attr: { stdDeviation: "2" },
            duration: 2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 2,
              toggleActions: "play reverse play reverse"
            }
          }
        );
      }

      // Smoother rotation animation with adjusted trigger points
      gsap.fromTo(wrapEffect,
        {
          rotation: 0
        },
        {
          rotation: 3,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
            toggleActions: "play reverse play reverse"
          }
        }
      );

      // Enhanced y-axis movement with adjusted trigger points
      gsap.fromTo(wrapEffect,
        {
          y: 0
        },
        {
          y: -30,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }

    // Enhanced dashboard image fade in animation with adjusted trigger points
    if (dashboardRef.current) {
      gsap.fromTo(dashboardRef.current,
        {
          opacity: 0,
          scale: 0.95,
          y: 20
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "center 80%",
            end: "center center",
            scrub: 1.5,
            toggleActions: "play reverse play reverse"
          }
        }
      );
    }
  }, []);

  return (
    <div>
      <section 
        ref={sectionRef} 
        className="relative min-h-[100vh] sm:min-h-[120vh] w-full overflow-hidden flex flex-col" 
        style={{
          background: "linear-gradient(#00000080 81%, #000000), url('https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/657ffcc01a0cd671e6e22cfa_Redline.svg')",
          backgroundPosition: "0 0, 50% 0",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto, cover"
        }}
      >
        {/* Header Section - Compact spacing */}
        <div className="container mx-auto px-4 relative z-20 pt-12 sm:pt-20">
          <div className="text-center space-y-2">
            <div className="inline-block px-3 sm:px-4 py-2 sm:py-2.5 bg-black/50 rounded-full text-sm sm:text-base font-medium text-yellow-400 tracking-wide">
              Our Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold">
              How we work
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto font-light leading-relaxed pb-2">
              An inside look into our framework to drive consistent results
            </p>
          </div>
        </div>

        {/* Circle Section - Extra tight spacing */}
        <div className="flex-1 flex items-center justify-center relative -mt-32 sm:-mt-64">
          <div className="w-full max-w-[1200px] mx-auto flex items-center justify-center">
            <div ref={circleRef} className="relative w-full aspect-square flex items-center justify-center">
              <div className="wrap_effect absolute inset-0 flex items-center justify-center" style={{
                willChange: 'transform',
                transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
                opacity: 0.9
              }}>
                <svg width="966" height="721" viewBox="0 0 966 671" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <g opacity="0.5" filter="url(#filter0_f_1280_25918)">
                    <path d="M723.609 242.739C787.326 306.456 823.123 392.876 823.123 482.986H910V55.4453H56.0001V482.986H143.6C143.6 392.876 179.396 306.456 243.114 242.739C306.831 179.021 393.251 143.225 483.361 143.225C573.472 143.225 659.891 179.021 723.609 242.739Z" fill="url(#paint0_radial_1280_25918)"></path>
                  </g>
                  <g opacity="0.3">
                    <circle cx="0.720347" cy="0.720347" r="0.720347" transform="matrix(-0.897177 0.44167 0.44167 0.897177 482.4 214.838)" fill="white"></circle>
                    <circle cx="0.720347" cy="0.720347" r="0.720347" transform="matrix(-0.897177 0.44167 0.44167 0.897177 378.67 225.643)" fill="white"></circle>
                    <circle cx="0.720347" cy="0.720347" r="0.720347" transform="matrix(0.993555 0.113351 0.113351 -0.993555 584.056 76.9016)" fill="white"></circle>
                    <circle cx="0.720347" cy="0.720347" r="0.720347" transform="matrix(-0.897177 0.44167 0.44167 0.897177 451.537 204.338)" fill="white"></circle>
                    <circle cx="0.720347" cy="0.720347" r="0.720347" transform="matrix(-0.897177 0.44167 0.44167 0.897177 347.808 215.143)" fill="white"></circle>
                    <circle cx="0.720347" cy="0.720347" r="0.720347" transform="matrix(0.993555 0.113351 0.113351 -0.993555 604.346 102.417)" fill="white"></circle>
                    <circle cx="0.720347" cy="0.720347" r="0.720347" transform="matrix(-0.897177 0.44167 0.44167 0.897177 453.177 251.705)" fill="white"></circle>
                    <circle cx="0.720347" cy="0.720347" r="0.720347" transform="matrix(-0.897177 0.44167 0.44167 0.897177 349.447 262.51)" fill="white"></circle>
                    <circle cx="0.720347" cy="0.720347" r="0.720347" transform="matrix(0.993555 0.113351 0.113351 -0.993555 628.57 61.6794)" fill="white"></circle>
                    <circle opacity="0.5" cx="0.720347" cy="0.720347" r="0.720347" transform="matrix(-0.897177 0.44167 0.44167 0.897177 435.241 234.842)" fill="white"></circle>
                    <circle opacity="0.5" cx="0.720347" cy="0.720347" r="0.720347" transform="matrix(-0.897177 0.44167 0.44167 0.897177 331.511 245.647)" fill="white"></circle>
                    <circle opacity="0.5" cx="0.720347" cy="0.720347" r="0.720347" transform="matrix(0.993555 0.113351 0.113351 -0.993555 634.545 85.5618)" fill="white"></circle>
                    <circle opacity="0.1" cx="0.720347" cy="0.720347" r="0.720347" transform="matrix(-0.897177 0.44167 0.44167 0.897177 512.934 174.113)" fill="white"></circle>
                    <circle opacity="0.1" cx="0.720347" cy="0.720347" r="0.720347" transform="matrix(-0.897177 0.44167 0.44167 0.897177 409.204 184.918)" fill="white"></circle>
                    <circle opacity="0.1" cx="0.720347" cy="0.720347" r="0.720347" transform="matrix(0.993555 0.113351 0.113351 -0.993555 536.354 94.6599)" fill="white"></circle>
                    <circle cx="0.720347" cy="0.720347" r="0.720347" transform="matrix(-0.897177 0.44167 0.44167 0.897177 585.079 124.948)" fill="white"></circle>
                    <circle cx="0.720347" cy="0.720347" r="0.720347" transform="matrix(-0.897177 0.44167 0.44167 0.897177 481.349 135.753)" fill="white"></circle>
                    <circle cx="0.720347" cy="0.720347" r="0.720347" transform="matrix(0.993555 0.113351 0.113351 -0.993555 449.082 97.0288)" fill="white"></circle>
                    <circle cx="0.720347" cy="0.720347" r="0.720347" transform="matrix(-0.897177 0.44167 0.44167 0.897177 565.573 49.4426)" fill="white"></circle>
                    <circle cx="0.720347" cy="0.720347" r="0.720347" transform="matrix(-0.897177 0.44167 0.44167 0.897177 461.843 60.248)" fill="white"></circle>
                    <circle cx="0.720347" cy="0.720347" r="0.720347" transform="matrix(0.993555 0.113351 0.113351 -0.993555 424.681 171.097)" fill="white"></circle>
                  </g>
                  <path d="M813.498 473C813.498 530.742 798.324 587.469 769.498 637.498L484 637.498H198.502C169.676 587.469 154.502 530.742 154.502 473C154.502 415.161 169.727 358.341 198.647 308.251C227.566 258.161 269.161 216.566 319.251 187.647C369.341 158.727 426.161 143.502 484 143.502C541.839 143.502 598.659 158.727 648.749 187.647C698.839 216.566 740.434 258.161 769.353 308.251C798.273 358.341 813.498 415.161 813.498 473Z" fill="url(#paint1_linear_1280_25918)"></path>
                  <path d="M813.498 473C813.498 530.742 798.324 587.469 769.498 637.498L484 637.498H198.502C169.676 587.469 154.502 530.742 154.502 473C154.502 415.161 169.727 358.341 198.647 308.251C227.566 258.161 269.161 216.566 319.251 187.647C369.341 158.727 426.161 143.502 484 143.502C541.839 143.502 598.659 158.727 648.749 187.647C698.839 216.566 740.434 258.161 769.353 308.251C798.273 358.341 813.498 415.161 813.498 473Z" fill="url(#paint2_radial_1280_25918)" fillOpacity="0.2"></path>
                  <path d="M813.498 473C813.498 530.742 798.324 587.469 769.498 637.498L484 637.498H198.502C169.676 587.469 154.502 530.742 154.502 473C154.502 415.161 169.727 358.341 198.647 308.251C227.566 258.161 269.161 216.566 319.251 187.647C369.341 158.727 426.161 143.502 484 143.502C541.839 143.502 598.659 158.727 648.749 187.647C698.839 216.566 740.434 258.161 769.353 308.251C798.273 358.341 813.498 415.161 813.498 473Z" stroke="url(#paint3_linear_1280_25918)" strokeWidth="1.00471"></path>
                  <path opacity="0.88" d="M797.501 654C829.273 598.969 846 536.544 846 473C846 409.456 829.273 347.031 797.501 292C765.729 236.969 720.031 191.271 665 159.499C609.969 127.727 547.544 111 484 111C420.456 111 358.031 127.727 303 159.499C247.969 191.271 202.271 236.969 170.499 292C138.727 347.031 122 409.456 122 473C122 536.544 138.727 598.969 170.499 654" stroke="url(#paint4_linear_1280_25918)" strokeWidth="1.00471"></path>
                  <path opacity="0.24" d="M825.214 670C859.795 610.104 878 542.161 878 473C878 403.839 859.795 335.896 825.214 276C790.633 216.104 740.896 166.367 681 131.786C621.104 97.2053 553.161 79 484 79C414.839 79 346.896 97.2053 287 131.786C227.104 166.367 177.367 216.104 142.786 276C108.205 335.896 90 403.839 90 473C90 542.162 108.205 610.104 142.786 670" stroke="url(#paint5_linear_1280_25918)" strokeWidth="1.00471"></path>
                  <path opacity="0.08" d="M910 473C910 417.057 898.981 361.662 877.573 309.977C856.164 258.292 824.785 211.33 785.227 171.773C745.67 132.215 698.708 100.836 647.023 79.4273C595.338 58.0188 539.943 47 484 47C428.057 47 372.662 58.0188 320.977 79.4273C269.292 100.836 222.33 132.215 182.772 171.773C143.215 211.33 111.836 258.292 90.4273 309.977C69.0188 361.662 58 417.057 58 473" stroke="url(#paint6_linear_1280_25918)" strokeWidth="1.00471"></path>
                  <path opacity="0.16" d="M697.161 279.625C754.536 340.724 786.77 423.592 786.77 510H865V54H96V510H174.881C174.881 423.592 207.114 340.724 264.49 279.625C321.866 218.525 399.684 184.2 480.825 184.2C561.967 184.2 639.785 218.525 697.161 279.625Z" fill="url(#paint7_radial_1280_25918)"></path>
                  <defs>
                      <filter id="filter0_f_1280_25918" x="0.937431" y="0.382683" width="964.125" height="537.666" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                        <feGaussianBlur stdDeviation="27.5313" result="effect1_foregroundBlur_1280_25918"></feGaussianBlur>
                      </filter>
                        <radialGradient id="paint0_radial_1280_25918" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(483 280.256) rotate(90) scale(272.185 427.538)">
                          <stop stopColor="#FFD700"></stop>
                          <stop offset="1" stopColor="#FFD700" stopOpacity="0"></stop>
                        </radialGradient>
                        <linearGradient id="paint1_linear_1280_25918" x1="484" y1="189.305" x2="484" y2="673.999" gradientUnits="userSpaceOnUse">
                          <stop offset="0.326198" stopColor="#0A0B0B"></stop>
                          <stop offset="0.87782" stopColor="#0A0A0A" stopOpacity="0"></stop>
                        </linearGradient>
                        <radialGradient id="paint2_radial_1280_25918" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(484.005 237.225) rotate(90) scale(450.252 450.252)">
                          <stop offset="0.0001" stopColor="#FFD700"></stop>
                          <stop offset="0.0002" stopColor="#FFD700"></stop>
                          <stop offset="0.529327" stopColor="#1B1C1F"></stop>
                          <stop offset="0.935113" stopColor="#1B1C1F" stopOpacity="0"></stop>
                        </radialGradient>
                        <linearGradient id="paint3_linear_1280_25918" x1="484" y1="143" x2="484" y2="368.684" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FFD700"></stop>
                          <stop offset="1" stopColor="#1D1E21" stopOpacity="0"></stop>
                        </linearGradient>
                        <linearGradient id="paint4_linear_1280_25918" x1="484" y1="111" x2="484" y2="700" gradientUnits="userSpaceOnUse">
                          <stop offset="0.154319" stopColor="#FFD700"></stop>
                          <stop offset="1" stopColor="#1D1E21" stopOpacity="0"></stop>
                        </linearGradient>
                        <linearGradient id="paint5_linear_1280_25918" x1="484" y1="79" x2="484" y2="720.066" gradientUnits="userSpaceOnUse">
                          <stop offset="0.154319" stopColor="#FFD700"></stop>
                          <stop offset="1" stopColor="#1D1E21" stopOpacity="0"></stop>
                        </linearGradient>
                        <linearGradient id="paint6_linear_1280_25918" x1="484" y1="47" x2="484" y2="740.133" gradientUnits="userSpaceOnUse">
                          <stop offset="0.154319" stopColor="#FFD700"></stop>
                          <stop offset="1" stopColor="#1D1E21" stopOpacity="0"></stop>
                        </linearGradient>
                        <radialGradient id="paint7_radial_1280_25918" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(476.881 319.92) rotate(90) scale(189.864 259.81)">
                          <stop stopColor="#FFD700"></stop>
                          <stop offset="1" stopColor="#FFD700" stopOpacity="0"></stop>
                        </radialGradient>
                  </defs>
                </svg>
              </div>

              {/* Central content - Adjusted position */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center">
                <div className="mb-2">
                  <Badge className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/50 backdrop-blur-sm text-yellow-400 text-sm sm:text-base font-medium tracking-wide border border-white/10">
                    Audit
                  </Badge>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center max-w-xl px-4">
                  Audit the key areas for improvements
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Process Items - Mobile-specific positioning */}
        {processItems.map((item, index) => (
          <div 
            key={index} 
            data-process-item={index}
            className="absolute z-10" 
            style={{
              top: windowWidth < 640 ? item.position.mobileTop : item.position.top,
              left: windowWidth < 640 ? item.position.mobileLeft : item.position.left,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="flex items-center space-x-1.5 sm:space-x-2 p-1.5 sm:p-2.5 bg-black/80 backdrop-blur-md rounded-lg transform transition-all duration-300 hover:scale-105 border border-white/10 shadow-lg">
              <div className="min-w-3 sm:min-w-5 h-3 sm:h-5 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
                <Check className="w-2 sm:w-3 h-2 sm:h-3 text-black" />
              </div>
              <span className="text-[10px] sm:text-sm md:text-base text-white font-medium whitespace-nowrap">{item.text}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Combined Build & Track Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#000,90%] to-[#d0ed01bf]">
        <div className="container mx-auto px-4">
          {/* Content Section */}
          <div className="w-auto mx-4 sm:mx-8 bg-gradient-to-b from-black via-yellow-400/10 to-transparent rounded-t-3xl">
            <div className="relative z-10 bg-gradient-to-b from-black via-[#ffffff96] to-transparent h-full pt-16 sm:pt-24 px-4 sm:px-[52px] pb-12 sm:pb-16 rounded-t-3xl">
              <div className="flex flex-col justify-center items-center w-full">
                <div className="flex flex-col items-center gap-3 max-w-2xl">
                  <Badge className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/50 backdrop-blur-sm text-yellow-400 text-sm sm:text-base font-medium tracking-wide border border-white/10">
                    Build & Track
                  </Badge>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black font-bold text-center">
                    Build, Deploy & Track Your Solution
                  </h2>
                  <p className="text-sm sm:text-base text-black max-w-2xl mx-auto font-light leading-relaxed">
                    We like to start small, scale fast. Launch a solution that adapts as your business evolves and track measurable improvements in your team's performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Screen Section */}
          <div className="w-[95%] sm:w-[90%] max-w-7xl mx-auto mt-4 sm:mt-6 aspect-video rounded-[20px] sm:rounded-[40px] relative overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
            <div className="w-full h-full relative z-10">
              <div className="aspect-video w-full h-full flex justify-center items-center relative rounded-3xl bg-[linear-gradient(#fff0_52%,#1e1e22_90%),url(https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/657b3bf18c668e08e8151636_1.png)] bg-[position:0_0,50%_0] bg-[repeat:repeat,no-repeat] bg-[length:auto,cover]">
                <div 
                  ref={dashboardRef}
                  className="w-full h-full bg-[url(https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/658475e9dc48ee90fbafded9_dashboard_built.png)] bg-[position:50%_0] bg-no-repeat bg-cover rounded-3xl" 
                  style={{ willChange: 'opacity', opacity: 0 }}
                />
              </div>
            </div>
          </div>

          {/* Graph Section */}
          <div className="kip_wrap flex justify-center items-center w-full h-[400px] sm:h-[606px] pt-[80px] sm:pt-[164px] pb-[80px] sm:pb-[164px] relative">
            <div className="center_div relative flex flex-col justify-center items-center w-full z-10">
              <div className="col gap-4 center mw_small flex flex-col items-center max-w-3xl text-center px-4">
                <Badge className="px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-yellow-400 text-base sm:text-lg font-medium tracking-wide border border-white/10">
                  Track
                </Badge>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-[1.2] tracking-[-1.25px] text-white pb-2 m-0">
                  Deploy & track our<br />
                  solution in your team
                </h2>
                <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto font-light leading-relaxed mt-2 mb-4">
                  Deploy your custom tool and track measurable improvements in your team's performance & business outcomes.
                </p>
                <a 
                  href="https://calendly.com/tom-creme/discovery-call-creme" 
                  target="_blank" 
                  className="cta inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full text-sm sm:text-base text-black font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl mt-2 relative overflow-hidden"
                >
                  <span className="relative z-10">Schedule a Call</span>
                  <Image 
                    src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/657b388b5a2f8cade34f6f94_arrow-right.svg" 
                    alt="Arrow right"
                    width={20}
                    height={20}
                    className="w-4 sm:w-5 h-4 sm:h-5 relative z-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 blur-xl" />
                </a>
              </div>
            </div>

            {/* Graph Animation Container */}
            <div data-is-ix2-target="1" className="graph_lottie absolute inset-0 z-2" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/67356dc635f7c5e9ad52a59d_Graph%20(5).json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="0" data-duration="5">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 600" width="1440" height="600" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)', contentVisibility: 'visible' }}>
                <defs>
                  <clipPath id="__lottie_element_2">
                    <rect width="1440" height="600" x="0" y="0"></rect>
                  </clipPath>
                  <linearGradient id="__lottie_element_7" spreadMethod="pad" gradientUnits="userSpaceOnUse" x1="1217.237060546875" y1="55.73274612426758" x2="0" y2="531.5">
                    <stop offset="0%" stopColor="rgb(2, 2, 2)" stopOpacity="1"></stop>
                    <stop offset="100%" stopColor="rgb(0, 0, 0)" stopOpacity="1"></stop>
                  </linearGradient>
                  <linearGradient id="__lottie_element_11" spreadMethod="pad" gradientUnits="userSpaceOnUse" x1="0" y1="330" x2="1212.5" y2="0">
                    <stop offset="0%" stopColor="rgb(255,255,255)" stopOpacity="0"></stop>
                    <stop offset="100%" stopColor="rgb(255,255,255)" stopOpacity="1"></stop>
                  </linearGradient>
                  <clipPath id="__lottie_element_14">
                    <path d="M0,0 L109,0 L109,109 L0,109z"></path>
                  </clipPath>
                  <clipPath id="__lottie_element_18">
                    <path d="M0,0 L41,0 L41,41 L0,41z"></path>
                  </clipPath>
                  <filter id="__lottie_element_20" x="0%" y="0%" width="100%" height="100%">
                    <feGaussianBlur in="SourceAlpha" result="filter_result_0_drop_shadow_1" stdDeviation="1.5"></feGaussianBlur>
                    <feOffset dx="9.184850993605148e-17" dy="1.5" in="filter_result_0_drop_shadow_1" result="filter_result_0_drop_shadow_2"></feOffset>
                    <feFlood floodColor="#000000" floodOpacity="0.1599999964237213" result="filter_result_0_drop_shadow_3"></feFlood>
                    <feComposite in="filter_result_0_drop_shadow_3" in2="filter_result_0_drop_shadow_2" operator="in" result="filter_result_0_drop_shadow_4"></feComposite>
                    <feMerge result="filter_result_0">
                      <feMergeNode in="filter_result_0_drop_shadow_4"></feMergeNode>
                      <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                  </filter>
                  <clipPath id="__lottie_element_22">
                    <path d="M0,0 L62,0 L62,62 L0,62z"></path>
                  </clipPath>
                  <filter id="__lottie_element_24" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur result="filter_result_0" stdDeviation="6.60377311706543 6.60377311706543" edgeMode="duplicate"></feGaussianBlur>
                  </filter>
                  <clipPath id="__lottie_element_26">
                    <path d="M0,0 L109,0 L109,109 L0,109z"></path>
                  </clipPath>
                  <filter id="__lottie_element_28" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur result="filter_result_0" stdDeviation="13.999999999999998 13.999999999999998" edgeMode="duplicate"></feGaussianBlur>
                  </filter>
                  <clipPath id="__lottie_element_35">
                    <path d="M0,0 L19,0 L19,19 L0,19z"></path>
                  </clipPath>
                  <clipPath id="__lottie_element_40">
                    <path d="M0,0 L31,0 L31,31 L0,31z"></path>
                  </clipPath>
                  <clipPath id="__lottie_element_44">
                    <path d="M0,0 L19,0 L19,19 L0,19z"></path>
                  </clipPath>
                  <g id="__lottie_element_47">
                    <g transform="matrix(1,0,0,1,-1205,-196)" opacity="1" style={{ display: 'block' }}>
                      <g opacity="1" transform="matrix(1,0,0,1,1214.5,205.5)">
                        <path fill="rgb(0,0,0)" fillOpacity="1" d=" M0,-9 C4.967100143432617,-9 9,-4.967100143432617 9,0 C9,4.967100143432617 4.967100143432617,9 0,9 C-4.967100143432617,9 -9,4.967100143432617 -9,0 C-9,-4.967100143432617 -4.967100143432617,-9 0,-9z"></path>
                      </g>
                    </g>
                  </g>
                  <mask id="__lottie_element_47_1">
                    <use xlinkHref="#__lottie_element_47"></use>
                  </mask>
                  <clipPath id="__lottie_element_57">
                    <path d="M0,0 L31,0 L31,31 L0,31z"></path>
                  </clipPath>
                  <g id="__lottie_element_60">
                    <g transform="matrix(1,0,0,1,-1199,-190)" opacity="1" style={{ display: 'block' }}>
                      <g opacity="1" transform="matrix(1,0,0,1,1214.5,205.5)">
                        <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" stroke="rgb(0,0,0)" strokeOpacity="1" strokeWidth="4" d=" M0,-7 C3.863300085067749,-7 7,-3.863300085067749 7,0 C7,3.863300085067749 3.863300085067749,7 0,7 C-3.863300085067749,7 -7,3.863300085067749 -7,0 C-7,-3.863300085067749 -3.863300085067749,-7 0,-7z"></path>
                      </g>
                    </g>
                  </g>
                  <mask id="__lottie_element_60_1">
                    <use xlinkHref="#__lottie_element_60"></use>
                  </mask>
                  <linearGradient id="__lottie_element_69" spreadMethod="pad" gradientUnits="userSpaceOnUse" x1="-4.874999523162842" y1="8.250000953674316" x2="9" y2="-5.625">
                    <stop offset="0%" stopColor="rgb(0, 0, 0)" stopOpacity="1"></stop>
                    <stop offset="100%" stopColor="rgb(0, 0, 0)" stopOpacity="1"></stop>
                  </linearGradient>
                  <linearGradient id="__lottie_element_76" spreadMethod="pad" gradientUnits="userSpaceOnUse" x1="-17.393287658691406" y1="17.49996566772461" x2="17.606712341308594" y2="-17.500024795532227">
                    <stop offset="0%" stopColor="rgb(4, 4, 4)" stopOpacity="1"></stop>
                    <stop offset="100%" stopColor="rgb(0, 0, 0)" stopOpacity="1"></stop>
                  </linearGradient>
                </defs>
                <g clipPath="url(#__lottie_element_2)">
                  <g transform="matrix(1,0,0,1,-24.25,-5.5)" opacity="1" style={{ display: 'block' }}>
                    <g opacity="1" transform="matrix(1,0,0,1,4,4)">
                      <path stroke="url(#__lottie_element_7)" strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" strokeOpacity="0.7200000286102295" strokeWidth="2" d="M0 0"></path>
                    </g>
                  </g>
                  <g transform="matrix(1,0,0,1,-24.25,-5.5)" opacity="1" style={{ display: 'block' }}>
                    <g opacity="1" transform="matrix(1,0,0,1,4,205.5)">
                      <path stroke="url(#__lottie_element_11)" strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" strokeOpacity="1" strokeWidth="2" d=" M717.7899780273438,104 C649.3289794921875,104 590.6500244140625,104 561.3820190429688,104 C548.65185546875,104 536.44287109375,109.05712890625 527.4411010742188,118.05887603759766 C511.80517578125,133.69482421875 486.69482421875,158.80517578125 471.0588684082031,174.44113159179688 C462.05712890625,183.44287109375 449.84814453125,188.5 437.11773681640625,188.5 C400.5360107421875,188.5 322.9639892578125,188.5 286.38226318359375,188.5 C273.65185546875,188.5 261.44287109375,193.55712890625 252.44113159179688,202.55886840820312 C225.34060668945312,229.65939331054688 166.15939331054688,288.8406066894531 139.05886840820312,315.9411315917969 C130.05712890625,324.94287109375 117.84813690185547,330 105.11775207519531,330 C69.84681701660156,330 0,330 0,330"></path>
                    </g>
                  </g>
                  <g clipPath="url(#__lottie_element_14)" transform="matrix(1,0,0,1,641.7241821289062,250.25)" opacity="1" style={{ display: 'block' }}>
                    <g clipPath="url(#__lottie_element_18)" filter="url(#__lottie_element_20)" transform="matrix(1,0,0,1,34,34)" opacity="1" style={{ display: 'block' }}>
                      <g transform="matrix(1,0,0,1,0,0)" opacity="1" style={{ display: 'block' }}>
                        <path fill="rgb(0,0,0)" fillOpacity="0" d=" M41,0 C41,0 41,41 41,41 C41,41 0,41 0,41 C0,41 0,0 0,0 C0,0 41,0 41,0z"></path>
                      </g>
                      <g clipPath="url(#__lottie_element_35)" transform="matrix(1,0,0,1,11,11)" opacity="1" style={{ display: 'block' }}>
                        <g mask="url(#__lottie_element_47_1)" style={{ display: 'block' }}>
                          <g clipPath="url(#__lottie_element_44)" transform="matrix(1,0,0,1,0,0)" opacity="1">
                            <g transform="matrix(1,0,0,1,-1205,-196)" opacity="1" style={{ display: 'block' }}>
                              <path fill="rgb(0,0,0)" fillOpacity="0" d=" M1224,196 C1224,196 1224,215 1224,215 C1224,215 1205,215 1205,215 C1205,215 1205,196 1205,196 C1205,196 1224,196 1224,196z"></path>
                            </g>
                            <g transform="matrix(1,0,0,1,-1205,-196)" opacity="1" style={{ display: 'block' }}>
                              <g opacity="1" transform="matrix(1,0,0,1,1214.5,205.5)">
                                <path fill="rgb(29,30,33)" fillOpacity="1" d=" M9,-9 C9,-9 9,9 9,9 C9,9 -9,9 -9,9 C-9,9 -9,-9 -9,-9 C-9,-9 9,-9 9,-9z"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
                            
              <Image 
                src="https://cdn.prod.website-files.com/63c26552be9ea599a179aeed/6732559be446dc0aaa57e9fc_lines-graph.svg" 
                alt="Graph lines"
                width={1920}
                height={1080}
                className="graph-lines_group absolute inset-x-0 top-0 w-full opacity-30 mix-blend-overlay"
              />
              
              <div className="shadow-graph small absolute left-1/2 bottom-1/3 -translate-x-1/2 z-3 filter blur-[70px] bg-[#000000] rounded-[100px] w-[200px] h-[80px] -mt-8 opacity-80"></div>
              <div className="shadow-graph absolute left-1/2 bottom-1/4 -translate-x-1/2 z-3 filter blur-[70px] bg-[#000000] rounded-[100px] w-[500px] h-[150px] opacity-80"></div>
              
              <div className="blur_div-large light absolute inset-0 z-15 pointer-events-none flex justify-center items-start opacity-90">
                <div className="large-blur opacity-30 filter blur-[400px] bg-yellow-400 rounded-[400px] flex-none w-[720px] h-[720px]"></div>
                <div className="large-blur red opacity-30 filter blur-[400px] bg-yellow-600 rounded-[400px] flex-none w-[720px] h-[720px] ml-[-200px]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessSection;