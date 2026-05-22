export default function DoingThingsRightPlatform() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-yellow-900 text-white">
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-2xl max-w-5xl">
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Doing Things Right,
            <span className="block text-yellow-400">
              Let’s Talk Solutions
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
            A platform dedicated to discussing solutions for corruption,
            governance, systemic challenges, and positive transformation
            across every sector of life.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-full transition duration-300 shadow-lg">
              Join the Conversation
            </button>

            <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-full transition duration-300">
              Explore Topics
            </button>

          </div>

        </div>

      </section>

      <section className="grid md:grid-cols-3 gap-8 px-8 pb-20 max-w-6xl mx-auto">

        <div className="bg-white/10 p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300">
            Governance
          </h2>
          <p className="text-gray-200">
            Discuss policies, leadership, transparency, and accountability
            for stronger institutions.
          </p>
        </div>

        <div className="bg-white/10 p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300">
            Anti-Corruption
          </h2>
          <p className="text-gray-200">
            Share ideas and solutions to combat corruption and build ethical systems.
          </p>
        </div>

        <div className="bg-white/10 p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300">
            Community Impact
          </h2>
          <p className="text-gray-200">
            Empower communities through dialogue, education, collaboration,
            and sustainable action.
          </p>
        </div>

      </section>
    </main>
  );
}