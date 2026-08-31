"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export function GeneralContact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-[#111008] py-28"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="font-body text-[13px] uppercase tracking-[0.3em] text-[#c9622a]">
            Not Sure Which Service?
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-[#f2ede4] md:text-5xl">
            Just say hello.
          </h2>
          <p className="mt-6 max-w-sm font-body text-sm text-[#f2ede4]/60">
            Tell me a bit about what you're picturing and I'll point you to
            the right session — portrait, drone, or real estate.
          </p>

          <div className="mt-12 flex flex-col gap-5">
            <div className="flex items-center gap-3 font-body text-sm text-[#f2ede4]/70">
              <Mail className="h-4 w-4 text-[#c9622a]" />
              hello@deginaldphoto.com
            </div>
            <div className="flex items-center gap-3 font-body text-sm text-[#f2ede4]/70">
              <Phone className="h-4 w-4 text-[#c9622a]" />
              (555) 010-0123
            </div>
            <div className="flex items-center gap-3 font-body text-sm text-[#f2ede4]/70">
              <MapPin className="h-4 w-4 text-[#c9622a]" />
              Johnson City, TN — travel available
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-sm border border-[#c9622a]/40 bg-[#c9622a]/[0.06] p-14 text-center">
              <CheckCircle className="h-10 w-10 text-[#c9622a]" />
              <p className="font-display text-2xl text-[#f2ede4]">
                Message sent
              </p>
              <p className="max-w-xs font-body text-sm text-[#f2ede4]/60">
                I'll get back to you shortly with next steps.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            >
              <div className="flex flex-col gap-2">
                <Label htmlFor="name" className="text-[#f2ede4]/70">
                  Name
                </Label>
                <Input
                  id="name"
                  required
                  placeholder="Your name"
                  className="border-white/15 bg-transparent text-[#f2ede4] placeholder:text-[#f2ede4]/30"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-[#f2ede4]/70">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="border-white/15 bg-transparent text-[#f2ede4] placeholder:text-[#f2ede4]/30"
                />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <Label htmlFor="message" className="text-[#f2ede4]/70">
                  What are you picturing?
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Portrait session, drone shoot, real estate listing..."
                  className="border-white/15 bg-transparent text-[#f2ede4] placeholder:text-[#f2ede4]/30"
                />
              </div>

              <button
                type="submit"
                className="group flex items-center justify-center gap-2 rounded-full bg-[#c9622a] py-4 font-body text-sm uppercase tracking-[0.2em] text-[#0c0b09] transition-colors hover:bg-[#e07539] sm:col-span-2"
              >
                Send Message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
