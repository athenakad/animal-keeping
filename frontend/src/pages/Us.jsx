import React from 'react';

const Articles = () => (
  <div className="min-h-screen bg-gradient-to-br from-sky-50 to-sky-200 py-12 px-4">
    <div className="max-w-6xl mx-auto space-y-16">

      {/* ----- Γιατί Petting; (κεντρικό κείμενο) ----- */}
      <section className="text-center">
        <h1 className="text-4xl font-extrabold text-sky-800 mb-6">Γιατί Petting;</h1>
        <p className="text-sky-700 max-w-4xl mx-auto text-xl leading-relaxed">
          Το Petting δεν είναι απλά μια πλατφόρμα· είναι η γειτονιά όλων των κατοικιδίων.<br /><br />
          Συνδέουμε ανθρώπους που αγαπούν τα ζώα με ανθρώπους που τα φροντίζουν σαν δικά τους – γρήγορα, απλά και με ασφάλεια.<br /><br />
          Ταξίδι, υπερωρίες, απρογραμμάτιστη βόλτα; Βρίσκεις σε δευτερόλεπτα έμπιστο φιλοξενητή, έχεις ήσυχο το κεφάλι σου και το κατοικίδιο κάνει νέους φίλους.<br /><br />
          Και αν εσύ είσαι αυτός που λατρεύει την παρέα των ζώων, γίνεσαι μέλος μιας κοινότητας που ανταμείβεται για την αγάπη της – χωρίς γραφειοκρατία, χωρίς άγχος.<br /><br />
          Ένα κλικ, μια χειραψία, μια ουρά που κουνιέται ακόμα πιο χαρούμενα. Αυτό είναι το Petting.
        </p>
      </section>

      {/* ----- 4 γρήγορα μηνύματα ----- */}
      <section className="grid gap-6 text-center md:grid-cols-2">
        <div className="bg-white/70 rounded-2xl p-6 shadow-md">
          <p className="text-2xl font-semibold text-sky-800"> Ταξιδεύεις; Το σκυλί σου κοιμάται σε σπίτι με αγάπη, όχι σε κλουβί.</p>
        </div>
        <div className="bg-white/70 rounded-2xl p-6 shadow-md">
          <p className="text-2xl font-semibold text-sky-800"> Λείπεις πολύ; Η γάτα σου παίρνει χάδια, όχι άγχος.</p>
        </div>
        <div className="bg-white/70 rounded-2xl p-6 shadow-md">
          <p className="text-2xl font-semibold text-sky-800">  Έχεις κουνελάκι; Βρίσκεις άνθρωπο που ξέρει πως του αρέσει η παρέα, η σαλάτα και τα χάδια..</p>
        </div>
        <div className="bg-white/70 rounded-2xl p-6 shadow-md">
          <p className="text-2xl font-semibold text-sky-800">Θες παρέα; Κάνεις φίλους με τέσσερα πόδια και δύο πόδια ταυτόχρονα.</p>
        </div>
      </section>

    </div>
  </div>
);

export default Articles;