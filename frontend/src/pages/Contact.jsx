import React, { useState } from 'react';
import { Mail, User, MessageSquare } from 'lucide-react';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Το όνομα είναι υποχρεωτικό';
    if (!formData.email) {
      newErrors.email = 'Το email είναι υποχρεωτικό';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Μη έγκυρο email';
    }

    if (!formData.message) newErrors.message = 'Το μήνυμα είναι υποχρεωτικό';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    await new Promise(res => setTimeout(res, 1000)); // mock API call
    alert('Το μήνυμα εστάλη!');
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Επικοινωνήστε μαζί μας</h2>
          <p className="text-gray-600">Στείλτε μας το μήνυμά σας και θα σας απαντήσουμε άμεσα!</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Όνομα"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Το όνομά σας"
            icon={User}
            error={errors.name}
            required
          />

          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="email@example.com"
            icon={Mail}
            error={errors.email}
            required
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Μήνυμα</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Γράψτε το μήνυμά σας..."
              rows={5}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Αποστολή...' : 'Αποστολή'}
          </Button>
        </form>

        {/* Map */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Βρείτε μας στον χάρτη</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.5407824995715!2d23.7348!3d37.9755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU4JzMxLjgiTiAyM3CsNDQnMDUuMyJF!5e0!3m2!1sel!2sgr!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;