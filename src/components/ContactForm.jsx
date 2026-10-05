import React, { useState } from "react";
import { Check } from "lucide-react";

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState(["Web Dev"]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectDetails: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = ["Web Dev", "Full Stack", "Consulting", "Gen AI", "ML", "Deep Learning"];

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== service));
      }
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#1c2226] px-4 py-20 text-[#f2f4f5] sm:px-6 lg:px-10"
    >
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-400/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-300/10 blur-[110px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-[30px] border border-blue-300/20 bg-[#2a3136]/90 shadow-[0_0_60px_rgba(76,156,255,0.12)] backdrop-blur-sm">
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-[360px] w-[360px] rounded-full bg-blue-400/15 blur-[90px]" />

          <div className="relative z-10 grid gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14">
            <div className="flex flex-col justify-between space-y-8 lg:col-span-5">
              <div className="space-y-6">
                <span className="inline-flex rounded-full border border-blue-300/30 bg-blue-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-200">
                  Contact
                </span>

                <h1 className="text-3xl font-black leading-[1.1] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                  Let’s build something together
                </h1>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center space-x-3 text-sm font-medium text-zinc-200 sm:text-base">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-blue-300/60 bg-blue-400/15 text-blue-200">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <span>Fast response within 24 hours</span>
                  </div>

                  <div className="flex items-center space-x-3 text-sm font-medium text-zinc-200 sm:text-base">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-blue-300/60 bg-blue-400/15 text-blue-200">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <span>Available for freelance & contract roles</span>
                  </div>

                  <div className="flex items-center space-x-3 text-sm font-medium text-zinc-200 sm:text-base">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-blue-300/60 bg-blue-400/15 text-blue-200">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <span>End-to-end design & development</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-8 lg:pt-12">
                <a
                  href="mailto:parthpatiljob@gmail.com"
                  className="text-sm font-medium text-blue-200 underline decoration-blue-300/60 underline-offset-4 transition-colors hover:text-amber-200 sm:text-base"
                >
                  parthpatiljob@gmail.com
                </a>

                <p className="max-w-xs text-xs leading-relaxed text-zinc-300 sm:text-sm">
                  Prefer a direct discussion or want to schedule a 1-on-1 call?
                </p>

                <div>
                  <a
                    href="tel:+917841007735"
                    className="inline-flex items-center space-x-2 rounded-full border border-blue-300/40 bg-blue-300/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100 transition-all duration-200 hover:border-amber-200 hover:bg-blue-300/20"
                  >
                    <span>Schedule a call</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <label className="text-xs font-semibold tracking-[0.18em] text-zinc-300 uppercase sm:text-sm">
                    Service Needed
                  </label>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {services.map((service, index) => {
                      const isSelected = selectedServices.includes(service);
                      return (
                        <button
                          key={index}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`cursor-pointer rounded-full border px-3 py-1.5 text-[10px] font-medium tracking-wide transition-all duration-200 sm:text-xs ${
                            isSelected
                              ? "border-blue-200 bg-blue-400 text-[#1c2226] shadow-[0_0_18px_rgba(76,156,255,0.35)]"
                              : "border-[#48535a] bg-[#242b30] text-zinc-200 hover:border-blue-300/40 hover:text-white"
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <input
                      type="text"
                      placeholder="Your name*"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full border-b border-zinc-700 bg-transparent py-2.5 text-xs text-white placeholder-zinc-400 outline-none transition-colors focus:border-blue-300 sm:text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <input
                      type="email"
                      placeholder="Your email*"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border-b border-zinc-700 bg-transparent py-2.5 text-xs text-white placeholder-zinc-400 outline-none transition-colors focus:border-blue-300 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <textarea
                    placeholder="Tell me about your project or message*"
                    rows={3}
                    required
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="w-full resize-none border-b border-zinc-700 bg-transparent py-2 text-xs text-white placeholder-zinc-400 outline-none transition-colors focus:border-blue-300 sm:text-sm"
                  />
                </div>

                {isSubmitted && (
                  <div className="rounded-xl border border-blue-300/40 bg-blue-300/10 p-3 text-center text-xs font-medium text-blue-100">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-blue-400 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1c2226] shadow-[0_10px_25px_rgba(76,156,255,0.28)] transition-all duration-200 hover:bg-amber-300 active:scale-[0.99]"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center sm:mt-16">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold uppercase tracking-[0.24em] text-zinc-400/70 sm:gap-10 sm:text-sm lg:gap-14">
            <span className="transition-colors hover:text-blue-200">React</span>
            <span className="transition-colors hover:text-blue-200">Next.js</span>
            <span className="transition-colors hover:text-blue-200">Tailwind CSS</span>
            <span className="transition-colors hover:text-blue-200">Framer</span>
            <span className="transition-colors hover:text-blue-200">GitHub</span>
            <span className="transition-colors hover:text-blue-200">TypeScript</span>
          </div>
        </div>
      </div>
    </section>
  );
}
