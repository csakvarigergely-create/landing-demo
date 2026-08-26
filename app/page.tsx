import Image from "next/image";
import { Header } from "@/components/Header";
import { LeadForm } from "@/components/LeadForm";
import { ChatAssistant } from "@/components/ChatAssistant";
import { Icon } from "@/components/Icon";
import { benefits, services, testimonials, trustItems } from "@/lib/content";

const serviceIcons = ["snow", "spark", "tool", "home", "factory"] as const;

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="relative overflow-hidden bg-[#eef5f7]">
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(245,248,249,0.98)_0%,rgba(245,248,249,0.9)_44%,rgba(245,248,249,0.28)_100%)]" />
          <div className="container-grid relative items-center py-14 lg:min-h-[720px] lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
            <div className="max-w-3xl">
              <div className="mb-6 border-l-2 border-aqua pl-4 text-sm font-black uppercase tracking-[0.14em] text-aqua">
                KlímaPont Győr · 24 órán belüli kapcsolatfelvétel
              </div>
              <h1 className="heading-xl">Klímaszerelés Győrben, előre egyeztetett árral és garanciával</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted md:text-xl">
                Telepítést, tisztítást és karbantartást vállalunk Győrben és 30 km-es körzetében. A helyszíni felmérés ingyenes, az árat és az időpontot pedig előre egyeztetjük.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#ajanlat" className="btn-primary min-h-[56px] px-7 text-base">
                  Ingyenes felmérést kérek
                </a>
                <a
                  href="tel:+36701234567"
                  className="inline-flex min-h-[56px] items-center justify-center rounded-xl border-2 border-navy bg-white px-6 font-black text-navy shadow-soft transition duration-300 ease-premium hover:-translate-y-0.5 hover:border-aqua hover:text-aqua"
                >
                  +36 70 123 4567
                </a>
              </div>

              <div className="mt-9 grid max-w-2xl gap-4 border-y border-line py-5 text-sm font-bold text-ink sm:grid-cols-3">
                <span>500+ telepítés</span>
                <span>4.9★ Google értékelés</span>
                <span>5 év garancia</span>
              </div>
            </div>

            <div className="relative mt-10 lg:-mr-10 lg:mt-0">
              <div className="relative">
                <div className="absolute -right-5 bottom-5 top-12 hidden w-[88%] bg-navy lg:block" />
                <Image
                  src="/assets/klima-hero-real-hvac.png"
                  alt="Klímaszerelők beltéri egységet szerelnek egy győri otthonban"
                  width={1100}
                  height={760}
                  priority
                  className="relative z-10 ml-auto aspect-[4/3] w-full rounded-[1.25rem] object-cover shadow-lift lg:w-[94%]"
                />
              </div>
              <div className="relative z-20 ml-auto mt-7 max-w-xl rounded-r-xl border-l-2 border-aqua bg-white px-5 py-4 text-sm font-bold leading-6 text-ink lg:mr-8">
                Beltéri egység szerelés, takarófólia, saját szerszámok. Nem bemutatótermi kép, hanem olyan munkakörnyezet,
                amivel egy átlagos győri otthonban is számolhatsz.
              </div>
            </div>
          </div>
        </section>

        <section className="container-wrap relative z-10 py-8 lg:py-10">
          <div className="grid border-y border-line py-7 md:grid-cols-5">
            {trustItems.map((item, index) => (
              <article key={item.title} className="px-0 py-4 md:px-5 md:py-0">
                <Icon
                  name={index === 0 ? "clock" : index === 1 ? "shield" : index === 2 ? "spark" : index === 3 ? "snow" : "factory"}
                  className="mb-4 h-5 w-5 text-aqua"
                />
                <h3 className="font-black text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="szolgaltatasok" className="container-section lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow">Szolgáltatások</p>
              <h2 className="heading-lg">Amit ténylegesen vállalunk</h2>
              <p className="mt-5 max-w-md text-lg leading-8 text-muted">
                Nem az a célunk, hogy mindenáron a legdrágább készüléket adjuk el. Megnézzük a helyszínt, átbeszéljük, mire van szükséged, és olyan megoldást javaslunk, amit az adott helyre mi is jó szívvel választanánk.
              </p>
              <a href="#ajanlat" className="btn-primary mt-8">
              Gyors árajánlat
              </a>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {services.map((service, index) => {
              const iconName = serviceIcons[index] ?? "snow";

              return (
                <article key={service.title} className="group grid gap-5 py-7 sm:grid-cols-[3rem_1fr]">
                  <Icon name={iconName} className="h-7 w-7 text-aqua transition duration-300 ease-premium group-hover:translate-x-1" />
                  <div className="grid gap-3 md:grid-cols-[0.65fr_1fr] md:items-start">
                    <h3 className="text-2xl font-black leading-tight text-ink">{service.title}</h3>
                    <p className="leading-7 text-muted">{service.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
          </div>
        </section>

        <section id="bizalom" className="relative overflow-hidden bg-navy text-white">
          <div className="pointer-events-none absolute -right-8 top-8 hidden text-[13rem] font-black leading-none text-white/5 lg:block">
            500+
          </div>
          <div className="container-grid items-center py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
            <div>
              <p className="eyebrow text-cyan-100">Miért minket?</p>
              <h2 className="heading-lg">Korrekt szakembert keresel, nem hangzatos ígéreteket.</h2>
              <p className="mt-5 text-lg text-white/72">
                Elmondjuk, mikor tudunk menni, mennyibe kerülhet, és mire kell figyelni a helyszínen.
                Ha csúszás van, szólunk. Ha olcsóbb megoldás is elég, azt mondjuk.
              </p>
              <a href="#ajanlat" className="btn-light mt-8">
                Visszahívást kérek
              </a>
            </div>
            <div className="border-y border-white/14">
              {benefits.map((item, index) => (
                <div key={item} className="grid grid-cols-[3rem_1fr] gap-5 border-b border-white/10 py-6 last:border-b-0">
                  <span className="text-sm font-black text-cyan-100">{String(index + 1).padStart(2, "0")}</span>
                  <strong className="text-xl leading-7">{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-section">
          <div className="grid items-center gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:gap-16">
            <figure className="grid gap-5">
              <Image
                src="/assets/klima-outdoor-real-install.png"
                alt="Klímaszerelők kültéri egységet telepítenek családi háznál, szerelőautóval és szerszámokkal"
                width={1000}
                height={700}
                className="aspect-[5/3] rounded-[1.5rem] object-cover"
              />
              <figcaption className="max-w-2xl border-l-2 border-aqua pl-5 text-sm font-bold leading-6 text-muted">
                Kültéri egység telepítés családi háznál, saját szerszámokkal és rendezett munkaterülettel.
                A cél az, hogy a rendszer ne csak működjön, hanem tisztán és átgondoltan legyen átadva.
              </figcaption>
            </figure>
            <div className="max-w-xl lg:pl-2">
              <p className="eyebrow">Helyszíni munka</p>
              <h2 className="heading-lg">Nem katalóguskép. Ilyen egy átlagos szerelési nap.</h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Szerelő autóval érkezünk, szerszámokkal, takarófóliával és porszívóval. Kültéri egység,
                beltéri egység, csövezés, tisztítás: minden munkánál figyelünk a rendre.
              </p>
              <div className="mt-8 grid gap-3 border-l-2 border-line pl-5">
                {["Cipővédő használat", "Pormentes fúrás", "Rendezett átadás"].map((item) => (
                  <span key={item} className="text-sm font-black text-ink">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="velemenyek" className="container-section">
          <div className="section-head">
            <div>
              <p className="eyebrow">Ügyfélvélemények</p>
              <h2 className="heading-lg">Nem reklámszöveg. Ezt emelik ki az ügyfelek.</h2>
            </div>
            <div className="border-l-2 border-aqua pl-5">
              <strong className="text-2xl text-ink">4.9★</strong>
              <p className="text-sm text-muted">Google értékelés, 127+ visszajelzés</p>
            </div>
          </div>
          <div className="grid gap-8 border-y border-line py-8 md:grid-cols-[1.25fr_0.9fr_0.9fr]">
            {testimonials.map((item, index) => (
              <article key={item.name} className={index === 0 ? "pr-4 md:pr-8" : "pr-4"}>
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-navy font-black text-white">
                    {item.name.charAt(0)}
                  </span>
                  <div>
                    <strong>{item.name}</strong>
                    <p className="text-sm text-muted">{item.city}</p>
                  </div>
                </div>
                <p className="mt-4 text-amber-500">★★★★★</p>
                <p className={index === 0 ? "mt-3 text-lg leading-8 text-ink" : "mt-3 text-muted"}>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <ChatAssistant />

        <section id="ajanlat" className="bg-navy text-white">
          <div className="container-grid items-start py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
            <div>
              <p className="eyebrow text-cyan-100">Ajánlatkérés</p>
              <h2 className="heading-lg">Kérj gyors árajánlatot vagy visszahívást</h2>
              <p className="mt-5 text-lg text-white/72">
                Írd meg a települést és a munkát. 24 órán belül felvesszük veled a kapcsolatot,
                és ha kell, egyeztetünk egy helyszíni felmérést.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {["Ingyenes felmérés", "24 órás kapcsolatfelvétel", "5 év garancia"].map((item) => (
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
          Gyors árajánlat
        </a>
      </aside>

      <footer className="bg-navy text-white">
        <div className="container-wrap py-12 lg:py-14">
          <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.05fr_1.35fr] lg:gap-16">
            <div>
              <strong className="block text-2xl font-black">KlímaPont Győr Kft.</strong>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/68">
                Klíma telepítés, tisztítás és karbantartás Győrben és 30 km-es körzetben. Előre egyeztetett időpont, tiszta munkavégzés, garanciás átadás.
              </p>
              <div className="mt-7 grid gap-2 text-sm">
                <a className="text-lg font-black text-white transition hover:text-cyan-100" href="tel:+36701234567">+36 70 123 4567</a>
                <a className="text-white/72 transition hover:text-cyan-100" href="mailto:info@klimapontgyor.hu">info@klimapontgyor.hu</a>
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="footer-list">
                <strong>Nyitvatartás</strong>
                <span>Hétfő - Péntek: 8:00 - 17:00</span>
                <span>Szombat: egyeztetéssel</span>
                <span>Vasárnap: zárva</span>
              </div>
              <div className="footer-list">
                <strong>Terület</strong>
                <span>Győr</span>
                <span>Győrújbarát, Abda</span>
                <span>Nyúl, Vámosszabadi</span>
                <span>Pannonhalma környéke</span>
              </div>
              <div className="footer-list">
                <strong>Cégadatok</strong>
                <span>Adószám: 12345678-2-08</span>
                <span>9024 Győr, Minta utca 12.</span>
                <a href="#">Impresszum</a>
                <a href="#">Adatkezelési tájékoztató</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-6 text-sm text-white/52 md:flex-row md:items-center md:justify-between">
            <span>© 2026 KlímaPont Győr Kft. Minden jog fenntartva.</span>
            <span>Válaszidő ajánlatkérésre: általában 24 órán belül.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
