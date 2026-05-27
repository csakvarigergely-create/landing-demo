import Image from "next/image";
import { Header } from "@/components/Header";
import { LeadForm } from "@/components/LeadForm";
import { ChatAssistant } from "@/components/ChatAssistant";
import { Icon } from "@/components/Icon";
import { benefits, services, stats, testimonials, trustItems } from "@/lib/content";

const serviceIcons = ["snow", "spark", "tool", "home", "factory"] as const;

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="relative overflow-hidden bg-soft">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(11,167,165,0.16),transparent_34%),radial-gradient(circle_at_88%_12%,rgba(36,94,159,0.12),transparent_30%)]" />
          <div className="container-grid relative min-h-[calc(100vh-76px)] items-center py-16 lg:grid-cols-[0.92fr_1.08fr] lg:py-24">
            <div className="max-w-3xl">
              <p className="eyebrow">Győr és környéke</p>
              <h1 className="heading-xl">Klímaszerelés gyors kivitelezéssel — akár 24 órán belül</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted md:text-xl">
                Modern hűtés-fűtés megoldások lakossági és üzleti ügyfeleknek. Ingyenes felmérés,
                garanciás telepítés, gyors kiszállás.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#ajanlat" className="btn-primary min-h-[52px] px-6">
                  Ingyenes ajánlatkérés
                </a>
                <a href="#ajanlat" className="btn-secondary min-h-[52px] px-6">
                  Visszahívást kérek
                </a>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item} className="rounded-2xl border border-line bg-white/78 p-4 shadow-soft backdrop-blur">
                    <strong className="text-ink">{item}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-12 lg:mt-0">
              <div className="absolute -left-5 top-12 z-10 rounded-2xl border border-white/60 bg-white/82 p-4 shadow-lift backdrop-blur">
                <strong className="block text-2xl text-ink">4.9★</strong>
                <span className="text-sm text-muted">ügyfélértékelés</span>
              </div>
              <div className="absolute -right-2 bottom-12 z-10 rounded-2xl border border-white/60 bg-white/86 p-4 shadow-lift backdrop-blur">
                <strong className="block text-2xl text-ink">5 év</strong>
                <span className="text-sm text-muted">garancia</span>
              </div>
              <Image
                src="/assets/klima-hero-premium.png"
                alt="Klímaszerelő modern lakásban beltéri egységet ellenőriz"
                width={1100}
                height={760}
                priority
                className="rounded-[2rem] object-cover shadow-lift"
              />
            </div>
          </div>
        </section>

        <section className="container-wrap -mt-8 relative z-10">
          <div className="grid overflow-hidden rounded-2xl border border-line bg-white shadow-soft md:grid-cols-5">
            {trustItems.map((item, index) => (
              <article key={item.title} className="border-line p-5 md:border-r md:last:border-r-0">
                <Icon name={index === 0 ? "clock" : index === 1 ? "shield" : index === 2 ? "spark" : index === 3 ? "snow" : "factory"} className="mb-4 h-6 w-6 text-aqua" />
                <h3 className="font-black text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="szolgaltatasok" className="container-section">
          <div className="section-head">
            <div>
              <p className="eyebrow">Szolgáltatások</p>
              <h2 className="heading-lg">Klímás munkák egy helyről</h2>
            </div>
            <a href="#ajanlat" className="text-link">
              Ingyenes ajánlatkérés
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {services.map((service, index) => (
              <article key={service.title} className="card group">
                <Icon name={serviceIcons[index]} className="mb-6 h-7 w-7 text-aqua transition group-hover:scale-110" />
                <h3 className="text-xl font-black text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="bizalom" className="bg-navy text-white">
          <div className="container-grid items-center py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
            <div>
              <p className="eyebrow text-cyan-100">Miért minket?</p>
              <h2 className="heading-lg">Miért választanak minket ügyfeleink?</h2>
              <p className="mt-5 text-lg text-white/72">
                Nem bonyolítjuk túl. Elmondjuk, mikor érkezünk, mit javaslunk, mennyibe kerül, és mit kapsz a végén.
              </p>
              <a href="#ajanlat" className="btn-light mt-8">
                Visszahívást kérek
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item} className="rounded-2xl border border-white/12 bg-white/8 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/12">
                  <Icon name="shield" className="mb-4 h-6 w-6 text-cyan-100" />
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-section">
          <div className="section-grid items-center">
            <Image
              src="/assets/klima-outdoor-work.png"
              alt="Klímaszerelők kültéri egységet szerelnek"
              width={1000}
              height={700}
              className="rounded-[1.75rem] object-cover shadow-lift"
            />
            <div>
              <p className="eyebrow">Munka közben</p>
              <h2 className="heading-lg">Valódi szerelés, nem bemutatótermi kép.</h2>
              <p className="mt-5 text-lg text-muted">
                Beltéri egység, kültéri egység, csövezés, tisztítás, karbantartás. Olyan lakásokban
                dolgozunk, ahol fontos a rend és a pontos átadás.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Kültéri egység", "Tiszta munkaterület", "Számlás átadás"].map((item) => (
                  <span key={item} className="pill">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="velemenyek" className="container-section">
          <div className="section-head">
            <div>
              <p className="eyebrow">Ügyfélvélemények</p>
              <h2 className="heading-lg">4.9★ Google értékelés</h2>
            </div>
            <div className="rounded-2xl border border-line bg-white p-4 shadow-soft">
              <strong className="text-2xl text-ink">127+</strong>
              <p className="text-sm text-muted">értékelés Győrből és környékéről</p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="card">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-aqua to-blue font-black text-white">
                    {item.name.charAt(0)}
                  </span>
                  <div>
                    <strong>{item.name}</strong>
                    <p className="text-sm text-muted">{item.city}</p>
                  </div>
                </div>
                <p className="mt-4 text-amber-500">★★★★★</p>
                <p className="mt-3 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <ChatAssistant />

        <section id="ajanlat" className="container-section">
          <div className="grid items-start gap-10 rounded-[2rem] bg-navy p-6 text-white shadow-lift lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
            <div>
              <p className="eyebrow text-cyan-100">Ajánlatkérés</p>
              <h2 className="heading-lg">Kérjen ingyenes ajánlatot még ma</h2>
              <p className="mt-5 text-lg text-white/72">
                Pár perc alatt felvesszük Önnel a kapcsolatot. Írja meg a települést, a feladatot,
                és visszahívjuk.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {["Ingyenes felmérés", "Gyors kiszállás", "Garanciás telepítés"].map((item) => (
                  <span key={item} className="rounded-xl border border-white/14 bg-white/8 px-3 py-2 text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <LeadForm />
          </div>
        </section>
      </main>

      <aside className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-2 rounded-2xl border border-line bg-white/92 p-2 shadow-lift backdrop-blur md:hidden">
        <a className="btn-secondary" href="tel:+36701234567">
          Hívás
        </a>
        <a className="btn-primary" href="#ajanlat">
          Ajánlatkérés
        </a>
      </aside>

      <footer className="bg-navy text-white">
        <div className="container-grid py-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <strong className="text-xl">Klíma Komfort</strong>
            <p className="mt-4 max-w-sm text-white/68">
              Klímaszerelés, tisztítás és karbantartás Győrben és környékén. Korrekt árak,
              tiszta munka, garanciás átadás.
            </p>
          </div>
          <div className="footer-list">
            <strong>Elérhetőség</strong>
            <a href="tel:+36701234567">+36 70 123 4567</a>
            <a href="mailto:info@klimakomfort.hu">info@klimakomfort.hu</a>
          </div>
          <div className="footer-list">
            <strong>Területek</strong>
            <span>Győr</span>
            <span>Győrújbarát</span>
            <span>Vámosszabadi</span>
          </div>
          <div className="footer-list">
            <strong>Linkek</strong>
            <a href="#szolgaltatasok">Szolgáltatások</a>
            <a href="#ajanlat">Ajánlatkérés</a>
            <a href="#velemenyek">Vélemények</a>
          </div>
        </div>
        <div className="container-wrap border-t border-white/10 py-6 text-sm text-white/56">
          © 2026 Klíma Komfort. Minden jog fenntartva.
        </div>
      </footer>
    </>
  );
}
