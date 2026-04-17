import { useEffect } from "react";

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Välj rätt material för infästning av bojar och bryggor",
  "description": "Guide om hur du väljer rätt kätting, lina och infästningsmaterial för bojar och bryggor i Östersjön. Covering slitage, korrosion, servicebarhet och professionellt dykarbete.",
  "author": {
    "@type": "Person",
    "name": "Niklas Andersson",
    "url": "https://svagrarna.se"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Svågrarna",
    "url": "https://svagrarna.se"
  },
  "datePublished": "2026-04-10",
  "dateModified": "2026-04-10",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://svagrarna.se/artiklar/valjra-ratt-material-bojar-bryggor"
  },
  "keywords": "infästning bojar, bryggor Östersjön, kätting lina, dykinspektion, förankring skärgård",
  "inLanguage": "sv-SE"
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Hur ofta bör bryggor och bojar kontrolleras?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Minst en gång per säsong, och gärna efter kraftigt väder, vinter eller om anläggningen används mycket. I utsatta lägen kan tätare kontroller vara klokt."
      }
    },
    {
      "@type": "Question",
      "name": "Varför är dykinspektion bättre än kontroll från land?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Många skador och mycket slitage sitter under ytan och syns inte ovanifrån. En dykinspektion visar hur kätting, lina och bottenfästen faktiskt mår."
      }
    },
    {
      "@type": "Question",
      "name": "Är kätting alltid bättre än lina?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nej. Kätting är ofta bäst i utsatta och tungt belastade lägen, men starka sjunkande linor kan vara ett bra val där man vill minska metallslitage eller ha en mer flexibel lösning."
      }
    },
    {
      "@type": "Question",
      "name": "Vad är viktigast att kontrollera i en bojförankring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Slitage på kätting eller lina, schacklar, bojsten eller ankare, infästningspunkter och om anläggningen fortfarande ligger rätt i förhållande till djup och belastning."
      }
    },
    {
      "@type": "Question",
      "name": "Hur vet man om en förankring är för svag?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tecken kan vara ovanlig rörelse, att bojen driver, att bryggan rör sig mer än normalt eller att komponenter visar tydligt slitage vid besiktning."
      }
    },
    {
      "@type": "Question",
      "name": "Går det att byta bara en del av förankringen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, ofta. Om man upptäcker slitage i tid kan man byta enskilda delar i stället för att göra om hela anläggningen."
      }
    },
    {
      "@type": "Question",
      "name": "Vad skiljer Östersjön från andra vattenmiljöer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Östersjön innebär ofta grunt vatten, växlande nivåer, hårt väder och ibland is. Det ställer extra krav på slitstyrka, infästning och regelbundet underhåll."
      }
    },
    {
      "@type": "Question",
      "name": "När bör man boka ett dykuppdrag?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inför säsongsstart, efter stormar, efter vintern eller när man misstänker att något inte ligger rätt. Det är också klokt att boka vid planerad uppgradering eller ombyggnad."
      }
    }
  ]
};

