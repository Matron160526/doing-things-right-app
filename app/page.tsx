export default function DoingThingsRightPlatform() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-yellow-900 text-white">
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Doing Things Right
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10">
          A platform dedicated to discussing solutions for corruption,
          governance, systemic challenges, and positive transformation
          across every sector of life.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-2xl text-lg font-bold shadow-xl transition">
            Join the Conversation
          </button>

          <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-2xl text-lg font-bold transition">
            Learn More
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 w-full">

          <div className="bg-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-md">
            <h2 className="text-2xl font-bold mb-4 text-yellow-300">
              Governance
            </h2>

            <p className="text-gray-200">
              Promoting accountability, transparency, and ethical leadership
              in institutions and organizations.
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-md">
            <h2 className="text-2xl font-bold mb-4 text-yellow-300">
              Innovation
            </h2>

            <p className="text-gray-200">
              Encouraging modern solutions, digital transformation, and
              creative thinking for societal growth.
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-md">
            <h2 className="text-2xl font-bold mb-4 text-yellow-300">
              Community Impact
            </h2>

            <p className="text-gray-200">
              Empower communities through dialogue, education,
              collaboration, and sustainable action.
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}