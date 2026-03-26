"use client";

import { useState } from "react";
import ScrollReveal from "./reactbits/scroll-reveal";
import FadeInText from "./reactbits/fade-in-text";
import AnimatedButton from "./reactbits/animated-button";
import { socialLinks, personalInfo } from "@/lib/data";

export default function ContactMe() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        console.error("Error response:", data);
        alert("There was a problem sending your message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-12 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal direction="up">
          <h2 className="text-sm uppercase tracking-widest text-hli font-semibold mb-2">
            Let&apos;s talk
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Contact
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal direction="left" delay={0.2}>
            <div className="text-muted-foreground space-y-4">
              <FadeInText delay={0.3}>
                <p>
                  Have a question or a project in mind? Feel free to reach out.
                </p>
              </FadeInText>
              <FadeInText delay={0.4}>
                <div className="flex items-center gap-2">
                  <span>Location:</span>
                  <span className="text-foreground">
                    {personalInfo.location}
                  </span>
                </div>
              </FadeInText>
              <FadeInText delay={0.5}>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-hli hover:underline text-sm"
                >
                  {personalInfo.email}
                </a>
              </FadeInText>
              <FadeInText delay={0.6}>
                <div className="flex items-center gap-4 pt-2">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="text-muted-foreground hover:text-hli transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </FadeInText>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.3}>
            <div>
              {!isSubmitted ? (
                <form
                  action="https://formspree.io/f/xqadovoq"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    required
                    className="px-4 py-3 bg-background/50 text-foreground border border-border rounded-md focus:outline-none focus:border-hli transition-all"
                  />
                  <input
                    type="email"
                    name="reply_to"
                    placeholder="Email"
                    required
                    className="px-4 py-3 bg-background/50 text-foreground border border-border rounded-md focus:outline-none focus:border-hli transition-all"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={6}
                    required
                    className="px-4 py-3 bg-background/50 text-foreground border border-border rounded-md focus:outline-none focus:border-hli resize-none transition-all"
                  />
                  <AnimatedButton
                    variant="shine"
                    glowColor="rgba(0, 128, 128, 0.5)"
                    className="px-4 py-3 bg-hli/20 text-foreground rounded-md border border-hli/30 hover:bg-hli/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </AnimatedButton>
                </form>
              ) : (
                <div className="flex justify-center items-center mt-4 text-foreground text-lg">
                  Thank you for your message!
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
