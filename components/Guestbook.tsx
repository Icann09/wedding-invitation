"use client";
import { useState } from "react";

type Message = {
  name: string;
  text: string;
};

export default function Guestbook() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !text) return;
    const newMessage = { name, text };
    setMessages([newMessage, ...messages]);
    setName("");
    setText("");
  };

  return (
    <section className="w-full max-w-xl mx-auto text-center py-16 px-4">
      <h2 className="text-3xl md:text-5xl font-meowScript font-bold text-pink-600 mb-6">Guestbook</h2>
      <p className="text-gray-600 mb-6">Leave your wishes & prayers for us 💌</p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 space-y-4 mb-6 text-black"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg px-4 py-2"
          required
        />
        <textarea
          placeholder="Your Message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border rounded-lg px-4 py-2"
          rows={3}
          required
        />
        <button
          type="submit"
          className="w-full bg-pink-600 text-white rounded-lg py-2 hover:bg-pink-700"
        >
          Submit
        </button>
      </form>

      {/* Messages */}
      <div className="space-y-4">
        {messages.length === 0 ? (
          <p className="text-gray-400">No messages yet. Be the first!</p>
        ) : (
          messages.map((msg, idx) => (
            <div
              key={idx}
              className="bg-pink-50 border border-pink-100 rounded-lg p-4 text-left shadow-sm"
            >
              <p className="font-semibold text-pink-700">{msg.name}</p>
              <p className="text-gray-700">{msg.text}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
