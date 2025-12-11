import React from 'react';
import { Calendar, Clock, MapPin, User, Star } from 'lucide-react';

const DateTimePicker = ({ data, onUpdate, areas, sitters }) => {
  const handleAreaChange = (e) => {
    onUpdate({ areaSlug: e.target.value, selectedSitterId: '' });
  };

  const handleSitterChange = (e) => {
    onUpdate({ selectedSitterId: e.target.value });
  };

  const availableSitters = sitters.filter((s) => s.areaSlug === data.areaSlug);

  return (
    <div className="space-y-6">
      {/* Επιλογή Περιοχής */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-sky-600" /> Περιοχή
        </label>
        <select
          value={data.areaSlug}
          onChange={handleAreaChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          <option value="">-- Επιλέξτε περιοχή --</option>
          {areas.map((a) => (
            <option key={a.id} value={a.slug}>{a.name}</option>
          ))}
        </select>
      </div>

      {/* Εμφάνιση Sitters */}
      {data.areaSlug && (
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
            <User className="w-4 h-4 text-sky-600" /> Διαθέσιμος Sitter
          </label>
          {availableSitters.length === 0 ? (
            <p className="text-sm text-slate-500">Δεν υπάρχουν διαθέσιμοι sitters σε αυτή την περιοχή.</p>
          ) : (
            <div className="grid gap-3 md:grid-cols-2">
              {availableSitters.map((s) => (
                <label
                  key={s.id}
                  className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition ${data.selectedSitterId == s.id ? 'border-sky-500 bg-sky-50' : 'border-gray-200 hover:border-sky-300'}`}
                >
                  <input
                    type="radio"
                    name="sitter"
                    value={s.id}
                    checked={data.selectedSitterId == s.id}
                    onChange={handleSitterChange}
                    className="sr-only"
                  />
                  <span className="text-2xl">{s.avatar}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800">{s.name}</p>
                    <div className="flex items-center gap-1 text-sm text-amber-600">
                      <Star className="w-3 h-3" /> {s.rating}
                    </div>
                  </div>
                  <span className="text-sm text-slate-600">από {s.price}€</span>
                </label>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Ημερομηνία & Ώρα */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-sky-600" /> Ημερομηνία
          </label>
          <input
            type="date"
            value={data.date}
            min={new Date().toISOString().split('T')[0]}
            onChange={(e) => onUpdate({ date: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
            <Clock className="w-4 h-4 text-sky-600" /> Ώρα
          </label>
          <select
            value={data.time}
            onChange={(e) => onUpdate({ time: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="">-- Επιλέξτε ώρα --</option>
            {['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'].map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default DateTimePicker;