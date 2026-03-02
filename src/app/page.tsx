export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4">
          Hi, I&apos;m <span className="text-blue-500">Muddasir</span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 text-center max-w-2xl">
          Welcome to my personal website
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="mailto:madarauzumaki11223@gmail.com"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-neutral-400 text-lg leading-relaxed">
          I&apos;m passionate about building things and creating amazing experiences.
          This is my personal space on the web where you can learn more about me
          and get in touch.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let&apos;s Connect</h2>
          <p className="text-neutral-400 mb-8">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
          <a
            href="mailto:madarauzumaki11223@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            madarauzumaki11223@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-neutral-500">
        <p>© {new Date().getFullYear()} Muddasir. All rights reserved.</p>
      </footer>
    </main>
  );
}
