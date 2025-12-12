import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { areas } from '../data/areas';

const Areas = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-sky-100 py-12 px-4">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-2">Επιλέξτε Περιοχή</h1>
        <p className="text-slate-600">Βρείτε τον κατάλληλο sitter δίπλα σας</p>
      </div>
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {areas.map((a) => (
          <button
            key={a.id}
            onClick={() => navigate(`/areas/${a.slug}`)}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center gap-3 border border-sky-100 hover:border-sky-300"
          >
            <MapPin className="w-8 h-8 text-sky-600" />
            <span className="text-slate-800 font-semibold">{a.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
export default Areas;