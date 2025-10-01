"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import Gallery from "@/components/Gallery";
import GiftSection from "@/components/GiftSection";
import Guestbook from "@/components/Guestbook";

export default function InvitePage() {
  const searchParams = useSearchParams();
  const guest = searchParams.get("guest") || null; // /invite?guest=John → "John"
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      document
        .getElementById("details")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <main className="flex flex-col items-center bg-pink-50 min-h-screen">
      {/* 👇 now pass isOpen */}
      <Hero guest={guest} onOpen={handleOpen} isOpen={open} />

      {open && (
        <div id="details" className="w-full">
          <EventDetails />
          <Gallery />
          <GiftSection />
          <Guestbook />
        </div>
      )}
    </main>
  );
}
