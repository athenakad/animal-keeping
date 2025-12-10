import React, { useState } from 'react';
import { User, Mail, Phone, PawPrint, Edit, Save } from 'lucide-react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || ''
  });

  const handleSave = () => {
    // TODO: API call to update profile
    console.log('Saving profile:', profileData);
    setIsEditing(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Συνδεθείτε για να δείτε το προφίλ σας
          </h2>
          <Button onClick={() => window.location.href = '/login'}>
            Σύνδεση
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Το Προφίλ μου</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Στοιχεία Χρήστη</h2>
                <Button
                  size="sm"
                  variant={isEditing ? 'success' : 'outline'}
                  onClick={isEditing ? handleSave : () => setIsEditing(true)}
                >
                  {isEditing ? (
                    <>
                      <Save className="w-4 h-4 mr-1" />
                      Αποθήκευση
                    </>
                  ) : (
                    <>
                      <Edit className="w-4 h-4 mr-1" />
                      Επεξεργασία
                    </>
                  )}
                </Button>
              </div>

              <div className="space-y-4">
                <Input
                  label="Ονοματεπώνυμο"
                  value={profileData.name}
                  onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                  icon={User}
                  disabled={!isEditing}
                />

                <Input
                  label="Email"
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  icon={Mail}
                  disabled={!isEditing}
                />

                <Input
                  label="Τηλέφωνο"
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                  icon={Phone}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Στατιστικά</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Κρατήσεις</span>
                  <span className="font-bold text-sky-700">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Κατοικίδια</span>
                  <span className="font-bold text-sky-700">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Μέλος από</span>
                  <span className="font-bold text-sky-700">2024</span>
                </div>
              </div>
            </div>

            <div className="bg-sky-700 rounded-xl shadow-md p-6 text-white">
              <PawPrint className="w-8 h-8 mb-3" />
              <h3 className="font-semibold mb-2">Προσθέστε Κατοικίδιο</h3>
              <p className="text-sm opacity-90 mb-4">
                Διαχειριστείτε όλα τα κατοικίδιά σας σε ένα μέρος
              </p>
              <Button size="sm" variant="secondary">
                Προσθήκη
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;