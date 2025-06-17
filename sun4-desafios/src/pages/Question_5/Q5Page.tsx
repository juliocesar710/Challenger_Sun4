// src/App.tsx
export default function LandingPageSun4() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">Jurídico SUN4</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Contratar Agora
        </button>
      </header>

      {/* Hero */}
      <section className="bg-blue-50 py-16 text-center px-4">
        <h2 className="text-4xl font-bold mb-4 text-blue-900">Automatize sua rotina jurídica</h2>
        <p className="text-lg text-blue-700 mb-6 max-w-2xl mx-auto">
          O Jurídico SUN4 ajuda você a acompanhar até 10.000 processos com automações inteligentes.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Saiba mais
        </button>
      </section>

      {/* Planos */}
      <section className="py-16 px-4 bg-white">
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">Escolha seu plano</h3>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <div className="border p-6 rounded shadow hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-2">Plano I</h4>
            <p className="mb-4 text-gray-600">Acompanha até 5.000 processos</p>
            <p className="text-2xl font-bold text-blue-600 mb-4">R$ 99/mês</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Assinar</button>
          </div>
          <div className="border p-6 rounded shadow hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-2">Plano II</h4>
            <p className="mb-4 text-gray-600">Até 10.000 processos</p>
            <p className="text-2xl font-bold text-blue-600 mb-4">R$ 179/mês</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Assinar</button>
          </div>
          <div className="border p-6 rounded shadow hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-2">Plano III</h4>
            <p className="mb-4 text-gray-600">Plano personalizado para grandes escritórios</p>
            <p className="text-2xl font-bold text-blue-600 mb-4">Sob consulta</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Solicitar contato</button>
          </div>
        </div>
      </section>

      {/* Formulário de contato */}
      <section className="bg-gray-100 py-16 px-4">
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">Fale com a gente</h3>
        <form className="max-w-xl mx-auto space-y-6">
          <input type="text" placeholder="Seu nome" className="w-full p-3 border rounded" />
          <input type="email" placeholder="Seu e-mail" className="w-full p-3 border rounded" />
          <textarea placeholder="Sua mensagem" rows={4} className="w-full p-3 border rounded"></textarea>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Enviar mensagem
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center p-4 text-sm">
        &copy; 2025 Jurídico SUN4. Todos os direitos reservados.
      </footer>
    </div>
  );
}
