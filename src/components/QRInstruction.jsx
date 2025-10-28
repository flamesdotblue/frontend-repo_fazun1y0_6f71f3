import { QrCode, Shield } from "lucide-react";

export default function QRInstruction() {
  return (
    <section id="bezpeci" className="mt-12 rounded-2xl border border-gray-200 overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="p-6 sm:p-10">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <QrCode size={20}/> Otevření skříňky přes QR
          </h3>
          <p className="mt-2 text-gray-600 text-sm">
            Po vytvoření rezervace obdržíte unikátní QR kód. U samoobslužného boxu jej naskenujete a skříňka se automaticky odemkne.
          </p>
          <ul className="mt-4 text-sm text-gray-700 space-y-2 list-disc ml-5">
            <li>Kód je platný jen po dobu vaší rezervace.</li>
            <li>Po vrácení se skříňka sama uzamkne.</li>
            <li>Vše je bezkontaktní a dostupné 24/7.</li>
          </ul>
          <div className="mt-6 flex items-center gap-2 text-sm text-gray-700">
            <Shield size={18} className="text-blue-600"/>
            GPS a logy otevírání pro maximální bezpečí.
          </div>
        </div>
        <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-8 grid place-items-center">
          <div className="rounded-2xl bg-white/10 backdrop-blur p-6 border border-white/20 w-full max-w-xs">
            <div className="text-center">
              <div className="mx-auto h-20 w-20 rounded-lg bg-white text-blue-600 grid place-items-center">
                <QrCode size={40} />
              </div>
              <div className="mt-4 font-semibold">Naskenujte u boxu</div>
              <div className="text-sm text-white/80">Odemčení proběhne okamžitě</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
