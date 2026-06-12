import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Star, Coffee, Cake, Wine, GlassWater } from "lucide-react";

import hero from "@/assets/hero.jpg";
import aboutAsset from "@/assets/bistro-zahradka.jpg.asset.json";
const about = aboutAsset.url;
import menuSavory from "@/assets/menu-savory.jpg";
import menuSweet from "@/assets/menu-sweet.jpg";
import menuDrinks from "@/assets/menu-drinks.jpg";
import menuWine from "@/assets/menu-wine.jpg";
import gallery1Asset from "@/assets/vege-talir.jpg.asset.json";
import gallery2Asset from "@/assets/toast.jpg.asset.json";
import gallery3Asset from "@/assets/budova.jpg.asset.json";
import gallery4Asset from "@/assets/polevka.jpg.asset.json";
const gallery1 = gallery1Asset.url;
const gallery2 = gallery2Asset.url;
const gallery3 = gallery3Asset.url;
const gallery4 = gallery4Asset.url;
import smallLogo from "@/assets/logo.png";
import logoAsset from "@/assets/okruh-logo.png.asset.json";
const logo = logoAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bistro Okruh — Specialty káva, dobré jídlo a příjemná atmosféra" },
      { name: "description", content: "Bistro Okruh — specialty káva, sladké i slané dobroty z kvalitních surovin, domácí limonády, šejky, víno a pivo. Místo, kam se budete vracet." },
      { property: "og:title", content: "Bistro Okruh" },
      { property: "og:description", content: "Specialty káva, domácí dobroty a útulná atmosféra." },
      { property: "og:image", content: hero },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const navItems = [
  { label: "O nás", href: "#o-nas" },
  { label: "Menu", href: "#menu" },
  { label: "Galerie", href: "#galerie" },
  { label: "Recenze", href: "#recenze" },
  { label: "Kontakt", href: "#kontakt" },
];

const menuCategories = [
  {
    icon: Coffee,
    title: "Specialty káva",
    desc: "Pečlivě vybraná zrna od malých pražíren. Espresso, flat white, filtr.",
    image: menuDrinks,
    items: [
      { name: "Espresso", price: "55 Kč" },
      { name: "Flat White", price: "85 Kč" },
      { name: "Filtr V60", price: "95 Kč" },
      { name: "Cappuccino", price: "75 Kč" },
    ],
  },
  {
    icon: Cake,
    title: "Sladké dobroty",
    desc: "Domácí cheesecaky, koláče a dezerty z poctivých surovin.",
    image: menuSweet,
    items: [
      { name: "Cheesecake s lesním ovocem", price: "120 Kč" },
      { name: "Mrkvový dort", price: "110 Kč" },
      { name: "Domácí brownie", price: "95 Kč" },
      { name: "Croissant s mandlemi", price: "75 Kč" },
    ],
  },
  {
    icon: GlassWater,
    title: "Slané menu",
    desc: "Brunch, otevřené chleby a sezónní pokrmy s láskou.",
    image: menuSavory,
    items: [
      { name: "Avokádový toast s vejcem", price: "195 Kč" },
      { name: "Vajíčková omeleta s bylinkami", price: "165 Kč" },
      { name: "Quiche dne", price: "175 Kč" },
      { name: "Polévka dne", price: "115 Kč" },
    ],
  },
  {
    icon: Wine,
    title: "Nápoje, víno & pivo",
    desc: "Domácí limonády, šejky, vybraná vína a řemeslné pivo.",
    image: menuWine,
    items: [
      { name: "Domácí limonáda", price: "85 Kč" },
      { name: "Ovocný šejk", price: "95 Kč" },
      { name: "Sklenka vína", price: "115 Kč" },
      { name: "Točené pivo 0,5 l", price: "65 Kč" },
    ],
  },
];

