import React, { useState } from "react";

const ContadorDePalavras: React.FC = () => {
  const [texto, setTexto] = useState("");
  const [frequencia, setFrequencia] = useState<Record<string, number>>({});

  const contarPalavras = () => {
    const palavras = texto
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean); 

    const contagem: Record<string, number> = {};

    for (const palavra of palavras) {
      contagem[palavra] = (contagem[palavra] || 0) + 1;
    }

    const ordenado = Object.entries(contagem)
      .sort((a, b) => b[1] - a[1])
      .reduce((acc, [palavra, count]) => {
        acc[palavra] = count;
        return acc;
      }, {} as Record<string, number>);

    setFrequencia(ordenado);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Contador de Palavras</h1>

      <textarea
        className="w-full h-32 p-2 border border-gray-300 rounded resize-none mb-2"
        placeholder="Digite seu texto aqui..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <button
        onClick={contarPalavras}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Contar Palavras
      </button>

      {Object.keys(frequencia).length > 0 && (
        <div className="mt-4">
          <h2 className="font-semibold mb-2">Resultado:</h2>
          <ul className="list-disc pl-5">
            {Object.entries(frequencia).map(([palavra, count]) => (
              <li key={palavra}>
                <strong>{palavra}</strong>: {count}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContadorDePalavras;
