"use client";

import { useState } from "react";
import ScrollReveal from "./reactbits/scroll-reveal";
import FadeInText from "./reactbits/fade-in-text";

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
          <h2 className="text-lg text-primary mb-2 font-medium">Let&apos;s talk</h2>
          <h3 className="text-4xl md:text-5xl font-medium text-foreground mb-6">
            Contact
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal direction="left" delay={0.2}>
            <div className="text-muted-foreground">
              <FadeInText delay={0.3}>
                <p className="mb-4">
                  Have a question or a project in mind? Feel free to reach out.
                </p>
              </FadeInText>
              <FadeInText delay={0.4}>
                <div className="flex items-center gap-2">
                  <span>Location:</span>
                  <span className="text-foreground">Indonesia, Jakarta</span>
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
                    className="px-4 py-3 bg-background/50 text-foreground border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  <input
                    type="email"
                    name="reply_to"
                    placeholder="Email"
                    required
                    className="px-4 py-3 bg-background/50 text-foreground border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={6}
                    required
                    className="px-4 py-3 bg-background/50 text-foreground border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-3 bg-primary/20 text-foreground rounded-lg border border-primary/30 hover:bg-primary/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </button>
                </form>
              ) : (
                <div className="flex justify-center items-center mt-4 text-foreground text-lg">
                  ✅ Thank you for your message!
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
