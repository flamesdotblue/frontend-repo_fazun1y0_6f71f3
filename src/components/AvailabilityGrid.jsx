import { Lock, Unlock, MapPin } from "lucide-react";

export default function AvailabilityGrid({ boards = [], onSelect }) {
  return (
    <section className="mt-8" aria-labelledby="volne">
      <div className="flex items-end justify-between">
        <div>
          <h2 id="volne" className="text-xl font-semibold">Dostupné paddleboardy</h2>
          <p className="text-sm text-gray-500">Okamžitě vidíte, co je volné a kde.</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {boards.map((b) => (
          <button
            key={b.id}
            onClick={() => onSelect?.(b)}
            className={`group text-left rounded-xl border p-4 transition shadow-sm hover:shadow-md ${
              b.available ? "border-green-200 bg-green-50/50" : "border-gray-200 bg-gray-50"
            }`}
            disabled={!b.available}
          >
            <div className="flex items-center justify-between">
              <div className="font-medium">{b.name}</div>
              <span
                className={`inline-flex items-center gap-1 text-xs rounded-full px-2 py-1 ${
                  b.available
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {b.available ? <Unlock size={14} /> : <Lock size={14} />}
                {b.available ? "Volné" : "Zaneprázdněné"}
              </span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
              <MapPin size={16} /> {b.location}
            </div>
            <div className="mt-3 text-xs text-gray-500">
              Poslední GPS: {b.lastSeen}
            </div>
            <div className="mt-4">
              <span className="inline-block text-xs font-medium text-blue-700 bg-blue-50 rounded-md px-2 py-1">
                Skříňka #{b.locker}
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
