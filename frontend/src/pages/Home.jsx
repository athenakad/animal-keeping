import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Shield, Clock, Heart } from 'lucide-react';
import Button from '../components/common/Button';

const Home = () => {
  const features = [
    { icon: Calendar, title: 'Εύκολη Κράτηση', description: 'Κλείστε ραντεβού σε λίγα απλά βήματα' },
    { icon: Shield, title: 'Ασφάλεια', description: 'Πιστοποιημένοι επαγγελματίες' },
    { icon: Clock, title: 'Ευέλικτο Ωράριο', description: 'Διαθέσιμοι όλες τις ημέρες της εβδομάδας' },
    { icon: Heart, title: 'Φροντίδα με Αγάπη', description: 'Μεταχειριζόμαστε τα κατοικίδιά σας σαν δικά μας' }
  ];

  return (
    // 1. Σχεδόν λευκό, απαλή ψύχρα
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50">

      {/* ---------- HERO ---------- */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* 2. Μαλακό σκούρο γκρι */}
          <h1 className="text-5xl md:text-6xl font-bold text-slate-600 mb-6">
            Φροντίδα για όλα τα
            <br />
            <span className="text-slate-600">Κατοικίδιά σας</span>
          </h1>

          {/* 4. Ζεστό γκρι κείμενο */}
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Κλείστε εύκολα ραντεβού για τον μικρό σας φίλο. Σκύλοι, γάτες, πουλιά και πολλά άλλα!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              {/* 5. Δικό σας Button με variant="ocean" → τώρα παίρνει ήπιο sky-400 */}
              <Button size="lg" variant="ocean">
                Κάντε Κράτηση Τώρα
              </Button>
            </Link>
            <Link to="/register">
              {/* 6. Outline με ανοιχτό γαλάζιο περίγραμμα */}
              <Button size="lg" variant="outline">
                Εγγραφή
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- FEATURES ---------- */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-700 mb-12">
            Γιατί να μας επιλέξετε;
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-xl hover:bg-sky-50/40 transition"
              >
                {/* 7. Αχνό sky-100 background + sky-400 εικονίδιο */}
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-sky-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      {/* 8. Ανοιχτό γαλάζιο φόντο, σκούρα γράμματα – όχι έντονο κοντράστ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-sky-100 rounded-2xl p-12 text-center text-slate-800">
          <h2 className="text-3xl font-bold mb-4">Έτοιμοι να ξεκινήσετε;</h2>
          <p className="text-xl mb-8 opacity-90">Κλείστε το πρώτο σας ραντεβού σήμερα!</p>
          <Link to="/booking">
            {/* 9. Λευκό κουμπί με λεπτό περίγραμμα */}
            <Button size="lg" variant="outline">
              Κράτηση Ραντεβού
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;