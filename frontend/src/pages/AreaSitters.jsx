import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ArrowLeft } from 'lucide-react';
import { areas } from '../data/areas';

const AreaSitters = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const area = areas.find((a) => a.slug === slug);
  const areaSitters = sitters.filter((s) => s.areaSlug === slug);

  if (!area) return <p className="p-8">Η περιοχή δεν βρέθηκε.</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-sky-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sky-600 mb-6">
          <ArrowLeft className="w-4 h-4" /> Πίσω
        </button>
        <h1 className="text-3xl font-bold text-slate-800 mb-8">Sitters στην περιοχή «{area.name}»</h1>
        {areaSitters.length === 0 ? (
          <p className="text-slate-600">Δεν υπάρχουν διαθέσιμοι sitters αυτή τη στιγμή.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areaSitters.map((s) => (
              <div key={s.id} className="bg-white rounded-xl shadow p-6 flex flex-col gap-3 border border-sky-100">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{s.avatar}</span>
                  <div>
                    <p className="font-semibold text-slate-800">{s.name}</p>
                    <div className="flex items-center gap-1 text-sm text-amber-600"><Star className="w-4 h-4" /> {s.rating}</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600">Από {s.price}€ / επίσκεψη</p>
                <div className="mt-auto pt-3 flex gap-2">
                  <button onClick={() => navigate(`/sitters/${s.id}`)} className="flex-1 bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700">Προφίλ</button>
                  <button onClick={() => navigate(`/booking?sitter=${s.id}`)} className="flex-1 border border-sky-600 text-sky-600 py-2 rounded-lg hover:bg-sky-50">Κράτηση</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default AreaSitters;