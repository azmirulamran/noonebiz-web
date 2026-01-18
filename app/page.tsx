"use client";

const categories = [
  {
    title: "Paper & Printing",
    items: ["A4 Copy Paper 80gsm", "Thermal Paper Rolls", "Labels & Stickers", "Printer Ink & Toner"],
  },
  {
    title: "Stationery",
    items: ["Pens, Markers & Highlighters", "Staplers & Punchers", "Notebooks", "Folders & Files"],
  },
  {
    title: "Office Pantry",
    items: ["Coffee & Tea", "Sugar & Creamer", "Tissues & Cups", "Mineral Water"],
  },
  {
    title: "Electrical Supplies",
    items: ["Electrical Wiring", "Conduit & Trunking", "Lighting", "Distribution Board (DB)"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
     {/* HEADER */}
<header className="border-b border-zinc-200">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
    
    {/* LOGO + BRAND */}
    <div className="flex items-center gap-3">
      <img
        src="/NOONEBIZ.png"
        alt="Noonebiz Resources"
        className="h-20 w-20 md:h-32 md:w-32 rounded-lg object-contain flex-shrink-0"
      />

      <div className="leading-tight">
        <div className="text-lg font-bold tracking-tight">
          Noonebiz <span className="text-zinc-500">Resources</span>
        </div>
        <div className="text-xs text-zinc-500">Office Supply & Procurement</div>
      </div>
    </div>

    {/* NAV */}
    <nav className="hidden gap-6 text-sm text-zinc-600 md:flex">
      <a className="hover:text-zinc-900" href="#services">
        Supplies
      </a>
      <a className="hover:text-zinc-900" href="#why">
        Why Us
      </a>
      <a className="hover:text-zinc-900" href="#contact">
        Contact
      </a>
    </nav>

    {/* WHATSAPP BUTTON */}
    <a
      className="shrink-0 rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
      href="https://wa.me/60135566897"
      target="_blank"
      rel="noreferrer"
    >
      WhatsApp
    </a>

  </div>
</header> 
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium text-zinc-500">
              Office Supply & Procurement
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Your One-Stop Office Supply Partner
            </h1>

            <p className="mt-4 max-w-xl text-zinc-600">
              <span className="font-semibold text-zinc-900">
                Noonebiz Resources
              </span>{" "}
              provides office supplies, pantry items, and electrical essentials for
              companies, contractors, and SMEs. We deliver fast, respond quickly,
              and offer competitive pricing.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#services"
                className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                View Supplies
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              >
                Request a Quotation
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-zinc-600">
              <div className="rounded-xl border border-zinc-200 p-4">
                <p className="font-semibold text-zinc-900">Fast Delivery</p>
                <p className="mt-1">Flexible coverage based on your location</p>
              </div>
              <div className="rounded-xl border border-zinc-200 p-4">
                <p className="font-semibold text-zinc-900">Bulk & Contract Supply</p>
                <p className="mt-1">Monthly supply & procurement support</p>
              </div>
            </div>
          </div>

          {/* QUOTE CARD */}
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-7">
            <p className="text-sm font-semibold text-zinc-900">Quick Quote</p>
            <p className="mt-1 text-sm text-zinc-600">
              Click the button below to message us on WhatsApp with a ready template.
            </p>

            <a
              href="https://wa.me/60135566897?text=Hi%20Noonebiz%20Resources,%20I%20would%20like%20to%20request%20a%20quotation.%0A%0AItem:%20%0AQuantity:%20%0ADelivery%20location:%20"
              target="_blank"
              rel="noreferrer"
              className="mt-5 block rounded-xl bg-zinc-900 px-5 py-3 text-center text-sm font-semibold text-white hover:opacity-90"
            >
              Request Quotation via WhatsApp
            </a>

            <div className="mt-5 space-y-2 text-sm text-zinc-600">
              <p>✅ Quotation & Invoice support</p>
              <p>✅ Regular supply for offices & sites</p>
              <p>✅ Fast response during working hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">
            Supplies Categories
          </h2>
          <p className="mt-2 text-zinc-600">
            Here are some of the categories we can supply.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-zinc-200 p-5 hover:bg-zinc-50"
              >
                <p className="font-semibold">{c.title}</p>
                <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-zinc-600">
                  {c.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">Why Noonebiz?</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Easy Ordering",
                desc: "Order quickly via WhatsApp or send your item list.",
              },
              {
                title: "Competitive Pricing",
                desc: "Better pricing for bulk purchase and contract supply.",
              },
              {
                title: "Reliable Supplier",
                desc: "Suitable for offices, sites, contractors, and SMEs.",
              },
            ].map((x) => (
              <div
                key={x.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6"
              >
                <p className="font-semibold">{x.title}</p>
                <p className="mt-2 text-sm text-zinc-600">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
          <p className="mt-2 text-zinc-600">
            Need a quotation or want to check stock availability? Contact us anytime.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              href="https://wa.me/60135566897"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Noonebiz Resources
            </a>

            <a
              className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=noonebizresources@gmail.com&su=Quotation%20Request%20-%20Noonebiz%20Resources&body=Hi%20Noonebiz%20Resources,%0A%0AI%20would%20like%20to%20request%20a%20quotation.%0A%0ACompany%20Name:%20%0AItems%20Needed:%20%0AQuantity:%20%0ADelivery%20Location:%20%0ARequired%20Date:%20"
            >
              Email Us
            </a>
         <button
  className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
  onClick={() => {
    navigator.clipboard.writeText("noonebizresources@gmail.com");
    alert("Email copied!");
  }}
>
  Copy Email
</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Noonebiz Resources. All Rights Reserved.
      </footer>
    </main>
  );
}
