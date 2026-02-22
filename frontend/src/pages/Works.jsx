import React, { useState, useRef, useEffect } from 'react';

const howItWorksData = {
  owner: [
    { step: 1, title: 'Δημιούργησε προφίλ', desc: 'Γράψου, πρόσθεσε φωτογραφίες και πες μας λίγα λόγια για το κατοικίδιό σου.' },
    { step: 2, title: 'Βρες sitter', desc: 'Ψάξε με φίλτρα και κριτικές στην περιοχή σου.' },
    { step: 3, title: 'Στείλε αιτήματα', desc: 'Στείλε σε 2-3 sitters για άμεση διαθεσιμότητα.' },
    { step: 4, title: 'Πάρε απάντηση', desc: 'Μόλις κάποιος αποδεχτεί, λαμβάνεις ειδοποίηση.' },
    { step: 5, title: 'Κλείσε την κράτηση', desc: 'Πληρώνεις μέσω της πλατφόρμας και τα τηλέφωνα εμφανίζονται.' },
  ],
  sitter: [
    { step: 1, title: 'Δημιούργησε προφίλ sitter', desc: 'Πρόσθεσε φωτογραφίες, περιγραφή και τις υπηρεσίες που προσφέρεις.' },
    { step: 2, title: 'Περίμενε αιτήματα', desc: 'Οι ιδιοκτήτες θα σου στέλνουν αιτήματα για φιλοξενία ή βόλτα.' },
    { step: 3, title: 'Αποδέξου ή απόρριψε', desc: 'Έχεις τον έλεγχο – διάλεξε όποιο αίτημα σου ταιριάζει.' },
    { step: 4, title: 'Συζήτησε τις λεπτομέρειες', desc: 'Μόλις αποδεχτείς, επικοινωνείς απευθείας με τον ιδιοκτήτη.' },
    { step: 5, title: 'Απόλαυσε τη φιλοξενία', desc: 'Φρόντισε το ζωάκι, κέρδισε την αμοιβή σου και τη θετική κριτική!' },
  ],
};

export default function HowItWorks() {
  const [active, setActive] = useState('owner');
  const topRef = useRef(null);

  return (
    <section ref={topRef} className="py-20 px-40 bg-gradient-to-br from-sky-50 to-sky-100">
      <div className="max-w-3xl mx-auto">

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setActive('owner')}
            className={`px-6 py-2 rounded-l-full font-semibold transition ${active === 'owner' ? 'bg-sky-600 text-white' : 'bg-white text-sky-600'}`}
          >
            Ιδιοκτήτης
          </button>
          <button
            onClick={() => setActive('sitter')}
            className={`px-6 py-2 rounded-r-full font-semibold transition ${active === 'sitter' ? 'bg-sky-600 text-white' : 'bg-white text-sky-600'}`}
          >
            Sitter
          </button>
        </div>

        {/* Steps - ένα κάτω από το άλλο */}
        <div className="space-y-6">
          {howItWorksData[active].map((item) => (
            <div key={item.step} className="flex items-start gap-4">
              <div className="text-5xl font-bold text-sky-600 leading-none">{item.step}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}