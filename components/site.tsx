"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Menu,
  X,
  MessageCircle,
  Maximize2,
} from "lucide-react";
import { nav, photos, services, whatsapp } from "@/lib/data";
const heroSlides = [
  {
    image: "fireplace-angle",
    label: "OUTDOOR LIVING",
    title: "Stone-clad fireplace & patio",
    position: "70% 55%",
  },
  {
    image: "patio-wide",
    label: "SPACE & PROPORTION",
    title: "Patio floors & architectural detail",
    position: "center 55%",
  },
  {
    image: "hallway-front",
    label: "INTERIOR FINISHES",
    title: "Marble-effect walls & floors",
    position: "65% 50%",
  },
  {
    image: "curved-steps",
    label: "THE FIRST IMPRESSION",
    title: "Curved residential entrance",
    position: "center 60%",
  },
];
export function HeroBackground() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (paused || reduced) return;
    const timer = window.setInterval(() => {
      if (!document.hidden)
        setActive((value) => (value + 1) % heroSlides.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [paused, reduced]);
  const slide = heroSlides[active];
  return (
    <>
      <div
        className="hero-image hero-slideshow"
        data-parallax
        data-active-slide={active}
        aria-hidden="true"
      >
        {heroSlides.map((item, i) => (
          <div
            key={item.image}
            className={`hero-slide ${active === i ? "slide-active" : ""}`}
          >
            <Image
              src={`/images/${item.image}.webp`}
              alt=""
              fill
              priority={i === 0}
              loading={i === 0 ? undefined : "eager"}
              sizes="100vw"
              style={{ objectPosition: item.position }}
            />
          </div>
        ))}
      </div>
      <div className="hero-project">
        <span className="hero-slide-number">
          0{active + 1} / {slide.label}
        </span>
        <br />
        <span>{slide.title}</span>
      </div>
      {!reduced && (
        <button
          className="hero-playback"
          aria-label={
            paused ? "Play background slideshow" : "Pause background slideshow"
          }
          onClick={() => setPaused((value) => !value)}
        >
          <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
          <span>{paused ? "Play" : "Pause"}</span>
        </button>
      )}
    </>
  );
}
export function Arrow() {
  return <ArrowUpRight size={18} aria-hidden="true" />;
}
export function Button({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="button" href={href}>
      {children}
      <Arrow />
    </Link>
  );
}
export function Brand() {
  return (
    <span className="brand">
      <strong>CLAD & CRAFT</strong>
      <span>PRO TILERS</span>
    </span>
  );
}
export function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    setOpen(false);
    setHidden(false);
  }, [path]);
  useEffect(() => {
    let last = Math.max(0, window.scrollY);
    const scroll = () => {
      // Clamp elastic overscroll and preserve the current state when stationary.
      // Slow scrolling can move only one pixel per event, so do not reset the
      // hidden state merely because a downward event is smaller than a threshold.
      const max = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const y = Math.max(0, Math.min(window.scrollY, max));
      if (y <= 96 || y < last) setHidden(false);
      else if (y > last) setHidden(true);
      setSolid(y > 40);
      last = y;
    };
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return (
    <header
      className={`navbar ${hidden && !open ? "nav-hidden" : ""} ${solid || open || path !== "/" ? "nav-solid" : ""}`}
    >
      <Link href="/" aria-label="Clad and Craft Pro Tilers home">
        <Brand />
      </Link>
      <nav aria-label="Main navigation" className={open ? "menu-open" : ""}>
        {nav.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            aria-current={path === href ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
      <Link className="nav-quote" href="/contact">
        Let’s talk <Arrow />
      </Link>
      <button
        className="menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
export function Motion() {
  const path = usePathname();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) =>
          entry.target.classList.toggle("is-visible", entry.isIntersecting),
        ),
      { threshold: 0.08, rootMargin: "0px 0px -25px 0px" },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((el) => observer.observe(el));
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const move = () => {
      if (!reduced)
        document
          .querySelectorAll<HTMLElement>("[data-parallax]")
          .forEach((el) => {
            const rect = el.parentElement!.getBoundingClientRect();
            el.style.transform = `translateY(${Math.max(-35, Math.min(35, -rect.top * 0.07))}px) scale(1.08)`;
          });
    };
    window.addEventListener("scroll", move, { passive: true });
    move();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", move);
    };
  }, [path]);
  return null;
}
export function Photo({
  id,
  alt,
  className = "",
  priority = false,
}: {
  id: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`photo ${className}`}>
      <Image
        src={`/images/${id}.webp`}
        alt={
          alt ||
          photos.find((p) => p.id === id)?.alt ||
          "Clad & Craft tiling and cladding workmanship"
        }
        fill
        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 70vw, 60vw"
        priority={priority}
      />
    </div>
  );
}
export function Footer() {
  return (
    <>
      <section className="cta-band wrap" data-reveal>
        <div>
          <p className="eyebrow">YOUR SPACE. OUR CRAFT.</p>
          <h2>
            Let’s make the
            <br />
            <em>finish count.</em>
          </h2>
        </div>
        <div>
          <p>
            Have a room, a renovation or a new build in mind? Send us your ideas
            and let’s discuss the details.
          </p>
          <Button href={whatsapp("a quotation for my project")}>
            Start a WhatsApp enquiry
          </Button>
        </div>
      </section>
      <footer>
        <div className="footer-main wrap">
          <div>
            <Link href="/">
              <Brand />
            </Link>
            <p>
              Premium Wall Cladding • Stone Cladding • Modern Tiling Finishes
            </p>
            <span className="footer-tag">
              Where craftsmanship meets modern finishes.
            </span>
          </div>
          <div>
            <h3>Explore</h3>
            {nav.map(([href, label]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </div>
          <div>
            <h3>Our craft</h3>
            <Link href="/services#service-0">Stone & wall cladding</Link>
            <Link href="/services#service-2">Feature fireplaces</Link>
            <Link href="/services#service-3">Ceramic & porcelain</Link>
            <Link href="/services#service-5">Stairs & entrances</Link>
          </div>
          <div>
            <h3>Let’s talk</h3>
            <a href="tel:+263772580824">0772 580 824 ↗</a>
            <a href="tel:+263715617140">0715 617 140 ↗</a>
            <a href={whatsapp()}>WhatsApp enquiry ↗</a>
            <span>
              Residential & commercial
              <br />
              projects · Zimbabwe
            </span>
          </div>
        </div>
        <div className="footer-bottom wrap">
          <span>© {new Date().getFullYear()} Clad & Craft Pro Tilers</span>
          <a href="https://wa.me/263789937251">
            Designed & Developed by Jaeger Media
          </a>
        </div>
      </footer>
      <a
        className="floating-whatsapp"
        href={whatsapp()}
        aria-label="Enquire on WhatsApp"
      >
        <MessageCircle size={23} />
      </a>
    </>
  );
}
export function Gallery() {
  const [category, setCategory] = useState("All work");
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const touch = useRef(0);
  const filtered =
    category === "All work"
      ? photos
      : photos.filter((p) => p.category === category);
  const step = (n: number) =>
    setIndex((i) =>
      i === null ? null : (i + n + filtered.length) % filtered.length,
    );
  useEffect(() => {
    if (index === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight")
        setIndex((i) => (i === null ? null : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft")
        setIndex((i) =>
          i === null ? null : (i - 1 + filtered.length) % filtered.length,
        );
      if (e.key === "Tab") {
        e.preventDefault();
        const controls = Array.from(
          document.querySelectorAll<HTMLButtonElement>(".lightbox button"),
        );
        const next =
          (controls.indexOf(document.activeElement as HTMLButtonElement) +
            (e.shiftKey ? -1 : 1) +
            controls.length) %
          controls.length;
        controls[next]?.focus();
      }
    };
    window.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", key);
      trigger.current?.focus();
    };
  }, [index, filtered.length]);
  return (
    <>
      <div className="filters" aria-label="Filter projects">
        {[
          "All work",
          "Stone & cladding",
          "Walls & interiors",
          "Floors",
          "Stairs & entrances",
          "Installation progress",
        ].map((c) => (
          <button
            aria-pressed={category === c}
            key={c}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="gallery-note">
        {filtered.length} photographs · Select an image to explore the detail.
      </p>
      <div className="gallery">
        {filtered.map((p, i) => (
          <button
            key={p.id}
            className={`gallery-item gallery-${p.id}`}
            onClick={(e) => {
              trigger.current = e.currentTarget;
              setIndex(i);
            }}
          >
            <div className="gallery-image">
              <Photo id={p.id} />
              <span className="gallery-open">
                <Maximize2 size={18} />
              </span>
              <span className="image-status">{p.status}</span>
            </div>
            <div className="gallery-caption">
              <div>
                <small>{p.group}</small>
                <h3>{p.title}</h3>
              </div>
              <Arrow />
            </div>
          </button>
        ))}
      </div>
      {index !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={filtered[index].title}
          onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const delta = e.changedTouches[0].clientX - touch.current;
            if (Math.abs(delta) > 45) step(delta < 0 ? 1 : -1);
          }}
        >
          <button
            ref={closeRef}
            className="lightbox-close"
            aria-label="Close gallery"
            onClick={() => setIndex(null)}
          >
            <X />
          </button>
          <button
            className="lightbox-prev"
            aria-label="Previous photograph"
            onClick={() => step(-1)}
          >
            <ArrowLeft />
          </button>
          <div className="lightbox-content">
            <Image
              src={`/images/${filtered[index].id}.webp`}
              width={1600}
              height={1200}
              alt={filtered[index].alt}
            />
            <div>
              <p>
                {filtered[index].group} · {index + 1} / {filtered.length}
              </p>
              <h3>{filtered[index].title}</h3>
              <span>{filtered[index].status}</span>
            </div>
          </div>
          <button
            className="lightbox-next"
            aria-label="Next photograph"
            onClick={() => step(1)}
          >
            <ArrowRight />
          </button>
        </div>
      )}
    </>
  );
}
export function MaterialStudy() {
  const [detail, setDetail] = useState(false);
  return (
    <section className="material-study">
      <div className={`study-photo ${detail ? "study-detail" : ""}`}>
        <Photo id="fireplace-front" />
        <span className="study-cross cross-one" />
        <span className="study-cross cross-two" />
        <span className="study-line" />
      </div>
      <div className="study-copy" data-reveal>
        <p className="eyebrow">THE MATERIAL STUDY / 01</p>
        <h2>
          Step closer.
          <br />
          <em>See the craft.</em>
        </h2>
        <p>
          From the rhythm of the stone to the way a corner meets: the details
          give a space its character.
        </p>
        <div
          className="study-tabs"
          role="group"
          aria-label="Fireplace study view"
        >
          <button aria-pressed={!detail} onClick={() => setDetail(false)}>
            01 / The whole
          </button>
          <button aria-pressed={detail} onClick={() => setDetail(true)}>
            02 / The detail <Arrow />
          </button>
        </div>
        <span className="study-label">
          Real project photography. A closer perspective.
        </span>
      </div>
    </section>
  );
}
export function EnquiryForm() {
  return (
    <form
      className="enquiry-form"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const message = `Hello Clad & Craft Pro Tilers, I would like a quotation.\n\nFull name: ${data.get("name")}\nPhone / WhatsApp: ${data.get("phone")}\nService required: ${data.get("service")}\nProject location: ${data.get("location")}\n\nProject details:\n${data.get("details")}`;
        window.location.href = `https://wa.me/263772580824?text=${encodeURIComponent(message)}`;
      }}
    >
      <div className="form-row">
        <label>
          Full Name
          <input name="name" autoComplete="name" required maxLength={100} />
        </label>
        <label>
          Phone / WhatsApp Number
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            maxLength={35}
          />
        </label>
      </div>
      <label>
        Service Required
        <select name="service" required defaultValue="">
          <option value="" disabled>
            Select your service
          </option>
          {services.map((s) => (
            <option key={s[0]}>{s[0]}</option>
          ))}
          <option>Multiple services / Other</option>
        </select>
      </label>
      <label>
        Project Location
        <input
          name="location"
          autoComplete="address-level2"
          required
          maxLength={160}
        />
      </label>
      <label>
        Project Details
        <textarea
          name="details"
          rows={5}
          required
          maxLength={3000}
          placeholder="Tell us about the space, approximate area, materials and what you have in mind."
        />
      </label>
      <p className="form-help">
        This opens WhatsApp with your enquiry ready to send. You can add project
        photos there before sending.
      </p>
      <button className="button" type="submit">
        Continue to WhatsApp <Arrow />
      </button>
    </form>
  );
}
