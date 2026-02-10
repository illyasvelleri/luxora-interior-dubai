"use client";

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 bg-[#0b0b0b] overflow-hidden"
    >
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1a1a1a_0%,transparent_55%)]" />

      {/* Architectural grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:140px_140px]" />

      <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-24">
        <div className="grid lg:grid-cols-[1fr_1.25fr] gap-24 items-start">

          {/* LEFT */}
          <div className="space-y-14 lg:sticky lg:top-32">
            <div>
              <div className="text-xs tracking-[0.4em] text-[#7a7a7a] mb-8">
                PRIVATE COMMISSIONS
              </div>

              <h1 className="font-serif text-[clamp(2.6rem,4vw,4rem)] leading-[1.05] mb-10">
                Request a<br />Strategic Consultation
              </h1>

              <p className="text-[#a0a0a0] text-lg leading-relaxed max-w-xl">
                LUXORA operates as a design-led practice, accepting a limited
                number of commissions annually to preserve authorship,
                executional rigor, and architectural clarity.
              </p>
            </div>

            <div className="relative pl-8 border-l border-[#2d2d2d]">
              <div className="absolute -left-[1px] top-0 h-10 w-[2px] bg-[#d4af37]" />
              <p className="text-sm text-[#8a8a8a] mb-2">
                Exclusive Project Engagement
              </p>
              <p className="text-xl text-[#d4af37] tracking-wide">
                By Invitation Only
              </p>
              <p className="text-xs text-[#6f6f6f] mt-4">
                Enquiries are carefully reviewed to ensure alignment with our design standards.
              </p>
            </div>

          </div>

          {/* FORM */}
          <form className="space-y-12 bg-[#0e0e0e]/70 backdrop-blur-xl border border-[#1f1f1f] p-12 sm:p-16 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)]">

            <div className="grid md:grid-cols-2 gap-10">
              <Field label="ORGANIZATION NAME *">
                <input className="lux-input" required />
              </Field>
              <Field label="CONTACT PERSON *">
                <input className="lux-input" required />
              </Field>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <Field label="EMAIL ADDRESS *">
                <input type="email" className="lux-input" required />
              </Field>
              <Field label="CONTACT NUMBER*">
                <input type="numbers" className="lux-input" required />
              </Field>
            </div>

            <Field label="PROJECT TYPOLOGY *">
              <select className="lux-select" required>
                <option value="">Select project type</option>
                <option>Commercial Infrastructure</option>
                <option>Sacred Architecture</option>
                <option>Institutional</option>
                <option>Hospitality & Dining</option>
                <option>Mixed-Use / Other</option>
              </select>
            </Field>

            <Field label="PROJECT BRIEF & STRATEGIC INTENT *">
              <textarea rows={6} className="lux-textarea" required />
            </Field>

            <div className="pt-10">
              <button
                type="submit"
                className="relative inline-flex items-center px-20 py-6 border border-[#d4af37]/60 text-[#d4af37] tracking-[0.4em] text-xs hover:bg-[#d4af37]/10 transition-all duration-700"
              >
                SUBMIT ENQUIRY
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* GLOBAL FIELD STYLES */}
      <style jsx global>{`
        .lux-input,
        .lux-select,
        .lux-textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid #1f1f1f;
          padding: 18px 16px;
          color: #eaeaea;
          outline: none;
          transition: border-color 0.35s ease,
            background 0.35s ease,
            box-shadow 0.35s ease;
        }

        .lux-input:hover,
        .lux-select:hover,
        .lux-textarea:hover {
          background: rgba(255, 255, 255, 0.055);
        }

        .lux-input:focus,
        .lux-select:focus,
        .lux-textarea:focus {
          border-color: #d4af37;
          background: rgba(212, 175, 55, 0.04);
          box-shadow: 0 18px 40px -28px rgba(212, 175, 55, 0.55);
        }

        .lux-textarea {
          resize: none;
        }

        option {
          background: #0b0b0b;
        }
      `}</style>
    </section>
  );
}

/* FIELD */
function Field({ label, children }) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.3em] text-[#6f6f6f] mb-4">
        {label}
      </label>
      {children}
    </div>
  );
}
