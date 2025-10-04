"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import GiftSection from "@/components/GiftSection";
import Guestbook from "@/components/Guestbook";
import LoveStory from "@/components/LoveStory";

function InvitePageContent() {
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
      <Hero guest={guest} onOpen={handleOpen} isOpen={open} />

      {open && (
        <div id="details" className="w-full">
          <EventDetails />
          <LoveStory />
          {/* <Gallery /> */}
          <GiftSection />
          <Guestbook />
        </div>
      )}
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
      <InvitePageContent />
    </Suspense>
  );
}
