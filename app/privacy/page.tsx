export default function PrivacyPage() {
    return (
      <main className="min-h-screen bg-[#0F0F0F] px-6 py-24 text-white">
        
        <div className="mx-auto max-w-3xl">
  
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-4 text-white/60">
            Last updated: April 2026
          </p>
  
          <div className="mt-10 space-y-8 text-white/70 leading-relaxed">
  
            <section>
              <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
              <p className="mt-2">
                We collect basic information such as email addresses when you subscribe,
                and order details when you purchase products.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold text-white">2. How We Use Data</h2>
              <p className="mt-2">
                We use your data to process orders, improve user experience,
                and send optional marketing emails if you subscribe.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold text-white">3. Data Protection</h2>
              <p className="mt-2">
                Your data is stored securely and never sold to third parties.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold text-white">4. Contact</h2>
              <p className="mt-2">
                For privacy questions: privacy@velora.com
              </p>
            </section>
  
          </div>
        </div>
      </main>
    );
  }