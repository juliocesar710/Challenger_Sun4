import React, { useState } from "react";

const ConversorDeDatas: React.FC = () => {
  const [entrada, setEntrada] = useState("");
  const [convertidas, setConvertidas] = useState<string[]>([]);

  const meses: Record<string, string> = {
    jan: "01", janeiro: "01",
    fev: "02", fevereiro: "02",
    mar: "03", março: "03",
    abr: "04", abril: "04",
    mai: "05", maio: "05",
    jun: "06", junho: "06",
    jul: "07", julho: "07",
    ago: "08", agosto: "08",
    set: "09", setembro: "09",
    out: "10", outubro: "10",
    nov: "11", novembro: "11",
    dez: "12", dezembro: "12",
  };

  const tratarData = (data: string): string => {
    data = data.toLowerCase().trim();

    if (/\d{2}\/\d{2}\/\d{4}/.test(data)) {
      const [dia, mes, ano] = data.split("/");
      return `${ano}-${mes}-${dia}`;
    }

    const partes = data
      .replace(/de/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .split(" ");

    if (partes.length === 3) {
      const [dia, mesTexto, ano] = partes;
      const mes = meses[mesTexto] || "00";
      return `${ano}-${mes}-${dia.padStart(2, "0")}`;
    }

    return "Data inválida";
  };

  const converterDatas = () => {
    const linhas = entrada.split("\n").filter(Boolean);
    const tratadas = linhas.map(tratarData);
    setConvertidas(tratadas);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Conversor de Datas</h1>

      <textarea
        className="w-full h-40 p-2 border border-gray-300 rounded resize-none mb-2"
        placeholder={`Digite uma data por linha, como:\n30/11/2022\n01 dez 2022\n31 de dezembro de 2022`}
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
      />

      <button
        onClick={converterDatas}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Converter Datas
      </button>

      {convertidas.length > 0 && (
        <div className="mt-4">
          <h2 className="font-semibold mb-2">Datas Convertidas:</h2>
          <ul className="list-disc pl-5 space-y-1">
            {convertidas.map((data, index) => (
              <li key={index} className={data === "Data inválida" ? "text-red-600" : ""}>
                {data}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ConversorDeDatas;
