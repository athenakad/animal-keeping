import React, { useState } from 'react';
import { PawPrint, Camera } from 'lucide-react';
import Input from '../common/Input';

const PetInfo = ({ data, onUpdate }) => {
  const petTypes = [
    'Σκύλος', 'Γάτα', 'Πουλί', 'Κουνέλι',
    'Χάμστερ', 'Ερπετό', 'Ψάρι', 'Άλλο'
  ];

  const [errors, setErrors] = useState({
    petName: '',
    petType: '',
    petBreed: '',
    petAge: '',
    specialNeeds: '',
  });

  /* ---------- validators ---------- */
  const validateName = (v) =>
    /^[\u0391-\u03C9a-zA-Z\s]{2,}$/.test(v.trim()) ? '' : 'Μόνο γράμματα, ≥2 χαρακτήρες';

  const validateType = (v) => (v ? '' : 'Επιλέξτε τύπο');

  const validateBreed = (v) =>
    /^[\u0391-\u03C9a-zA-Z\s]{3,}$/.test(v.trim()) ? '' : 'Μόνο γράμματα, ≥3 χαρακτήρες';

  const validateAge = (v) =>
    /^\d+\s+(χρονών|χρόνια|μηνών|μήνες)$/.test(v.trim())
      ? ''
      : 'Π.χ. «3 χρόνια» ή «6 μηνών»';

  const validateSpecial = (v) =>
    !v || v.trim().length >= 10 ? '' : 'Τουλάχιστον 10 χαρακτήρες';

  /* ---------- handlers ---------- */
  const handle = (field, validator) => (e) => {
    const val = e.target.value;
    onUpdate({ [field]: val });
    setErrors((s) => ({ ...s, [field]: validator(val) }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => onUpdate({ petPhoto: reader.result });
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <PawPrint className="w-6 h-6 mr-2 text-sky-600" />
        Στοιχεία Κατοικιδίου
      </h2>

      <div className="space-y-4">
        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Φωτογραφία (προαιρετικό)
          </label>
          <div className="flex items-center space-x-4">
            {data.petPhoto && (
              <img
                src={data.petPhoto}
                alt="Pet"
                className="w-24 h-24 rounded-full object-cover border-4 border-sky-100"
              />
            )}
            <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-lg flex items-center transition-colors">
              <Camera className="w-5 h-5 mr-2" />
              {data.petPhoto ? 'Αλλαγή Φωτογραφίας' : 'Επιλογή Φωτογραφίας'}
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Pet Name */}
        <div>
          <Input
            label="Όνομα Κατοικιδίου"
            type="text"
            value={data.petName}
            onChange={handle('petName', validateName)}
            placeholder="π.χ. Μπομπ"
            icon={PawPrint}
            required
            invalid={!!errors.petName}
          />
          {errors.petName && <small className="text-red-600 text-sm">{errors.petName}</small>}
        </div>

        {/* Pet Type */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Τύπος Κατοικιδίου <span className="text-red-500">*</span>
          </label>
          <select
            value={data.petType}
            onChange={handle('petType', validateType)}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none ${
              errors.petType ? 'border-red-500' : 'border-gray-300 focus:border-sky-500'
            }`}
          >
            <option value="">Επιλέξτε τύπο</option>
            {petTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.petType && <small className="text-red-600 text-sm">{errors.petType}</small>}
        </div>

        {/* Breed & Age */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input
              label="Ράτσα"
              type="text"
              value={data.petBreed}
              onChange={handle('petBreed', validateBreed)}
              placeholder="π.χ. Golden Retriever"
              invalid={!!errors.petBreed}
            />
            {errors.petBreed && <small className="text-red-600 text-sm">{errors.petBreed}</small>}
          </div>

          <div>
            <Input
              label="Ηλικία"
              type="text"
              value={data.petAge}
              onChange={handle('petAge', validateAge)}
              placeholder="π.χ. 3 χρόνια"
              invalid={!!errors.petAge}
            />
            {errors.petAge && <small className="text-red-600 text-sm">{errors.petAge}</small>}
          </div>
        </div>

        {/* Special Needs */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Ιδιαίτερες Ανάγκες (προαιρετικό)
          </label>
          <textarea
            value={data.specialNeeds}
            onChange={handle('specialNeeds', validateSpecial)}
            placeholder="π.χ. Αλλεργίες, φάρμακα, συμπεριφορά..."
            rows="4"
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none ${
              errors.specialNeeds ? 'border-red-500' : 'border-gray-300 focus:border-sky-500'
            }`}
          />
          {errors.specialNeeds && (
            <small className="text-red-600 text-sm">{errors.specialNeeds}</small>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetInfo;