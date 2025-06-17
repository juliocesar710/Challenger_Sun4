import React from "react";
import '../../index.css'


const LayoutResponsivo: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Cabeçalho */}
      <header className="bg-blue-700 text-white text-center p-4 text-xl font-bold">
        Cabeçalho
      </header>

      {/* Conteúdo principal */}
      <main className="flex flex-col md:flex-row flex-1">
        <div className="flex-1 p-4 bg-blue-100 border md:border-r-2 border-blue-300 text-center">
          Coluna 1
        </div>
        <div className="flex-1 p-4 bg-blue-200 border md:border-r-2 border-blue-300 text-center">
          Coluna 2
        </div>
        <div className="flex-1 p-4 bg-blue-300 border border-blue-300 text-center">
          Coluna 3
        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-blue-700 text-white text-center p-4 text-sm">
        Rodapé
      </footer>
    </div>
  );
};

export default LayoutResponsivo;
