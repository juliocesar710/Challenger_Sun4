import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const plans = [
  {
    name: "Essencial",
    price: "R$ 49/mês",
    benefits: [
      "Acesso básico à plataforma",
      "Suporte via e-mail",
      "1 usuário por conta",
    ],
    color: "from-indigo-500 to-indigo-700",
    bgColor: "bg-indigo-50",
  },
  {
    name: "Profissional",
    price: "R$ 99/mês",
    benefits: [
      "Tudo do Essencial",
      "Relatórios avançados",
      "Suporte prioritário",
      "Até 3 usuários",
    ],
    color: "from-emerald-500 to-emerald-700",
    bgColor: "bg-emerald-50",
  },
  {
    name: "Corporativo",
    price: "R$ 199/mês",
    benefits: [
      "Tudo do Profissional",
      "Consultoria personalizada",
      "Acesso API completo",
      "Usuários ilimitados",
    ],
    color: "from-amber-500 to-amber-700",
    bgColor: "bg-amber-50",
  },
];

export default function Plans() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-36 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-indigo-300 mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-amber-300 mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-center gap-20">
        {/* Cabeçalho */}
        <motion.div
          className="text-center max-w-3xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Escolha o <span className="bg-gradient-to-r from-indigo-600 to-amber-500 bg-clip-text text-transparent">plano ideal</span> para você
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Cada plano foi desenhado com vantagens únicas para atender diferentes perfis de uso. Escolha com tranquilidade.
          </p>
        </motion.div>

        {/* Cards dos planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: 'easeOut' }}
              className={`rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.bgColor} flex flex-col justify-between min-h-[500px]`}
            >
              <div>
                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                  {plan.name}
                </h3>
                <p className="text-4xl font-extrabold text-slate-800 mb-8">{plan.price}</p>
                <ul className="space-y-5 text-left text-slate-700 text-base leading-relaxed">
                  {plan.benefits.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-emerald-500 w-5 h-5 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-10 py-3.5 text-lg bg-gradient-to-r ${plan.color} text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all`}
              >
                Assinar {plan.name}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
