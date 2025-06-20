import React, { useState } from "react";

const RemoverDuplicados: React.FC = () => {
  const [entrada, setEntrada] = useState("");
  const [resultado, setResultado] = useState<number[]>([]);

  const handleRemoverDuplicados = () => {
    const numeros = entrada
      .split(",")
      .map(num => parseInt(num.trim()))
      .filter(num => !isNaN(num));

    const unicos = [...new Set(numeros)];
    setResultado(unicos);
  };

  return (
    <main className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-2">Remover Duplicados</h1>

      <input
        type="text"
        placeholder="Ex: 1, 2, 2, 3, 4, 4, 5"
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full mb-2"
      />

      <button
        onClick={handleRemoverDuplicados}
        className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
      >
        Remover
      </button>

      <div className="mt-4">
        <h2 className="font-semibold">Resultado:</h2>
        <p>{resultado.join(", ") || "Nenhum número informado."}</p>
      </div>
    </main>
  );
};

export default RemoverDuplicados;
