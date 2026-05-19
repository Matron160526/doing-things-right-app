export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-700 to-indigo-900 text-white">
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-2xl max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Doing Things Right,
            <span className="block text-yellow-300">Let’s Talk</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            A platform dedicated to discussing solutions for social injustice,
            corruption, governance, systemic challenges, and positive change
            across every sector of life.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-full text-lg transition">
              Join the Conversation
            </button>

            <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg transition">
              Explore Topics
            </button>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 px-8 pb-20">
        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300">
            Social Justice
          </h2>
          <p>
            Engage in meaningful conversations about equality, fairness, and
            protecting human dignity.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-pink-300">
            Good Governance
          </h2>
          <p>
            Discuss leadership, accountability, transparency, and responsible
            governance systems.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-cyan-300">
            Community Impact
          </h2>
          <p>
            Inspire action and collaboration that creates lasting positive
            change within communities.
          </p>
        </div>
      </section>
    </main>
  );
}