"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Check, ArrowRight, Minus, Plus } from "lucide-react";

type Tier = "professional" | "premier";

const TIER_INFO: Record<Tier, { name: string; tagline: string; features: string[] }> = {
  professional: {
    name: "Professional Photography Package",
    tagline: "Everything a listing needs",
    features: ["High-quality listing photos", "Blue sky guarantee", "24-hour delivery"],
  },
  premier: {
    name: "Premier Package",
    tagline: "For listings where timing matters",
    features: [
      "Everything from Professional, plus:",
      "No late-cancel fees",
      "No travel fees",
      "Virtual Twilight",
      "Property Highlight Video — a 30-second promo video of the home's best features, perfect for social media",
    ],
  },
};

const PROPERTY_TYPES = [
  "Single-Family",
  "Industrial",
  "Multi-Family",
  "Office",
  "Retail",
  "Hotel",
  "Other",
] as const;

type PropertyType = (typeof PROPERTY_TYPES)[number];

// Properties billed per-unit (Multi-Family, Hotel)
const PER_UNIT_TYPES: PropertyType[] = ["Multi-Family", "Hotel"];

// Standard property photo tiers: Single-Family, Industrial, Office, Retail, Other
const STANDARD_PHOTO_OPTIONS = [
  { count: 15, price: 179 },
  { count: 30, price: 199 },
  { count: 50, price: 259 },
];

// Multi-Family / Hotel photo tiers
const UNIT_PHOTO_OPTIONS = [
  { count: 10, price: 219 },
  { count: 15, price: 249 },
];

const VIDEO_TOUR_UPCHARGE = 50;
const PREMIER_UPCHARGE = 50;
const PER_UNIT_PRICE = 50;
const AERIAL_PRICE = 100;
const TWILIGHT_PER_PHOTO = 25;

function getPhotoOptions(propertyType: PropertyType) {
  return PER_UNIT_TYPES.includes(propertyType)
    ? UNIT_PHOTO_OPTIONS
    : STANDARD_PHOTO_OPTIONS;
}

