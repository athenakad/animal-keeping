import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

/* ---------- 5 άρθρα (components) ---------- */
const ArticleHygiene = () => (
  <article className="prose prose-sky max-w-none">
    <h2 className="text-2xl font-semibold text-sky-800 mb-4">
      Βασικοί Κανόνες Υγιεινής στο Κοτέτσι
    </h2>
    <p>
      Καθαρίζουμε τα ποτήρια νερού κάθε μέρα, αφαιρούμε τα κόπρανα σε καθημερινή βάση
      και αερίζουμε το χώρο ώστε να μειώνουμε τον κίνδυνο ασθενειών.
    </p>
    <ul>
      <li>Αλλαγή σανού κάθε εβδομάδα</li>
      <li>Λευκαντικό σε αναλογία 1:10 για τις επιφάνειες</li>
      <li>Έλεγχος για ψύλλους & ακάρεα 1 φορά το μήνα</li>
    </ul>
  </article>
);

const ArticleSocialCat = () => (
  <article className="prose prose-sky max-w-none">
    <h2 className="text-2xl font-semibold text-sky-800 mb-4">
      Πώς να Κοινωνικοποιήσετε ένα Αδέσποτο Γατί
    </h2>
    <p>
      Η υπομονή είναι το κλειδί. Αφήστε το ζώο να ελέγχει την απόσταση, χρησιμοποιήστε
      λιχουδιές και μιλήστε του με ήρεμο τόνο ώστε να συνδέσει τη φωνή σας με θετικά συναισθήματα.
    </p>
    <ol>
      <li>Δημιουργήστε «ζώνη ασφαλείας» σε ένα δωμάτιο</li>
      <li>Κάθε μέρα καθίστε στο πάτωμα χωρίς να το πλησιάσετε</li>
      <li>Όταν έρθει κοντά, ανταμείψτε με κονσέρβα</li>
    </ol>
  </article>
);

const ArticleDogDiet = () => (
  <article className="prose prose-sky max-w-none">
    <h2 className="text-2xl font-semibold text-sky-800 mb-4">
      Σωστή Διατροφή για τον Σκύλο σας
    </h2>
    <p>
      Το κρέας πρέπει να είναι η πρώτη ύλη στη λίστα. Αποφύγετε τα γεμάτα συντηρητικά
      «economy» τροφές και προτιμήστε κροκέτες με ποσοστό πρωτεΐνης &gt; 26 %.
    </p>
    <table className="table-auto w-full text-left border-collapse border border-sky-300">
      <thead>
        <tr className="bg-sky-100">
          <th className="border border-sky-300 px-4 py-2">Βάρος σκύλου</th>
          <th className="border border-sky-300 px-4 py-2">Καθημερινές θερμίδες</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-sky-300 px-4 py-2">5 kg</td><td className="border border-sky-300 px-4 py-2">550 kcal</td></tr>
        <tr><td className="border border-sky-300 px-4 py-2">20 kg</td><td className="border border-sky-300 px-4 py-2">1 300 kcal</td></tr>
        <tr><td className="border border-sky-300 px-4 py-2">40 kg</td><td className="border border-sky-300 px-4 py-2">2 200 kcal</td></tr>
      </tbody>
    </table>
  </article>
);

const ArticleRabbitCheck = () => (
  <article className="prose prose-sky max-w-none">
    <h2 className="text-2xl font-semibold text-sky-800 mb-4">
      Καθημερινός Έλεγχος Υγείας στα Κουνέλια
    </h2>
    <p>
      Τα κουνέλια κρύβουν εύκολα τα συμπτώματα. Κοιτάξτε μύτη, μάτια, αυτιά και οπίσθια
      κάθε πρωί – κάθε αλλαγή στην όρεξη ή στα κόπρανα μπορεί να δείξει πρόβλημα σε 24 h.
    </p>
    <ul>
      <li>Μύτη: πρέπει να είναι στεγνή, χωρίς κρούστα</li>
      <li>Νύχια: ελέγχος μήκους κάθε εβδομάδα</li>
      <li>Τρίχωμα: λαμπερό, χωρίς φαλακρά σημεία</li>
    </ul>
  </article>
);

const ArticleTransport = () => (
  <article className="prose prose-sky max-w-none">
    <h2 className="text-2xl font-semibold text-sky-800 mb-4">
      Μειώνοντας το Στρες κατά τη Μεταφορά Ζώων
    </h2>
    <p>
      Τα ζώα αντιδρούν στο άγνωστο. Βάλτε οικεία μαξιλάρια ή παπλώματα με τη μυρωδιά του
      σπιτιού, σκεπάστε το κλουβί ώστε να μη βλέπουν κίνηση και αποφύγετε δυνατές μουσικές.
    </p>
    <ol>
      <li>Νηστικό ζώο 3 h πριν το ταξίδι (όχι νερό)</li>
      <li>Στάσεις ανά 2 h για σκύλους &gt; 30 kg</li>
      <li>Θερμοκρασία αέρα 20-24 °C στο όχημα</li>
    </ol>
  </article>
);

/* χάρτης id → component */
const articleMap = {
  hygiene: ArticleHygiene,
  "social-cat": ArticleSocialCat,
  "dog-diet": ArticleDogDiet,
  "rabbit-check": ArticleRabbitCheck,
  transport: ArticleTransport,
};

/* λίστα άρθρων */
const list = [
  { id: "hygiene", title: "Βασικοί Κανόνες Υγιεινής στο Κοτέτσι" },
  { id: "social-cat", title: "Κοινωνικοποίηση Αδέσποτου Γατιού" },
  { id: "dog-diet", title: "Σωστή Διατροφή για τον Σκύλο σας" },
  { id: "rabbit-check", title: "Καθημερινός Έλεγχος Υγείας στα Κουνέλια" },
  { id: "transport", title: "Μειώνοντας το Στρες κατά τη Μεταφορά Ζώων" },
];

/* σελίδα ενός άρθρου */
function ArticleScreen() {
  const { id } = useParams();
  const Component = articleMap[id];
  if (!Component) return <p className="text-sky-700">Το άρθρο δεν βρέθηκε.</p>;
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-sky-200 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6">
        <Component />
        <Link
          to="/articles"
          className="inline-block mt-6 text-sky-700 hover:text-sky-900 underline"
        >
          ← Επιστροφή στα άρθρα
        </Link>
      </div>
    </div>
  );
}

/* αρχική λίστα */
function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-sky-200 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-sky-800 mb-6">Άρθρα</h1>
        <div className="grid gap-4">
          {list.map((a) => (
            <Link
              key={a.id}
              to={`/articles/${a.id}`}
              className="block bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-sky-700">{a.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* κύριο component – χωρίς BrowserRouter! */
export default function Articles() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<ArticleScreen />} />
    </Routes>
  );
}