const reviews = [
  {
    text: "Nejlepší kavárna v okolí! Káva je vždy perfektní, obsluha milá a atmosféra úžasná. Cheesecake je naprostá poezie.",
    name: "Tereza N.",
    role: "Pravidelný host",
  },
  {
    text: "Vždy si tu odpočinu od shonu města. Skvělý brunch, krásný interiér plný světla a pocit, jako bych byla u dobrých přátel.",
    name: "Marek K.",
    role: "Host",
  },
  {
    text: "Místo, kam se ráda vracím. Domácí limonády, poctivé jídlo a baristé, kteří kávě opravdu rozumí. Vřele doporučuji!",
    name: "Adéla P.",
    role: "Stálá hostka",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="Bistro Okruh" className="h-12 w-12 object-contain" />
          </a>
          <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-foreground/80 hover:text-sage transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#kontakt"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-sage text-primary-foreground text-sm hover:opacity-90 transition"
          >
            Rezervovat
          </a>
        </div>
      </header>

      {/* Big logo below top bar */}
      <div className="pt-24 pb-4 flex justify-center bg-background">
        <img
          src={logo}
          alt="Bistro Okruh"
          className="h-40 w-40 md:h-48 md:w-48 object-contain"
        />
      </div>

      {/* Hero */}
      <section className="relative pt-8 pb-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-up">
            <p className="text-sm tracking-[0.3em] uppercase text-clay mb-6">Specialty Coffee · Brunch · Wine</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-balance">
              Místo, kde se <em className="text-sage not-italic">čas zpomalí</em> a chuť ožije.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Vítejte v Bistru Okruh. Pijeme výběrovou kávu, pečeme z poctivých surovin a věříme,
              že každý den si zaslouží malý rituál. Sladké, slané, limonády, víno i pivo — vše s láskou.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#menu" className="px-7 py-3.5 rounded-full bg-sage text-primary-foreground hover:opacity-90 transition">
                Prohlédnout menu
              </a>
              <a href="#kontakt" className="px-7 py-3.5 rounded-full border border-foreground/20 hover:bg-foreground/5 transition">
                Najít nás
              </a>
            </div>
          </div>

          <div className="relative fade-up">
            <div className="absolute -inset-6 bg-cream rounded-[2rem] -rotate-2" />
            <img
              src={hero}
              alt="Káva s croissanty a květinami v Bistru Okruh"
              width={1920}
              height={1280}
              className="relative rounded-[1.8rem] shadow-2xl object-cover w-full aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-clay text-clay" />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-medium">4.9 / 5</div>
                <div className="text-muted-foreground text-xs">přes 600 recenzí</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="o-nas" className="py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={about}
            alt="Útulný interiér Bistra Okruh"
            width={1280}
            height={1280}
            loading="lazy"
            className="rounded-[1.5rem] shadow-xl object-cover w-full aspect-square"
          />
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-clay mb-5">O nás</p>
            <h2 className="text-4xl md:text-5xl leading-tight text-balance">
              Malé bistro s velkým srdcem.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Bistro Okruh vzniklo z lásky ke kvalitní kávě, dobrému jídlu a setkávání. Každé ráno
              pečeme čerstvé dobroty, vaříme polévky podle sezóny a připravujeme nápoje, které
              hladí duši.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
              Spolupracujeme s lokálními farmáři, vybranými pražírnami a malými vinaři. Věříme, že
              poctivý přístup je cítit v každém soustu.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <div className="font-display text-4xl text-sage">8</div>
                <div className="text-sm text-muted-foreground mt-1">let s vámi</div>
              </div>
              <div>
                <div className="font-display text-4xl text-sage">100%</div>
                <div className="text-sm text-muted-foreground mt-1">domácí výroba</div>
              </div>
              <div>
                <div className="font-display text-4xl text-sage">12</div>
                <div className="text-sm text-muted-foreground mt-1">druhů kávy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-clay mb-5">Naše menu</p>
            <h2 className="text-4xl md:text-5xl text-balance">Co u nás ochutnáte</h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Sezónní nabídka, kterou pravidelně obměňujeme. Tady je výběr toho nejoblíbenějšího.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {menuCategories.map((cat) => (
              <article key={cat.title} className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <cat.icon className="w-5 h-5 text-sage" />
                    <h3 className="text-2xl">{cat.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{cat.desc}</p>
                  <ul className="space-y-3">
                    {cat.items.map((item) => (
                      <li key={item.name} className="flex items-baseline justify-between gap-4 text-sm">
                        <span className="text-foreground/90">{item.name}</span>
                        <span className="flex-1 border-b border-dashed border-border/70 translate-y-[-3px]" />
                        <span className="text-sage font-medium tabular-nums">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galerie" className="py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-clay mb-5">Galerie</p>
              <h2 className="text-4xl md:text-5xl text-balance max-w-xl">Atmosféra, která mluví sama za sebe</h2>
            </div>
            <a href="#kontakt" className="text-sage hover:underline underline-offset-4">Přijďte se podívat →</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <img src={gallery1} alt="Barista" width={1024} height={1280} loading="lazy" className="rounded-2xl object-cover w-full h-full aspect-[3/4] row-span-2 md:row-span-2" />
            <img src={gallery3} alt="Hosté v bistru" width={1280} height={1024} loading="lazy" className="rounded-2xl object-cover w-full aspect-[4/3] col-span-2 md:col-span-2" />
            <img src={gallery4} alt="Káva na mramoru" width={1024} height={1024} loading="lazy" className="rounded-2xl object-cover w-full aspect-square" />
            <img src={gallery2} alt="Domácí chléb" width={1024} height={1024} loading="lazy" className="rounded-2xl object-cover w-full aspect-square col-span-2 md:col-span-1" />
            <img src={menuSweet} alt="Cheesecake" width={1024} height={1024} loading="lazy" className="rounded-2xl object-cover w-full aspect-square hidden md:block" />
            <img src={menuDrinks} alt="Limonáda" width={1024} height={1024} loading="lazy" className="rounded-2xl object-cover w-full aspect-square hidden md:block" />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="recenze" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-clay mb-5">Recenze</p>
            <h2 className="text-4xl md:text-5xl text-balance">Co o nás říkají naši hosté</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r) => (
              <figure key={r.name} className="bg-card border border-border rounded-3xl p-8 flex flex-col">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-clay text-clay" />
                  ))}
                </div>
                <blockquote className="font-display text-2xl leading-snug text-foreground/90 flex-1">
                  „{r.text}"
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="font-medium">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-28 bg-sage text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-5">Kontakt</p>
            <h2 className="text-4xl md:text-5xl text-balance mb-6">Přijďte k nám na kávu.</h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-md">
              Najdete nás v srdci města. Bez rezervace, na chvíli i na celé odpoledne — vždy
              jste vítáni.
            </p>

            <div className="mt-10 space-y-5 text-primary-foreground/90">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 shrink-0" />
                <div>
                  <div className="font-medium text-primary-foreground">Adresa</div>
                  <div className="text-primary-foreground/80">Náměstí Okruh 12, 100 00 Praha</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 mt-1 shrink-0" />
                <div>
                  <div className="font-medium text-primary-foreground">Telefon</div>
                  <div className="text-primary-foreground/80">+420 777 123 456</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1 shrink-0" />
                <div>
                  <div className="font-medium text-primary-foreground">E-mail</div>
                  <div className="text-primary-foreground/80">ahoj@bistrookruh.cz</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a href="https://www.facebook.com/bistrookruh/" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="bg-background/10 backdrop-blur border border-primary-foreground/15 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-5 h-5" />
              <h3 className="text-2xl text-primary-foreground">Otevírací doba</h3>
            </div>
            <ul className="divide-y divide-primary-foreground/15">
              {[
                ["Pondělí – Pátek", "8:00 – 20:00"],
                ["Sobota", "9:00 – 20:00"],
                ["Neděle", "9:00 – 17:00"],
              ].map(([d, h]) => (
                <li key={d} className="flex justify-between py-4 text-primary-foreground/90">
                  <span>{d}</span>
                  <span className="tabular-nums">{h}</span>
                </li>
              ))}
            </ul>

            <a
              href="tel:+420777123456"
              className="mt-8 w-full inline-flex justify-center items-center px-6 py-3.5 rounded-full bg-primary-foreground text-sage hover:opacity-90 transition"
            >
              Rezervovat stůl
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Bistro Okruh" className="h-8 w-auto opacity-80" />
          </div>
          <p>© {new Date().getFullYear()} Bistro Okruh. Vytvořeno s láskou ke kávě.</p>
        </div>
      </footer>
    </div>
  );
}
