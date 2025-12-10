import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const DateTimePicker = ({ data, onUpdate }) => {
  const availableTimes = [
    '09:00','10:00','11:00','12:00','14:00','15:00','16:00','17:00','18:00'
  ];

  return (
    <div>
      {/* 1. Τίτλος με απαλό sky-400 αντί για sky */}
      <h2 className="text-2xl font-bold text-slate-700 mb-6 flex items-center gap-2">
        <Calendar className="w-6 h-6 text-sky-700" />
        Επιλέξτε Ημερομηνία & Ώρα
      </h2>

      <div className="space-y-6">
        {/* --- Date Picker --- */}
        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-2">
            Ημερομηνία <span className="text-sky-600">*</span>
          </label>
          <input
            type="date"
            value={data.date}Φ
            onChange={(e) => onUpdate({ date: e.target.value })}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg
                       focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-200
                       transition"
          />
        </div>

        {/* --- Time Slots --- */}
        <div>
          <label className="block text-sm font-semibold text-slate-600 mb-2">
            Διαθέσιμες Ώρες <span className="text-sky-700">*</span>
          </label>
          <div className="grid grid-cols-3 gap-3">
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => onUpdate({ time })}
                className={`py-3 rounded-lg font-semibold transition-all ${
                  data.time === time
                  ? 'bg-sky-100 text-sky-700 border-sky-300'
                  : 'bg-white text-slate-700 border-gray-200 hover:bg-gray-50'
              }`}
            >
                <Clock className="w-4 h-4 inline mr-1" />
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* --- Selected Preview --- */}
        {data.date && data.time && (
          <div className="bg-sky-50 border border-sky-100 rounded-lg p-4 text-slate-700 text-sm">
            <strong>Επιλεγμένο Ραντεβού:</strong>{' '}
            {new Date(data.date).toLocaleDateString('el-GR')} στις {data.time}
          </div>
        )}
      </div>
    </div>
  );
};

export default DateTimePicker;