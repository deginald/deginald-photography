"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export function BookingSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="book"
      className="border-t border-white/10 bg-[#111008] py-28"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="font-body text-[13px] uppercase tracking-[0.3em] text-[#c9622a]">
            Book a Session
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-[#f2ede4] md:text-5xl">
            Let's make
            <br />
            something honest.
          </h2>
          <p className="mt-6 max-w-sm font-body text-sm text-[#f2ede4]/60">
            Tell me your date, location, and what you're picturing on the
            ground or in the air. I'll follow up within a day or two to lock
            in the details.
          </p>

          <div className="mt-12 flex flex-col gap-5">
            <div className="flex items-center gap-3 font-body text-sm text-[#f2ede4]/70">
              <Mail className="h-4 w-4 text-[#c9622a]" />
              carolinakingphotography.com
            </div>
            <div className="flex items-center gap-3 font-body text-sm text-[#f2ede4]/70">
              <Phone className="h-4 w-4 text-[#c9622a]" />
              (910) 612-2180
            </div>
            <div className="flex items-center gap-3 font-body text-sm text-[#f2ede4]/70">
              <MapPin className="h-4 w-4 text-[#c9622a]" />
              Suf City, NC — travel available
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-sm border border-[#c9622a]/40 bg-[#c9622a]/[0.06] p-14 text-center">
              <CheckCircle className="h-10 w-10 text-[#c9622a]" />
              <p className="font-display text-2xl text-[#f2ede4]">
                Request received
              </p>
              <p className="max-w-xs font-body text-sm text-[#f2ede4]/60">
                Thanks! I'll reach out shortly to confirm your session
                details.
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
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="text-[#f2ede4]/70">
                  Preferred date
                </Label>
                <Input
                  id="date"
                  type="date"
                  className="border-white/15 bg-transparent text-[#f2ede4]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="package" className="text-[#f2ede4]/70">
                  Session type
                </Label>
                <Select>
                  <SelectTrigger className="border-white/15 bg-transparent text-[#f2ede4]">
                    <SelectValue placeholder="Choose a package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mini">Mini Session — $75</SelectItem>
                    <SelectItem value="extended">Extended Session</SelectItem>
                    <SelectItem value="drone">
                      Drone Services — from $100
                    </SelectItem>
                    <SelectItem value="drone-addon">
                      Ground Session + Drone Add-on
                    </SelectItem>
                    <SelectItem value="travel">Travel Booking</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <Label htmlFor="message" className="text-[#f2ede4]/70">
                  Tell me about your shoot
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Location, occasion, group size, vibe or aerial coverage needs..."
                  className="border-white/15 bg-transparent text-[#f2ede4] placeholder:text-[#f2ede4]/30"
                />
              </div>

              <button
                type="submit"
                className="group flex items-center justify-center gap-2 rounded-full bg-[#c9622a] py-4 font-body text-sm uppercase tracking-[0.2em] text-[#0c0b09] transition-colors hover:bg-[#e07539] sm:col-span-2"
              >
                Send Request
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
