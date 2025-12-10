import React from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Ανάκτηση κωδικού</h2>
      <p className="text-gray-600 mb-6">
        Εισάγετε το email σας και θα σας στείλουμε οδηγίες για να τον αλλάξετε.
      </p>

      <form>
        <label className="block mb-2 text-gray-700">Email</label>
        <input
          type="email"
          className="w-full border rounded px-3 py-2 mb-4"
          placeholder="pet@example.com"
        />
        <button
          type="submit"
          className="w-full bg-sky-600 text-white py-2 rounded hover:bg-sky-700"
        >
          Αποστολή
        </button>
      </form>

      <div className="text-center mt-4">
        <Link to="/login" className="text-sky-600 hover:underline">
          Επιστροφή στη Σύνδεση
        </Link>
      </div>
    </div>
  );
}