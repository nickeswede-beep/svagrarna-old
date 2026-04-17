import { Routes, Route } from 'react-router-dom';
import ArticleBojarBryggor from './ArticleBojarBryggor';

function Home() {
  return (
    <div className="font-sans text-white bg-slate-900">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-2xl font-black tracking-tight text-white">
            SVÅGRARNA
          </span>
          <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide text-slate-300">
            <a href="#tjanster" className="hover:text-cyan-400 transition-colors">TJÄNSTER</a>
            <a href="#om-oss" className="hover:text-cyan-400 transition-colors">OM OSS</a>
            <a href="#kontakt" className="hover:text-cyan-400 transition-colors">KONTAKT</a>
          </div>
          <a
            href="#kontakt"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-black text-sm px-5 py-2 transition-colors"
          >
            KONTAKTA OSS
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-6"
        style={{
          background: "linear-gradient(to bottom, #0f172a 0%, #0c2340 60%, #0e3a5c 100%)",
        }}
      >
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20"
          style={{
            background: "radial-gradient(ellipse 120% 80% at 50% 120%, #06b6d4 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto">
          <p className="text-cyan-400 font-bold tracking-widest text-sm mb-4 uppercase">
            Tjänster i skärgården
          </p>
          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-6">
            ALLT DU BEHÖVER
            <span className="text-cyan-400"> I SKÄRGÅRDEN</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Dykuppdrag, bryggor, bojar, båtmotorservice, kaptenstjänster,
            transportpråm och certifierad Cinderella-service — vi är Svågrarna,
            och vi gör jobbet rätt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#tjanster"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-black text-lg px-8 py-4 transition-colors"
            >
              SE VÅRA TJÄNSTER
            </a>
            <a
              href="#kontakt"
              className="border-2 border-white hover:border-cyan-400 hover:text-cyan-400 text-white font-black text-lg px-8 py-4 transition-colors"
            >
              BEGÄR OFFERT
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="tjanster" className="bg-slate-800 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-400 font-bold tracking-widest text-sm mb-3 uppercase">Vad vi gör</p>
          <h2 className="text-5xl font-black mb-16">VÅRA TJÄNSTER</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-slate-900 p-8 border-t-4 border-cyan-500">
              <div className="text-5xl mb-6">🤿</div>
              <h3 className="text-2xl font-black mb-3">Dykuppdrag</h3>
              <p className="text-slate-400 leading-relaxed">
                Professionella dykuppdrag under vatten — besiktning, reparation och
                underhåll av bryggor, fundament och annan undervattensutrustning.
              </p>
            </div>

            <div className="bg-slate-900 p-8 border-t-4 border-cyan-500">
              <div className="text-5xl mb-6">⚓</div>
              <h3 className="text-2xl font-black mb-3">Bryggor & Bojar</h3>
              <p className="text-slate-400 leading-relaxed">
                Installation, reparation och underhåll av bryggor och bojar i
                skärgården. Vi säkerställer att dina förtöjningar håller för
                alla väder.
              </p>
              <a
                href="/artiklar/valj-ratt-material-bojar-bryggor"
                className="inline-block mt-5 text-sm font-black text-cyan-400 hover:text-cyan-300 transition-colors tracking-wide"
              >
                LÄS: Välj rätt material för infästning →
              </a>
            </div>

            <div className="bg-slate-900 p-8 border-t-4 border-cyan-500">
              <div className="text-5xl mb-6">⚙️</div>
              <h3 className="text-2xl font-black mb-3">Båtmotorservice</h3>
              <p className="text-slate-400 leading-relaxed">
                Service och reparation av mindre båtmotorer. Vi diagnostiserar
                och åtgärdar fel snabbt så att du kan komma ut på vattnet igen.
              </p>
            </div>

            <div className="bg-slate-900 p-8 border-t-4 border-cyan-500">
              <div className="text-5xl mb-6">🔥</div>
              <h3 className="text-2xl font-black mb-3">Cinderella Toaletter</h3>
              <p className="text-slate-400 leading-relaxed">
                Försäljning, installation och service av Cinderella förbränningstoaletter.
                Vi är certifierade återförsäljare — perfekt för stugor och
                platser utan avlopp.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs font-black bg-cyan-500 text-slate-900 px-3 py-1 tracking-widest uppercase">
                  Certifierad återförsäljare
                </span>
                <span className="text-xs font-black bg-cyan-500 text-slate-900 px-3 py-1 tracking-widest uppercase">
                  Auktoriserad service
                </span>
              </div>
            </div>

            <div className="bg-slate-900 p-8 border-t-4 border-cyan-500">
              <div className="text-5xl mb-6">🚢</div>
              <h3 className="text-2xl font-black mb-3">Transportpråm</h3>
              <p className="text-slate-400 leading-relaxed">
                Vi har en lätt transportpråm med lastkapacitet på 900 kg och
                tillhörande utombordare. Hyrs ut självständigt eller med förare
                — perfekt för transporter i skärgården.
              </p>
            </div>

            <div className="bg-slate-900 p-8 border-t-4 border-cyan-500">
              <div className="text-5xl mb-6">🧭</div>
              <h3 className="text-2xl font-black mb-3">Kaptenstjänster</h3>
              <p className="text-slate-400 leading-relaxed">
                Behöver du en erfaren befälhavare? Vi erbjuder kaptenstjänster
                för kortare och längre uppdrag i skärgården.
              </p>
              <span className="inline-block mt-4 text-xs font-black bg-cyan-500 text-slate-900 px-3 py-1 tracking-widest uppercase">
                Fartygsbefäl Klass 8
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-cyan-400 font-bold tracking-widest text-sm mb-3 uppercase">Varför Svågrarna</p>
            <h2 className="text-5xl font-black mb-8">LOKALT ENGAGEMANG. PROFESSIONELLT UTFÖRANDE.</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Vi är uppvuxna i skärgården och känner vattnet utan och innan.
              Det är inte bara ett jobb för oss — det är en livsstil.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Med behörighet som Fartygsbefäl Klass 8, certifiering för Cinderella
              förbränningstoaletter och lång erfarenhet av allt från dykuppdrag
              till motorservice — vi är en partner du kan lita på i skärgården.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { num: "10+", label: "Års erfarenhet" },
              { num: "200+", label: "Slutförda uppdrag" },
              { num: "100%", label: "Nöjda kunder" },
              { num: "24/7", label: "Tillgängliga vid akuta ärenden" },
            ].map(({ num, label }) => (
              <div key={label} className="bg-slate-800 p-6 border-l-4 border-cyan-500">
                <div className="text-4xl font-black text-cyan-400 mb-1">{num}</div>
                <div className="text-sm text-slate-400 font-semibold uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="om-oss" className="bg-slate-800 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-cyan-400 font-bold tracking-widest text-sm mb-3 uppercase">Om oss</p>
          <h2 className="text-5xl font-black mb-8">VI ÄR SVÅGRARNA</h2>
          <p className="text-slate-400 text-xl leading-relaxed mb-6">
            Svågrarna startades av två svågrar med ett gemensamt intresse för havet
            och ett öga för kvalitet. Vi erbjuder ett brett utbud av tjänster i
            skärgården — med passion, precision och ett leende.
          </p>
          <p className="text-slate-400 text-xl leading-relaxed">
            Oavsett om du behöver en erfaren kapten, hjälp under vattenytan,
            service på din utombordare, en ny Cinderella-toalett till stugan
            eller en pråm för tunga transporter — vi har rätt kompetens och
            rätt inställning för jobbet.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="bg-cyan-500 py-24 px-6 text-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-4">REDO ATT KOMMA IGÅNG?</h2>
          <p className="text-slate-800 text-xl mb-10">
            Kontakta oss för en kostnadsfri offert. Vi svarar snabbt.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-left">
            <a
              href="tel:+46700000000"
              className="bg-slate-900 hover:bg-slate-800 text-white font-black text-lg px-8 py-5 transition-colors text-center"
            >
              📞 RING OSS
            </a>
            <a
              href="mailto:info@svagrarna.se"
              className="border-4 border-slate-900 hover:bg-slate-900 hover:text-white font-black text-lg px-8 py-5 transition-colors text-center"
            >
              ✉️ MAILA OSS
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8 px-6 text-center text-slate-500 text-sm">
        <p className="font-black text-white text-lg mb-1">SVÅGRARNA</p>
        <p>© {new Date().getFullYear()} Svågrarna. Alla rättigheter förbehållna.</p>
      </footer>

    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artiklar/valj-ratt-material-bojar-bryggor" element={<ArticleBojarBryggor />} />
    </Routes>
  );
}

export default App;
