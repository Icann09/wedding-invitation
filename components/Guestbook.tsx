"use client";
import { useState, useEffect } from "react";

type Message = {
  id: string;
  name: string;
  text: string;
  created_at: string;
};

export default function Guestbook() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  // Fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch("/api/guestbook");
      const data = await res.json();
      setMessages(data);
    };
    fetchMessages();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !text) return;

    const res = await fetch("/api/guestbook", {
      method: "POST",
      body: JSON.stringify({ name, text }),
      headers: { "Content-Type": "application/json" },
    });

    const newMessage = await res.json();
    setMessages([newMessage, ...messages]);
    setName("");
    setText("");
  };

  return (
    <section className="w-full max-w-xl mx-auto text-center py-16 px-4">
      <h2 className="text-3xl md:text-5xl font-meowScript font-bold text-pink-600 mb-6">Guestbook</h2>
      <p className="text-gray-600 mb-6">Leave your wishes & prayers for us 💌</p>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-4 mb-6 text-black">
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
        <button type="submit" className="w-full bg-pink-600 text-white rounded-lg py-2 hover:bg-pink-700">
          Submit
        </button>
      </form>

      <div className="space-y-4">
        {messages.length === 0 ? (
          <p className="text-gray-400">No messages yet. Be the first!</p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="bg-pink-50 border border-pink-100 rounded-lg p-4 text-left shadow-sm">
              <p className="font-semibold text-pink-700">{msg.name}</p>
              <p className="text-gray-700">{msg.text}</p>
              <p className="text-xs text-gray-400">🕒 {new Date(msg.created_at).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
