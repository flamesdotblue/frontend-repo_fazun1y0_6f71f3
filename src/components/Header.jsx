import { MapPin, Shield, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">
            SUP
          </div>
          <div>
            <h1 className="text-lg font-semibold leading-tight">PaddleBox</h1>
            <p className="text-xs text-gray-500">Samoobslužná půjčovna 24/7</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#rezervace" className="hover:text-gray-900 transition-colors flex items-center gap-2">
            <MapPin size={16} /> Lokality
          </a>
          <a href="#bezpeci" className="hover:text-gray-900 transition-colors flex items-center gap-2">
            <Shield size={16} /> Bezpečí
          </a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium shadow-sm hover:bg-gray-50">
          <User size={16} /> Přihlásit se
        </button>
      </div>
    </header>
  );
}
