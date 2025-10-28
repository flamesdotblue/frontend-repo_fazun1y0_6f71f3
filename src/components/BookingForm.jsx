import { useMemo, useState } from "react";
import { Calendar, Clock, MapPin, ArrowRight, CheckCircle } from "lucide-react";

export default function BookingForm({ boards = [], onBook }) {
  const [boardId, setBoardId] = useState(boards.find(b => b.available)?.id || "");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [hours, setHours] = useState(2);
  const [success, setSuccess] = useState(null);

  const selectedBoard = useMemo(() => boards.find(b => b.id === boardId), [boards, boardId]);

  const canSubmit = boardId && date && start && hours > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    const payload = { boardId, date, start, hours };
    onBook?.(payload);
    setSuccess({
      code: Math.random().toString(36).substring(2, 8).toUpperCase(),
      board: selectedBoard,
    });
  };

  return (
    <section id="rezervace" className="mt-10" aria-labelledby="rezervace-title">
      <h2 id="rezervace-title" className="text-xl font-semibold">Rychlá rezervace</h2>
      <p className="text-sm text-gray-500">Vyberte paddleboard, čas a délku. Kód obdržíte ihned.</p>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <form onSubmit={handleSubmit} className="lg:col-span-2 rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Paddleboard</span>
              <select
                value={boardId}
                onChange={(e) => setBoardId(e.target.value)}
                className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>Vyberte volný paddleboard</option>
                {boards.filter(b => b.available).map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name} · {b.location}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700 flex items-center gap-2"><Calendar size={16}/> Datum</span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700 flex items-center gap-2"><Clock size={16}/> Začátek</span>
              <input
                type="time"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Délka (hod)</span>
              <input
                type="number"
                min={1}
                max={12}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-600 flex items-center gap-2">
              <MapPin size={16} />
              {selectedBoard ? (
                <span>
                  {selectedBoard.location} · Skříňka #{selectedBoard.locker}
                </span>
              ) : (
                <span>Zvolte volný paddleboard</span>
              )}
            </div>
            <button
              type="submit"
              disabled={!canSubmit}
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 font-medium shadow hover:bg-blue-700 disabled:opacity-50"
            >
              Pokračovat <ArrowRight size={18} />
            </button>
          </div>
        </form>

        <div className="rounded-xl border border-gray-200 p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
          <h3 className="font-semibold mb-2">Jak to funguje</h3>
          <ol className="text-sm text-gray-700 space-y-2 list-decimal ml-5">
            <li>Rezervujte paddleboard a obdržíte QR kód.</li>
            <li>Přijďte ke skříňce a naskenujte kód.</li>
            <li>Skříňka se otevře, vezmete vybavení a můžete na vodu.</li>
          </ol>
          <div className="mt-4 text-xs text-gray-600">
            GPS sledování je aktivní po celou dobu zápůjčky pro vaši bezpečnost.
          </div>
        </div>
      </div>

      {success && (
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 flex items-start gap-3">
          <CheckCircle className="text-green-600" size={20} />
          <div className="text-sm">
            <div className="font-medium">Rezervace potvrzena!</div>
            <div className="text-gray-700 mt-1">
              Kód k otevření: <span className="font-mono font-semibold">{success.code}</span>
            </div>
            <div className="text-gray-600 mt-1">
              {success.board?.name} · Skříňka #{success.board?.locker} · {success.board?.location}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