export default function ArticleBojarBryggor() {
  useEffect(() => {
    const articleScript = document.createElement("script");
    articleScript.type = "application/ld+json";
    articleScript.id = "schema-article";
    articleScript.text = JSON.stringify(ARTICLE_SCHEMA);
    document.head.appendChild(articleScript);

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "schema-faq";
    faqScript.text = JSON.stringify(FAQ_SCHEMA);
    document.head.appendChild(faqScript);

    return () => {
      document.getElementById("schema-article")?.remove();
      document.getElementById("schema-faq")?.remove();
    };
  }, []);

  return (
    <div className="font-sans text-white bg-slate-900 min-h-screen">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-black tracking-tight text-white hover:text-cyan-400 transition-colors">
            SVÅGRARNA
          </a>
          <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide text-slate-300">
            <a href="/#tjanster" className="hover:text-cyan-400 transition-colors">TJÄNSTER</a>
            <a href="/#om-oss" className="hover:text-cyan-400 transition-colors">OM OSS</a>
            <a href="/#kontakt" className="hover:text-cyan-400 transition-colors">KONTAKT</a>
          </div>
          <a
            href="/#kontakt"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-black text-sm px-5 py-2 transition-colors"
          >
            KONTAKTA OSS
          </a>
        </div>
      </nav>

      {/* Article hero */}
      <header
        className="pt-32 pb-16 px-6 text-center"
        style={{ background: "linear-gradient(to bottom, #0f172a 0%, #0c2340 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-cyan-400 font-bold tracking-widest text-sm mb-4 uppercase">
            Bryggor &amp; Bojar
          </p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Välj rätt material för infästning av bojar och bryggor
          </h1>
          <div className="flex items-center justify-center gap-4 text-slate-400 text-sm">
            <span>Av <strong className="text-slate-200">Niklas Andersson</strong></span>
            <span>·</span>
            <time dateTime="2026-04-10">10 april 2026</time>
          </div>
        </div>
      </header>

      {/* Article body */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <article>

          <p className="text-xl text-slate-300 leading-relaxed mb-10">
            Att välja rätt material för infästning och förtöjning av bojar och bryggor är avgörande för
            både säkerhet, livslängd och drift. I Östersjön ställs anläggningar ofta inför hård vind,
            varierande vattenstånd, vågor och ibland is, vilket gör att varje detalj i förankringen
            måste tåla mer än man först tror.
          </p>
          <p className="text-slate-400 leading-relaxed mb-12">
            Vi arbetar med dykuppdrag för bryggor och bojar där fokus ligger på inspektion, underhåll
            och rätt materialval för den verkliga miljön under ytan. Målet är att skapa lösningar som
            håller över tid, går att serva och fungerar i praktiken.
          </p>

          <section aria-labelledby="varfor-materialval">
            <h2 id="varfor-materialval" className="text-3xl font-black mb-4 text-white">
              Därför är materialvalet så viktigt
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              En förankring kan se stabil ut ovanifrån men ändå vara svag där den belastas mest: vid
              botten, i kopplingar eller i övergången mellan olika material. Det är där slitage, korrosion
              och rörelser ofta uppstår först.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">Om fel material används kan resultatet bli:</p>
            <ul className="list-disc list-inside text-slate-400 space-y-1 mb-6 ml-2">
              <li>snabbare nötning</li>
              <li>sämre hållfasthet</li>
              <li>kortare livslängd</li>
              <li>högre servicekostnader</li>
              <li>risk för att boj eller brygga släpper</li>
            </ul>
            <p className="text-slate-400 leading-relaxed mb-12">
              Det som är rätt material på en skyddad plats är inte alltid rätt i ett utsatt skärgårdsläge.
              Därför måste varje anläggning bedömas utifrån sina faktiska förutsättningar.
            </p>
          </section>

          <section aria-labelledby="katting-eller-lina">
            <h2 id="katting-eller-lina" className="text-3xl font-black mb-4 text-white">
              Kätting eller lina?
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              För bojar och bryggor i Östersjön är kätting ofta det mest robusta alternativet där
              belastningen är hög. Kätting ger vikt, stabilitet och god ryckdämpning, och den ligger
              stadigt mot botten. Det gör den väl beprövad i miljöer där slitaget är stort.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Samtidigt finns det moderna linlösningar som kan vara mycket starka och praktiska i rätt
              sammanhang. En sjunkande bojlina kan vara ett bra alternativ när man vill minska
              metallslitage, förenkla hantering eller skapa en mer flexibel förankring. I många fall är
              en kombinationslösning det bästa, där kätting och lina används där de gör mest nytta.
            </p>
            <p className="text-slate-400 leading-relaxed mb-12">
              Det viktiga är alltså inte att alltid välja samma material, utan att välja rätt material
              för rätt del av konstruktionen.
            </p>
          </section>

          <section aria-labelledby="vad-passar-bast">
            <h2 id="vad-passar-bast" className="text-3xl font-black mb-4 text-white">
              Vad passar bäst för olika delar?
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Olika delar av en boj- eller bryggförankring har olika krav. Därför bör man inte tänka
              på hela systemet som ett enda materialval, utan som flera komponenter med olika uppgifter.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-800 p-6 border-t-4 border-cyan-500">
                <h3 className="text-lg font-black mb-3 text-white">Kätting passar ofta bäst när:</h3>
                <ul className="list-disc list-inside text-slate-400 space-y-1 ml-1">
                  <li>anläggningen är utsatt för hård belastning</li>
                  <li>man vill ha vikt och stabilitet nära botten</li>
                  <li>ryck och rörelser behöver dämpas</li>
                  <li>slitstyrka är viktigare än låg vikt</li>
                </ul>
              </div>
              <div className="bg-slate-800 p-6 border-t-4 border-cyan-500">
                <h3 className="text-lg font-black mb-3 text-white">Lina passar ofta bäst när:</h3>
                <ul className="list-disc list-inside text-slate-400 space-y-1 ml-1">
                  <li>man vill minska metallkomponenter</li>
                  <li>hanteringen ska vara smidigare</li>
                  <li>konstruktionen är anpassad för sjunkande material</li>
                  <li>man vill undvika slitage från hårda kopplingar</li>
                </ul>
              </div>
            </div>
          </section>

          <section aria-labelledby="ostersjon">
            <h2 id="ostersjon" className="text-3xl font-black mb-4 text-white">
              Östersjön kräver extra omtanke
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Östersjön är en speciell miljö. Här kombineras ofta grunt vatten, växlande nivåer, hårt
              väder och ibland isbildning under vintern. Det gör att infästningar måste tåla både statisk
              belastning och återkommande rörelser.
            </p>
            <p className="text-slate-400 leading-relaxed mb-12">
              Ett vanligt misstag är att bara titta på hållfasthet i teorin. I verkligheten är det
              ofta rörelse, nötning och långvarig exponering som avgör livslängden. Därför är det viktigt
              att materialvalet också tar hänsyn till hur anläggningen faktiskt kommer att användas.
            </p>
          </section>

          <section aria-labelledby="best-practices">
            <h2 id="best-practices" className="text-3xl font-black mb-4 text-white">
              Best practices för infästning
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              En bra infästning ska vara stark, inspekterbar och anpassad för platsen. Den ska inte bara
              hålla för belastningen, utan också gå att underhålla och byta delar på utan att hela
              systemet behöver göras om.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">Vi rekommenderar att man utgår från följande principer:</p>
            <ul className="list-disc list-inside text-slate-400 space-y-2 mb-6 ml-2">
              <li>Förankringen ska anpassas efter djup, botten och exponering</li>
              <li>Belastningen ska fördelas så att ingen enskild del blir svag punkt</li>
              <li>Materialen ska fungera bra tillsammans och inte skapa onödigt slitage</li>
              <li>Delar som slits snabbt ska vara lätta att byta</li>
              <li>Konstruktionen ska kunna kontrolleras regelbundet av dykare</li>
            </ul>
            <p className="text-slate-400 leading-relaxed mb-12">
              För bryggor handlar det ofta om att skapa en stabil men rörlig lösning som klarar
              vattenståndsvariationer. För bojar handlar det om att hålla rätt läge och samtidigt tåla
              drag, ryck och väder utan att överbelastas.
            </p>
          </section>

          <section aria-labelledby="valja-ratt-losning">
            <h2 id="valja-ratt-losning" className="text-3xl font-black mb-4 text-white">
              Hur man väljer rätt lösning
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Det finns ingen standardlösning som fungerar överallt. Ett skyddat läge i en vik kräver
              något helt annat än en utsatt plats i öppnare skärgård.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">När vi bedömer materialvalet tittar vi bland annat på:</p>
            <ul className="list-disc list-inside text-slate-400 space-y-1 mb-6 ml-2">
              <li>vattendjup</li>
              <li>bottenmaterial</li>
              <li>vågexponering</li>
              <li>vattenståndsvariationer</li>
              <li>isförhållanden</li>
              <li>användning och belastning</li>
              <li>hur ofta anläggningen ska servas</li>
            </ul>
            <p className="text-slate-400 leading-relaxed mb-12">
              I vissa fall är kätting rätt hela vägen. I andra fall är en stark lina bättre. Ofta är
              den bästa lösningen en kombination, där varje del av förankringen får det material som
              passar just där.
            </p>
          </section>

          <section aria-labelledby="service-underhall">
            <h2 id="service-underhall" className="text-3xl font-black mb-4 text-white">
              Service och underhåll
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Även den bästa lösningen behöver kontrolleras. Många problem upptäcks först när man dyker
              ner och ser hur förankringen faktiskt mår efter en säsong eller två. Därför är regelbunden
              service viktig, särskilt efter hårt väder, vinter eller förändringar i användning.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">Vid service kan vi:</p>
            <ul className="list-disc list-inside text-slate-400 space-y-1 mb-6 ml-2">
              <li>kontrollera slitage på kätting och lina</li>
              <li>bedöma infästningens skick</li>
              <li>kontrollera schacklar, öglor och kopplingar</li>
              <li>byta slitna delar</li>
              <li>dokumentera status</li>
              <li>ge rekommendationer för nästa steg</li>
            </ul>
            <p className="text-slate-400 leading-relaxed mb-12">
              Det är nästan alltid billigare att åtgärda ett begynnande problem i tid än att hantera
              ett haveri efter att en boj eller brygga släppt.
            </p>
          </section>

          <section aria-labelledby="nar-boka-dykinspektion">
            <h2 id="nar-boka-dykinspektion" className="text-3xl font-black mb-4 text-white">
              När bör man boka dykinspektion?
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">Det är klokt att boka inspektion:</p>
            <ul className="list-disc list-inside text-slate-400 space-y-1 mb-6 ml-2">
              <li>inför säsongsstart</li>
              <li>efter storm eller kraftigt väder</li>
              <li>efter vintern</li>
              <li>när anläggningen rör sig mer än normalt</li>
              <li>när man misstänker slitage eller korrosion</li>
              <li>vid planerad ombyggnad eller nyinstallation</li>
            </ul>
            <p className="text-slate-400 leading-relaxed mb-12">
              Ju tidigare man upptäcker ett problem, desto enklare och billigare är det att lösa.
            </p>
          </section>

          <section aria-labelledby="fordelar-dykarbete">
            <h2 id="fordelar-dykarbete" className="text-3xl font-black mb-4 text-white">
              Fördelar med professionellt dykarbete
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Att anlita dykare för inspektion och service av bojar och bryggor ger en tydlig bild av
              vad som faktiskt händer under ytan. Det minskar risken för felbedömningar och gör det
              lättare att välja rätt material från början.
            </p>
            <ul className="list-disc list-inside text-slate-400 space-y-1 mb-12 ml-2">
              <li>säkrare anläggningar</li>
              <li>längre livslängd</li>
              <li>färre akuta driftstopp</li>
              <li>bättre planering av underhåll</li>
              <li>rätt materialval för varje plats</li>
            </ul>
          </section>

          {/* Summary */}
          <div className="bg-slate-800 border-l-4 border-cyan-500 p-8 mb-16">
            <h2 className="text-2xl font-black mb-4 text-white">Sammanfattning</h2>
            <p className="text-slate-300 leading-relaxed">
              När du ska välja material för infästning eller förtöjning av bojar och bryggor handlar det
              om mer än att välja kätting eller lina. Det handlar om att välja rätt lösning för rätt
              miljö, rätt belastning och rätt livslängd. I Östersjön är det extra viktigt att tänka på
              slitstyrka, rörelse, bottenförhållanden och servicebarhet.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              Kätting är ofta bäst i utsatta och tungt belastade lägen, medan starka sjunkande linor
              kan vara ett bättre alternativ i andra konstruktioner. Den bästa lösningen är den som är
              anpassad till platsen och går att underhålla över tid.
            </p>
          </div>

          {/* FAQ */}
          <section aria-labelledby="faq">
            <h2 id="faq" className="text-3xl font-black mb-8 text-white">Vanliga frågor</h2>
            <dl className="space-y-6">
              {[
                {
                  q: "Hur ofta bör bryggor och bojar kontrolleras?",
                  a: "Minst en gång per säsong, och gärna efter kraftigt väder, vinter eller om anläggningen används mycket. I utsatta lägen kan tätare kontroller vara klokt."
                },
                {
                  q: "Varför är dykinspektion bättre än kontroll från land?",
                  a: "Många skador och mycket slitage sitter under ytan och syns inte ovanifrån. En dykinspektion visar hur kätting, lina och bottenfästen faktiskt mår."
                },
                {
                  q: "Är kätting alltid bättre än lina?",
                  a: "Nej. Kätting är ofta bäst i utsatta och tungt belastade lägen, men starka sjunkande linor kan vara ett bra val där man vill minska metallslitage eller ha en mer flexibel lösning."
                },
                {
                  q: "Vad är viktigast att kontrollera i en bojförankring?",
                  a: "Slitage på kätting eller lina, schacklar, bojsten eller ankare, infästningspunkter och om anläggningen fortfarande ligger rätt i förhållande till djup och belastning."
                },
                {
                  q: "Hur vet man om en förankring är för svag?",
                  a: "Tecken kan vara ovanlig rörelse, att bojen driver, att bryggan rör sig mer än normalt eller att komponenter visar tydligt slitage vid besiktning."
                },
                {
                  q: "Går det att byta bara en del av förankringen?",
                  a: "Ja, ofta. Om man upptäcker slitage i tid kan man byta enskilda delar i stället för att göra om hela anläggningen."
                },
                {
                  q: "Vad skiljer Östersjön från andra vattenmiljöer?",
                  a: "Östersjön innebär ofta grunt vatten, växlande nivåer, hårt väder och ibland is. Det ställer extra krav på slitstyrka, infästning och regelbundet underhåll."
                },
                {
                  q: "När bör man boka ett dykuppdrag?",
                  a: "Inför säsongsstart, efter stormar, efter vintern eller när man misstänker att något inte ligger rätt. Det är också klokt att boka vid planerad uppgradering eller ombyggnad."
                }
              ].map(({ q, a }) => (
                <div key={q} className="border-b border-slate-700 pb-6">
                  <dt className="text-lg font-black text-white mb-2">{q}</dt>
                  <dd className="text-slate-400 leading-relaxed">{a}</dd>
                </div>
              ))}
            </dl>
          </section>

        </article>

        {/* CTA */}
        <div className="mt-16 bg-cyan-500 p-10 text-slate-900 text-center">
          <h2 className="text-3xl font-black mb-3">Behöver du hjälp med bojar eller bryggor?</h2>
          <p className="text-slate-800 mb-6">Vi utför dykinspektion och service i skärgården. Kontakta oss för en kostnadsfri offert.</p>
          <a
            href="/#kontakt"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-black text-lg px-8 py-4 transition-colors"
          >
            KONTAKTA OSS
          </a>
        </div>

        {/* Author bio */}
        <footer className="mt-16 border-t border-slate-700 pt-10">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center text-slate-900 font-black text-xl shrink-0">
              NA
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-1">Författare</p>
              <h3 className="text-xl font-black text-white mb-2">Niklas Andersson</h3>
              <p className="text-slate-400 leading-relaxed">
                Niklas är en av grundarna av Svågrarna och har arbetat med bryggor, bojar och
                dykuppdrag i Östersjön i över tio år. Med behörighet som Fartygsbefäl Klass 8 och
                bred erfarenhet av förankringssystem i skärgårdsmiljö delar han praktisk kunskap
                om vad som faktiskt håller under ytan.
              </p>
            </div>
          </div>
        </footer>

      </main>

      {/* Footer */}
      <div className="bg-slate-900 border-t border-slate-700 py-8 px-6 text-center text-slate-500 text-sm">
        <p className="font-black text-white text-lg mb-1">SVÅGRARNA</p>
        <p>© {new Date().getFullYear()} Svågrarna. Alla rättigheter förbehållna.</p>
      </div>

    </div>
  );
}
