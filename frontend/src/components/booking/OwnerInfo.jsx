import React, { useState } from 'react';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { User, Mail, Phone, AlertCircle } from 'lucide-react';
import Input from '../common/Input';

const OwnerInfo = ({ data, onUpdate }) => {
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });

  // --- soft validators ---
  const validateName = (val) => {
    const trimmed = val.trim();
    if (!/^[\u0391-\u03C9a-zA-Z\s]{2,}$/.test(trimmed)) return 'Μόνο γράμματα';
    if (trimmed.split(/\s+/).filter(Boolean).length < 2) return 'Όνομα + επίθετο';
    return '';
  };

  const validateEmail = (val) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()) ? '' : 'Άκυρο email';

  const validatePhone = (raw) => {
    const phone = parsePhoneNumberFromString(raw, 'GR');
    return phone && phone.isValid() ? '' : 'Άκυρο κινητό';
  };

  // --- handlers ---
  const handleName = (e) => {
    const val = e.target.value;
    onUpdate({ ownerName: val });
    setErrors((s) => ({ ...s, name: validateName(val) }));
  };

  const handleEmail = (e) => {
    const val = e.target.value;
    onUpdate({ ownerEmail: val });
    setErrors((s) => ({ ...s, email: validateEmail(val) }));
  };

  const handlePhone = (e) => {
    const raw = e.target.value;
    onUpdate({ ownerPhone: raw });
    setErrors((s) => ({ ...s, phone: validatePhone(raw) }));
  };

  return (
    <div>
      {/* 1. Τίτλος με απαλό χρώμα */}
      <h2 className="text-2xl font-bold text-slate-700 mb-6 flex items-center gap-2">
        <User className="w-6 h-6 text-sky-600" />
        Τα Στοιχεία Σας
      </h2>

      <div className="space-y-5">
        {/* --- Όνομα --- */}
        <div>
          <Input
            label="Ονοματεπώνυμο"
            type="text"
            value={data.ownerName}
            onChange={handleName}
            placeholder="π.χ. Γιάννης Παπαδόπουλος"
            icon={User}
            required
            invalid={!!errors.name}
          />
          {errors.name && (
            <p className="text-sm text-sky-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" /> {errors.name}
            </p>
          )}
        </div>

        {/* --- Email --- */}
        <div>
          <Input
            label="Email"
            type="email"
            value={data.ownerEmail}
            onChange={handleEmail}
            placeholder="email@example.com"
            icon={Mail}
            required
            invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-sm text-sky-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" /> {errors.email}
            </p>
          )}
        </div>

        {/* --- Τηλέφωνο --- */}
        <div>
          <Input
            label="Τηλέφωνο"
            type="tel"
            value={data.ownerPhone}
            onChange={handlePhone}
            placeholder="69xxxxxxxx ή +30..."
            icon={Phone}
            required
            invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="text-sm text-sky-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" /> {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* 2. Info box σε αχνό sky-50 χωρίς έντονο περίγραμμα */}
      <div className="mt-6 bg-sky-50 rounded-lg p-4 border border-sky-100">
        <p className="text-sm text-slate-700 flex items-center gap-2">
          <Mail className="w-4 h-4 text-sky-400" />
          Θα λάβετε email επιβεβαίωσης στη διεύθυνση που καταχωρήσατε.
        </p>
      </div>
    </div>
  );
};

export default OwnerInfo;