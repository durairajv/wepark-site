"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", projectType: "", slots: "", city: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-32 md:py-44 bg-wp-black noise overflow-hidden">
      <div className="absolute top-0 left-0 w-full section-divider" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,107,0,0.04),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <span className="reveal inline-block text-wp-orange/60 text-[11px] uppercase tracking-[0.4em] font-semibold mb-6 border border-wp-orange/10 px-4 py-1.5 rounded-full">
            Get Started
          </span>
          <h2 className="reveal font-[Space_Grotesk] text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Ready to{" "}
            <span className="gradient-text glow-text">Double Your Parking?</span>
          </h2>
          <p className="reveal text-white/35 text-xl mt-6">
            Free site assessment. Customized quote. No obligations.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="reveal glass-card rounded-3xl p-16 text-center border-glow">
                <div className="w-20 h-20 rounded-full border border-wp-orange/20 bg-wp-orange/[0.04] mx-auto mb-8 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M8 16l6 6 10-12" stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-[Space_Grotesk] text-3xl font-bold text-white">Thank You!</h3>
                <p className="text-white/40 mt-4 text-lg">We&apos;ve received your enquiry. Our team will reach out within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="reveal glass-card rounded-3xl p-8 md:p-10 border-glow">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "name", label: "Name", type: "text", placeholder: "Your name", required: true },
                    { name: "phone", label: "Phone", type: "tel", placeholder: "+91 XXXXX XXXXX", required: true },
                    { name: "email", label: "Email", type: "email", placeholder: "you@email.com", required: false },
                    { name: "city", label: "City", type: "text", placeholder: "e.g., Coimbatore", required: false },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="text-white/30 text-[11px] uppercase tracking-wider font-semibold mb-2 block">
                        {field.label} {field.required && <span className="text-wp-orange/50">*</span>}
                      </label>
                      <input
                        required={field.required}
                        type={field.type}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3.5 text-white placeholder:text-white/15 focus:outline-none focus:border-wp-orange/30 focus:bg-white/[0.05] transition-all duration-500 text-sm"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-white/30 text-[11px] uppercase tracking-wider font-semibold mb-2 block">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-wp-orange/30 transition-all duration-500 appearance-none text-sm"
                    >
                      <option value="" className="bg-wp-black">Select type</option>
                      <option value="apartment" className="bg-wp-black">Apartment</option>
                      <option value="villa" className="bg-wp-black">Villa</option>
                      <option value="commercial" className="bg-wp-black">Commercial</option>
                      <option value="office" className="bg-wp-black">Office / IT Park</option>
                      <option value="other" className="bg-wp-black">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-white/30 text-[11px] uppercase tracking-wider font-semibold mb-2 block">
                      Parking Slots Needed
                    </label>
                    <input
                      type="number"
                      value={formData.slots}
                      onChange={(e) => setFormData({ ...formData, slots: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3.5 text-white placeholder:text-white/15 focus:outline-none focus:border-wp-orange/30 transition-all duration-500 text-sm"
                      placeholder="e.g., 10"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-white/30 text-[11px] uppercase tracking-wider font-semibold mb-2 block">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3.5 text-white placeholder:text-white/15 focus:outline-none focus:border-wp-orange/30 transition-all duration-500 resize-none text-sm"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button type="submit" className="mt-6 w-full btn-premium text-white py-4 rounded-xl font-semibold text-lg tracking-wide">
                  Send Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Contact sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <div className="reveal">
              <h3 className="font-[Space_Grotesk] text-xl font-bold text-white mb-8 tracking-tight">
                Contact
              </h3>

              <div className="space-y-6">
                {[
                  { href: "tel:+919344201121", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.11 3.33a1 1 0 01-.45 1.13l-1.6.97a11.47 11.47 0 005.42 5.42l.97-1.6a1 1 0 011.13-.45l3.33 1.11a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z", label: "+91 93442 01121", sub: "Mon–Sat, 9am–7pm" },
                  { href: "mailto:rajkumar@wepark.co.in", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "rajkumar@wepark.co.in", sub: "Responds within 24h" },
                  { href: "#", icon: "M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", label: "WePark, Coimbatore", sub: "Tamil Nadu, India" },
                ].map((item) => (
                  <a key={item.label} href={item.href} className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-wp-orange/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-wp-orange/[0.12] transition-all duration-500">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d={item.icon} stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/70 font-medium text-sm group-hover:text-white transition-colors">{item.label}</p>
                      <p className="text-white/25 text-xs mt-0.5">{item.sub}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="reveal">
              <p className="text-white/25 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { name: "Instagram", href: "https://instagram.com/wepark.in", d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z" },
                  { name: "LinkedIn", href: "https://linkedin.com/company/wepark", d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" },
                  { name: "YouTube", href: "https://youtube.com/@wepark", d: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" },
                ].map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-white/30 hover:text-wp-orange hover:bg-wp-orange/[0.06] transition-all duration-500" title={s.name}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d={s.d} /></svg>
                  </a>
                ))}
              </div>
              <p className="text-white/10 text-[10px] mt-2">[Placeholder social IDs]</p>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919344201121?text=Hi%2C%20I%27m%20interested%20in%20WePark%20parking%20solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal flex items-center gap-4 glass-card rounded-xl p-5 hover:bg-green-500/[0.04] transition-all duration-500 group border border-green-500/10 hover:border-green-500/20"
            >
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 relative">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div className="absolute inset-0 rounded-full animate-ping bg-green-500/30" style={{ animationDuration: "3s" }} />
              </div>
              <div>
                <p className="text-green-400/80 font-semibold text-sm">Chat on WhatsApp</p>
                <p className="text-green-400/30 text-xs">Quick response guaranteed</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
