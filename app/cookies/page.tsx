export default function CookiesPage() {
    return (
      <main className="min-h-screen bg-[#0F0F0F] px-6 py-24 text-white">
        
        <div className="mx-auto max-w-3xl">
  
          <h1 className="text-4xl font-bold">Cookies Policy</h1>
          <p className="mt-4 text-white/60">
            Last updated: April 2026
          </p>
  
          <div className="mt-10 space-y-8 text-white/70 leading-relaxed">
  
            <section>
              <h2 className="text-xl font-semibold text-white">What are cookies?</h2>
              <p className="mt-2">
                Cookies are small files stored on your device to improve website functionality
                and user experience.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold text-white">How we use cookies</h2>
              <p className="mt-2">
                We use cookies to remember cart items, improve performance,
                and analyze traffic.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold text-white">Control cookies</h2>
              <p className="mt-2">
                You can disable cookies in your browser settings at any time.
              </p>
            </section>
  
          </div>
        </div>
      </main>
    );
  }