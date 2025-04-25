import React, { useState } from 'react';

const Section = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-700 p-4">
      <div
        className="cursor-pointer text-xl font-semibold hover:text-teal-300"
        onClick={() => setOpen(!open)}
      >
        {title}
      </div>
      {open && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4 text-teal-400">COTW Guide</h1>
      <Section title="Layton Lake District">
        <img src="https://i.imgur.com/bY9MEtA.jpg" alt="Layton Lake" className="w-full max-w-md mb-2 rounded-xl" />
        <Section title="Armas Recomendadas">Rifles leves (Classe 2-4), Arco composto.</Section>
        <Section title="Munições">.243, .270, Flechas leves.</Section>
        <Section title="Cães">Bloodhound (seguimento de pista).</Section>
        <Section title="Camuflagem">Florestal padrão / marrom.</Section>
        <Section title="Pelagens por Animal">
          Comum: Marrom | Incomum: Albino | Rara: Melanística
        </Section>
      </Section>
    </div>
  );
}