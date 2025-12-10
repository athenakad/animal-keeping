
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-sky-600 mb-4">404</h1>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Η σελίδα δεν βρέθηκε
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Η σελίδα που ψάχνετε δεν υπάρχει ή έχει μετακινηθεί.
        </p>
        <Link to="/">
          <Button>
            <Home className="w-5 h-5 mr-2" />
            Επιστροφή στην Αρχική
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;