import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  Handshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Wrench,
} from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const phoneDisplay = '+60 11-255 60133';
const phoneHref = 'tel:+601125560133';
const whatsappHref =
  'https://wa.me/601125560133?text=Hi%20LUQSS%20SOLUTION%2C%20I%27m%20interested%20in%20buying%20oddjob.my.';

const possibilities = [
  {
    icon: Wrench,
    title: 'Home services',
    description: 'A memorable home for repairs, cleaning, moving, and local help.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Gig marketplace',
    description: 'Built for a platform connecting Malaysians with flexible work.',
  },
  {
    icon: Handshake,
    title: 'Service directory',
    description: 'A clear name for matching customers with trusted local providers.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="relative isolate">
        <div className="domain-grid pointer-events-none absolute inset-0 -z-20 opacity-45" />
        <div className="pointer-events-none absolute -left-48 top-24 -z-10 size-[32rem] rounded-full bg-[radial-gradient(circle,var(--glow)_0%,transparent_68%)] blur-3xl" />

        <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="#top" className="group flex items-center gap-3" aria-label="oddjob.my home">
            <span className="flex size-10 items-center justify-center rounded-full border border-foreground/15 bg-card font-mono text-xs font-bold tracking-[-0.08em] shadow-sm transition-transform group-hover:-rotate-6">
              OJ
            </span>
            <span className="font-mono text-sm font-bold tracking-[-0.04em]">oddjob.my</span>
          </a>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 rounded-full border border-foreground/10 bg-card/80 px-3 py-2 text-xs font-semibold text-muted-foreground shadow-sm backdrop-blur sm:flex">
              <span className="size-1.5 rounded-full bg-[var(--signal)] shadow-[0_0_0_4px_var(--signal-soft)]" />
              Domain available
            </span>
            <a
              href={phoneHref}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'h-10 rounded-full border-foreground/15 bg-card px-4 font-bold shadow-sm hover:bg-foreground hover:text-background',
              )}
            >
              <Phone className="size-4" />
              <span className="hidden sm:inline">Call owner</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </header>

        <section id="top" className="mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--signal-soft)] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--signal-ink)]">
                <Sparkles className="size-3.5" />
                Premium .my domain for sale
              </span>
              <span className="font-mono text-xs text-muted-foreground">Malaysia</span>
            </div>

            <h1 className="text-balance font-heading text-[clamp(3.5rem,9vw,7.6rem)] font-black leading-[0.82] tracking-[-0.085em]">
              Make a name
              <span className="block font-serif font-normal italic tracking-[-0.065em] text-[var(--signal-ink)]">for the work.</span>
            </h1>

            <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
              <strong className="font-bold text-foreground">oddjob.my</strong> is short, direct, and ready for a Malaysian gig, services, or local-help brand.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={phoneHref}
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'h-14 rounded-full bg-foreground px-7 text-base font-extrabold text-background shadow-[0_14px_40px_rgb(13_25_20/20%)] hover:bg-[var(--signal-ink)] hover:text-white',
                )}
              >
                <Phone className="size-5" />
                Call {phoneDisplay}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'h-14 rounded-full border-foreground/15 bg-card/75 px-7 text-base font-extrabold shadow-sm backdrop-blur hover:border-[#25D366]/40 hover:bg-[#e8faef] hover:text-[#075e54]',
                )}
              >
                <MessageCircle className="size-5" />
                WhatsApp owner
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
              <span className="inline-flex items-center gap-2"><Check className="size-4 text-[var(--signal-ink)]" /> Short &amp; memorable</span>
              <span className="inline-flex items-center gap-2"><Check className="size-4 text-[var(--signal-ink)]" /> Local .my identity</span>
              <span className="inline-flex items-center gap-2"><Check className="size-4 text-[var(--signal-ink)]" /> Direct owner contact</span>
            </div>
          </div>

          <aside className="relative mx-auto w-full max-w-xl lg:justify-self-end">
            <div className="absolute -inset-4 -z-10 rotate-2 rounded-[2rem] border border-foreground/10 bg-[var(--signal)]" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-[var(--ink)] p-6 text-white shadow-[0_32px_90px_rgb(13_25_20/24%)] sm:p-8">
              <div className="absolute right-0 top-0 size-48 translate-x-12 -translate-y-12 rounded-full border-[34px] border-white/5" />
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white/55">Acquisition card</span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em]">For sale</span>
              </div>

              <div className="relative mt-16 sm:mt-24">
                <p className="font-mono text-sm text-white/45">www.</p>
                <p className="break-all text-[clamp(3.4rem,10vw,6.3rem)] font-black leading-none tracking-[-0.09em]">oddjob</p>
                <p className="mt-1 font-serif text-4xl italic text-[var(--signal)] sm:text-5xl">.my</p>
              </div>

              <div className="relative mt-16 border-t border-white/15 pt-6 sm:mt-24">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">Offers from</p>
                    <p className="mt-1 text-4xl font-black tracking-[-0.055em]">RM5,000</p>
                  </div>
                  <a href={phoneHref} className="group inline-flex items-center gap-2 text-sm font-bold text-[var(--signal)]">
                    Speak to the owner
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
                <p className="mt-5 text-xs leading-5 text-white/40">Domain name sale only. Final price and transfer terms are subject to agreement.</p>
              </div>
            </div>
          </aside>
        </section>
      </div>

      <section className="border-y border-foreground/10 bg-card" aria-labelledby="potential-heading">
        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--signal-ink)]">One name. Many directions.</p>
              <h2 id="potential-heading" className="mt-4 max-w-md text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-5xl">
                Built to sound like the category leader.
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/10 sm:grid-cols-3">
              {possibilities.map(({ icon: Icon, title, description }) => (
                <article key={title} className="group bg-background p-6 transition-colors hover:bg-[var(--signal-soft)] sm:p-7">
                  <span className="flex size-11 items-center justify-center rounded-full border border-foreground/10 bg-card text-[var(--signal-ink)] shadow-sm transition-transform group-hover:-rotate-6">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-8 text-lg font-extrabold tracking-[-0.035em]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--ink)] text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--signal)]">
              <BadgeCheck className="size-4" />
              Ready when you are
            </span>
            <h2 className="mt-5 max-w-3xl text-balance text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl">
              Interested in oddjob.my? Let’s talk directly.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/60">No forms and no waiting. Call or WhatsApp the owner to discuss your offer and the next step.</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={phoneHref}
              className={cn(
                buttonVariants({ size: 'lg' }),
                'h-14 rounded-full bg-[var(--signal)] px-7 text-base font-extrabold text-[var(--ink)] hover:bg-white',
              )}
            >
              <Phone className="size-5" />
              Call now
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'h-14 rounded-full border-white/20 bg-white/5 px-7 text-base font-extrabold text-white hover:bg-white hover:text-[var(--ink)]',
              )}
            >
              <MessageCircle className="size-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[var(--ink)] text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 pb-28 pt-8 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-10 lg:pb-10">
          <div>
            <p className="font-bold">LUQSS SOLUTION</p>
            <p className="mt-2 font-mono text-xs leading-5 text-white/45">202603040811 (003823228-A)</p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-white/45"><MapPin className="size-3.5" /> Malaysia</p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-white/60 sm:flex-row sm:gap-6">
            <a href={phoneHref} className="inline-flex items-center gap-2 transition-colors hover:text-[var(--signal)]"><Phone className="size-4" /> {phoneDisplay}</a>
            <a href="mailto:luqssolution@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-[var(--signal)]"><Mail className="size-4" /> luqssolution@gmail.com</a>
          </div>
        </div>
      </footer>

      <nav className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-2 rounded-2xl border border-white/15 bg-[var(--ink)]/95 p-2 shadow-[0_18px_60px_rgb(0_0_0/35%)] backdrop-blur md:hidden" aria-label="Quick contact">
        <a href={phoneHref} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[var(--signal)] text-sm font-extrabold text-[var(--ink)]">
          <Phone className="size-4" /> Call now
        </a>
        <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white text-sm font-extrabold text-[var(--ink)]">
          <MessageCircle className="size-4" /> WhatsApp
        </a>
      </nav>
    </main>
  );
}
