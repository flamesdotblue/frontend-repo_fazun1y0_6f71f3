import { useMemo, useState } from "react";
import Header from "./components/Header";
import AvailabilityGrid from "./components/AvailabilityGrid";
import BookingForm from "./components/BookingForm";
import QRInstruction from "./components/QRInstruction";

function App() {
  // Mock data for boards; ready to be replaced by API later
  const [boards] = useState([
    { id: "sup-01", name: "Allround 10'6", location: "Nábřeží – Molo A", available: true, locker: 3, lastSeen: "před 5 min" },
    { id: "sup-02", name: "Touring 12'6", location: "Nábřeží – Molo A", available: false, locker: 4, lastSeen: "před 1 min" },
    { id: "sup-03", name: "Allround 10'6", location: "Jezero – Sever", available: true, locker: 1, lastSeen: "před 2 min" },
    { id: "sup-04", name: "Kids 8'6", location: "Jezero – Sever", available: true, locker: 2, lastSeen: "před 8 min" },
    { id: "sup-05", name: "Yoga 10'8", location: "Písečná pláž", available: false, locker: 5, lastSeen: "před 3 min" },
  ]);

  const availableCount = useMemo(() => boards.filter(b => b.available).length, [boards]);

  const handleBook = (payload) => {
    // Here we'll later call the backend to create a reservation and generate QR code
    console.log("Booking payload", payload);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main className="max-w-6xl mx-auto px-4">
        {/* Hero */}
        <section className="mt-10 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium">
              Nonstop 24/7 · {availableCount} volných právě teď
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Samoobslužná půjčovna paddleboardů
            </h2>
            <p className="mt-3 text-gray-600">
              Rezervujte během pár vteřin, odemkněte skříňku přes QR a vyrazte na vodu. GPS monitoring pro přehled a bezpečí.
            </p>
            <a href="#rezervace" className="mt-6 inline-flex items-center rounded-md bg-blue-600 text-white px-5 py-3 font-medium shadow hover:bg-blue-700">
              Začít s rezervací
            </a>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 shadow-inner" />
          </div>
        </section>

        <AvailabilityGrid boards={boards} onSelect={(b) => window.scrollTo({ top: document.body.scrollHeight / 3, behavior: 'smooth' })} />

        <BookingForm boards={boards} onBook={handleBook} />

        <QRInstruction />

        <footer className="py-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} PaddleBox – Bez obsluhy, kdykoli.
        </footer>
      </main>
    </div>
  );
}

export default App;