export function RealEstatePackageBuilder() {
  const [propertyType, setPropertyType] = useState<PropertyType>(
    PROPERTY_TYPES[0]
  );
  const [tier, setTier] = useState<Tier>("professional");
  const photoOptions = getPhotoOptions(propertyType);
  const [photoCount, setPhotoCount] = useState<number>(photoOptions[0].count);
  const [videoTour, setVideoTour] = useState(false);
  const [units, setUnits] = useState(1);
  const [aerial, setAerial] = useState(false);
  const [twilight, setTwilight] = useState(false);
  const [twilightCount, setTwilightCount] = useState(3);

  const isPremier = tier === "premier";
  const isPerUnit = PER_UNIT_TYPES.includes(propertyType);

  // Reset photo count to a valid option whenever property type changes groups
  useEffect(() => {
    const options = getPhotoOptions(propertyType);
    if (!options.some((o) => o.count === photoCount)) {
      setPhotoCount(options[0].count);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyType]);

  const breakdown = useMemo(() => {
    const items: { label: string; price: number }[] = [];
    const options = getPhotoOptions(propertyType);
    const basePhoto = options.find((o) => o.count === photoCount)?.price ?? 0;
    const tierUpcharge = isPremier ? PREMIER_UPCHARGE : 0;

    items.push({
      label: `${TIER_INFO[tier].name} — ${photoCount} photos`,
      price: basePhoto + tierUpcharge,
    });

    if (isPerUnit) {
      items.push({
        label: `Additional Units (${units})`,
        price: units * PER_UNIT_PRICE,
      });
    }

    if (videoTour) {
      items.push({ label: "Video Tour", price: VIDEO_TOUR_UPCHARGE });
    }

    if (aerial) {
      items.push({ label: "Aerial / Drone Coverage", price: AERIAL_PRICE });
    }

    if (twilight) {
      if (isPremier) {
        items.push({ label: "Twilight Photos (included)", price: 0 });
      } else {
        items.push({
          label: `Twilight Photos (${twilightCount} photos)`,
          price: twilightCount * TWILIGHT_PER_PHOTO,
        });
      }
    }

    return items;
  }, [
    propertyType,
    photoCount,
    tier,
    isPremier,
    isPerUnit,
    units,
    videoTour,
    aerial,
    twilight,
    twilightCount,
  ]);

  const total = breakdown.reduce((sum, item) => sum + item.price, 0);

  return (
    <section
      id="builder"
      className="border-t border-white/10 bg-[#111008] py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-14 max-w-xl">
          <p className="font-body text-[13px] uppercase tracking-[0.3em] text-[#c9622a]">
            Build Your Package
          </p>
          <h2 className="mt-4 font-display text-4xl text-[#f2ede4] md:text-5xl">
            See your price, live
          </h2>
          <p className="mt-4 font-body text-sm text-[#f2ede4]/50">
            Select your property type, tier, and add-ons — your estimated
            total updates instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Configurator */}
          <div className="flex flex-col gap-10 lg:col-span-7">
            {/* Step 1: Property type */}
            <div>
              <p className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-[#f2ede4]/50">
                1. Property Type
              </p>
              <Select
                value={propertyType}
                onValueChange={(v) => setPropertyType(v as PropertyType)}
              >
                <SelectTrigger className="border-white/15 bg-transparent text-[#f2ede4]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {PROPERTY_TYPES.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Step 2: Tier */}
            <div>
              <p className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-[#f2ede4]/50">
                2. Select Quality Tier
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {(Object.keys(TIER_INFO) as Tier[]).map((key) => {
                  const info = TIER_INFO[key];
                  const active = tier === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setTier(key)}
                      className={`flex flex-col rounded-sm border p-6 text-left transition-colors ${
                        active
                          ? "border-[#c9622a] bg-[#c9622a]/[0.08]"
                          : "border-white/10 bg-white/[0.02] hover:border-white/25"
                      }`}
                    >
                      <span className="font-body text-xs uppercase tracking-[0.15em] text-[#f2ede4]/50">
                        {info.tagline}
                      </span>
                      <span className="mt-2 font-display text-lg leading-snug text-[#f2ede4]">
                        {info.name}
                      </span>
                      {key === "premier" && (
                        <span className="mt-1 font-body text-xs text-[#c9622a]">
                          +${PREMIER_UPCHARGE} over Professional
                        </span>
                      )}
                      <ul className="mt-4 flex flex-col gap-1.5">
                        {info.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 font-body text-xs text-[#f2ede4]/60"
                          >
                            <Check className="mt-0.5 h-3 w-3 shrink-0 text-[#c9622a]" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Services */}
            <div>
              <p className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-[#f2ede4]/50">
                3. Choose Services
              </p>
              <div className="flex flex-col divide-y divide-white/10 rounded-sm border border-white/10 bg-white/[0.02]">
                {/* Photography photo count */}
                <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-display text-lg text-[#f2ede4]">
                      Photography
                    </p>
                    <p className="font-body text-xs text-[#f2ede4]/50">
                      High-res interior &amp; exterior photos —{" "}
                      {isPerUnit
                        ? "priced for multi-unit properties"
                        : "priced by photo count"}
                    </p>
                  </div>
                  <Select
                    value={String(photoCount)}
                    onValueChange={(v) => setPhotoCount(Number(v))}
                  >
                    <SelectTrigger className="w-44 border-white/15 bg-transparent text-[#f2ede4]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {photoOptions.map((o) => (
                        <SelectItem key={o.count} value={String(o.count)}>
                          {o.count} photos — ${o.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Units (Multi-Family / Hotel only) */}
                {isPerUnit && (
                  <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-display text-lg text-[#f2ede4]">
                        Number of Units
                      </p>
                      <p className="font-body text-xs text-[#f2ede4]/50">
                        +${PER_UNIT_PRICE} per unit, up to 20 units
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setUnits((u) => Math.max(1, u - 1))}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-[#f2ede4]/70 hover:border-[#c9622a] hover:text-[#c9622a]"
                        aria-label="Decrease units"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center font-body text-sm text-[#f2ede4]">
                        {units}
                      </span>
                      <button
                        type="button"
                        onClick={() => setUnits((u) => Math.min(20, u + 1))}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-[#f2ede4]/70 hover:border-[#c9622a] hover:text-[#c9622a]"
                        aria-label="Increase units"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Video tour */}
                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <p className="font-display text-lg text-[#f2ede4]">
                      Video Tour
                    </p>
                    <p className="font-body text-xs text-[#f2ede4]/50">
                      Cinematic property walkthrough — +${VIDEO_TOUR_UPCHARGE}
                    </p>
                  </div>
                  <Switch checked={videoTour} onCheckedChange={setVideoTour} />
                </div>

                {/* Aerial / drone */}
                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <p className="font-display text-lg text-[#f2ede4]">
                      Aerial / Drone
                    </p>
                    <p className="font-body text-xs text-[#f2ede4]/50">
                      Stunning aerial shots &amp; video — ${AERIAL_PRICE}
                    </p>
                  </div>
                  <Switch checked={aerial} onCheckedChange={setAerial} />
                </div>

                {/* Twilight */}
                <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-display text-lg text-[#f2ede4]">
                      Twilight Photos
                    </p>
                    <p className="font-body text-xs text-[#f2ede4]/50">
                      {isPremier
                        ? "Included with Premier"
                        : `Dusk & golden hour captures — $${TWILIGHT_PER_PHOTO} / photo`}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    {twilight && !isPremier && (
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            setTwilightCount((c) => Math.max(1, c - 1))
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-[#f2ede4]/70 hover:border-[#c9622a] hover:text-[#c9622a]"
                          aria-label="Decrease twilight photo count"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center font-body text-sm text-[#f2ede4]">
                          {twilightCount}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setTwilightCount((c) => Math.min(20, c + 1))
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-[#f2ede4]/70 hover:border-[#c9622a] hover:text-[#c9622a]"
                          aria-label="Increase twilight photo count"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    )}
                    <Switch
                      checked={twilight}
                      onCheckedChange={setTwilight}
                      disabled={isPremier}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Live summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-sm border border-[#c9622a]/40 bg-[#0c0b09] p-8">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-[#f2ede4]/50">
                Your Package
              </p>
              <p className="mt-1 font-body text-sm text-[#f2ede4]/60">
                {propertyType}
              </p>

              <ul className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6">
                {breakdown.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between gap-4 font-body text-sm text-[#f2ede4]/70"
                  >
                    <span>{item.label}</span>
                    <span className="shrink-0 text-[#f2ede4]">
                      {item.price === 0 ? "Included" : `$${item.price}`}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6">
                <span className="font-body text-xs uppercase tracking-[0.2em] text-[#f2ede4]/50">
                  Estimated Total
                </span>
                <span className="font-display text-4xl text-[#c9622a]">
                  ${total}
                </span>
              </div>

              <Link
                href="#book"
                className="group mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-[#c9622a] py-4 font-body text-sm uppercase tracking-[0.2em] text-[#0c0b09] transition-colors hover:bg-[#e07539]"
              >
                Schedule a Shoot
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <p className="mt-4 text-center font-body text-[11px] text-[#f2ede4]/40">
                Pricing shown is for most local listings. A surcharge may
                apply in select high-cost markets — final quote confirmed
                after booking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
