import React from 'react';

const ScalingProblems = () => {
  const problems = [
    {
      title: 'PROBLEM N⁰ 1',
      description: "Founders struggle to scale because they don't have a system. They focus on growing revenue but ignore internal bottlenecks, inefficiencies, and broken operations. The result? Stagnation.",
    },
    {
      title: 'PROBLEM N⁰ 2',
      description: "Many businesses try to implement AI and automation but fail. They either don't use it at all or deploy it without strategy—leading to wasted time, useless tools, and no real improvement.",
    },
    {
      title: 'PROBLEM N⁰ 3',
      description: "Scaling strategies are overcomplicated. Founders drown in frameworks, endless optimizations, and \"growth hacks\" that don't move the needle. The result? No real execution.",
    },
  ];

  return (
    <section className="py-20 bg-[radial-gradient(ellipse_at_bottom_center,#d0ed01_0%,#12120cde_45%)] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#cce808]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#d0ed01bf]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#ffd900]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="text-center mb-16">
          <div className="relative max-w-3xl mx-auto">
            {/* Email symbol with connecting lines */}
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-4">
              {/* Left side with envelope */}
              <div className="w-16 sm:w-24 flex-shrink-0">
                {/* Modern Mail Icon */}
                <div className="relative w-full aspect-square rounded-lg shadow-lg  overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  {/* Mail Icon Design */}
                  <div className="absolute inset-0">
                    <svg 
                      viewBox="0 0 24 24" 
                      className="w-full h-full text-[#d0ed01]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      preserveAspectRatio="none"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right side content with connecting lines */}
              <div className="flex-grow pt-2 relative w-full">
                {/* Horizontal connecting line top */}
                <div className="absolute left-0 top-[15%] w-[calc(100%+1rem)] h-px bg-gradient-to-r from-[#d0ed01]/20 via-[#d0ed01]/40 to-[#d0ed01]/20 -translate-x-4 hidden sm:block"></div>
                
                <div className="py-2">
                  <div className="flex flex-col sm:flex-row sm:items-center text-[#d0ed01] justify-center">
                    <span className="font-medium text-[#d0ed01] sm:text-[#d0ed01] text-base md:text-xl mb-1 sm:mb-0 sm:mr-2 text-center sm:text-left">Date:</span>
                    <span className="text-gray-300 text-base md:text-xl text-center sm:text-left">About three weeks into your procrastination routine</span>
                  </div>
                </div>

                {/* Horizontal connecting line middle */}
                <div className="absolute left-0 top-[55%] w-[calc(100%+1rem)] h-px bg-gradient-to-r from-[#d0ed01]/20 via-[#d0ed01]/40 to-[#d0ed01]/20 -translate-x-4 hidden sm:block"></div>

                <div className="py-2">
                  <div className="flex flex-col sm:flex-row sm:items-center text-[#d0ed01] justify-center">
                    <span className="font-medium text-[#d0ed01] sm:text-[#d0ed01] text-base md:text-xl mb-1 sm:mb-0 sm:mr-2 text-center sm:text-left">From:</span>
                    <span className="text-gray-300 text-base md:text-xl text-center sm:text-left">Julie + Cathy (members of info product creators anonymous)</span>
                  </div>
                </div>

                {/* Horizontal connecting line bottom */}
                <div className="absolute left-0 top-[95%] w-[calc(100%+1rem)] h-px bg-gradient-to-r from-[#d0ed01]/20 via-[#d0ed01]/40 to-[#d0ed01]/20 -translate-x-4 hidden sm:block"></div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-xl md:text-3xl font-bold text-white mb-4 transform hover:scale-105 transition-transform duration-300">
              We know your time is valuable,{' '}
              <span className="text-[#cce808]">so we promise not to waste it</span> with fluffery.
            </h4>
            <p className="text-base md:text-xl text-gray-300 mb-6">
              There is a big problem in the business scaling market right now.
            </p>
            <h1 className="text-2xl md:text-4xl font-semibold text-[#cce808] transform hover:scale-105 transition-transform duration-300">
              Actually, three BIG problems.
            </h1>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-8 shadow-2xl hover:shadow-[#cce808]/20 transition-all duration-300 transform hover:-translate-y-1 border border-[#cce808]/10 overflow-hidden"
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#cce808]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#cce808] transition-colors duration-300">
                  {problem.title}
                </h3>
                <p className="text-white leading-relaxed">
                  {problem.description}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#cce808]/10 to-transparent rounded-bl-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScalingProblems; 