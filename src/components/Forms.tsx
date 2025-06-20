import { motion } from 'framer-motion';

export default function Forms() {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden py-12 md:py-24">
      {/* Fundo decorativo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-indigo-300 mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-amber-300 mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16 relative z-10 mx-4">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Entre em <span className="bg-gradient-to-r from-indigo-600 to-amber-500 bg-clip-text text-transparent">contato</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Envie sua dúvida, sugestão ou questão. Estamos prontos para ouvir você.
          </p>
        </motion.div>

        {/* Formulário */}
        <form className="space-y-6 md:space-y-8">
          {/* Nome */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            <label htmlFor="name" className="text-slate-700 font-medium md:font-semibold mb-1">Nome</label>
            <input
              id="name"
              type="text"
              required
              placeholder="Seu nome completo"
              className="rounded-xl border border-slate-300 px-5 py-3 md:py-4 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            <label htmlFor="email" className="text-slate-700 font-medium md:font-semibold mb-1">E-mail</label>
            <input
              id="email"
              type="email"
              required
              placeholder="seu@email.com"
              className="rounded-xl border border-slate-300 px-5 py-3 md:py-4 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </motion.div>

          {/* Mensagem */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            <label htmlFor="message" className="text-slate-700 font-medium md:font-semibold mb-1">Mensagem</label>
            <textarea
              id="message"
              required
              rows={6}
              placeholder="Qual a sua dúvida ou questão?"
              className="rounded-xl border border-slate-300 px-5 py-3 md:py-4 text-base text-slate-800 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </motion.div>

          {/* Botão */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8"
          >
            <button
              type="submit"
              className="w-full py-3 md:py-4 text-base md:text-lg font-semibold rounded-full bg-gradient-to-r from-indigo-600 
              to-amber-500 text-white shadow-md hover:shadow-lg transition-all"
            >
              Enviar mensagem
            </button>
          </motion.div>
        </form>
      </div>
    </section>
  );
}