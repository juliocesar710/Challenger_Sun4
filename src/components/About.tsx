import { motion } from 'framer-motion';
import { ShieldCheck, ThumbsUp, Lightbulb } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    title: "Confiabilidade Jurídica",
    desc: "Desenvolvido com base nas melhores práticas do setor legal para garantir segurança em cada processo.",
    icon: <ShieldCheck size={48} className="text-indigo-600" />,
    color: "from-indigo-500 to-indigo-700",
    bgColor: "bg-indigo-50",
  },
  {
    title: "Experiência Intuitiva",
    desc: "Interface moderna, fluida e pensada para sua produtividade desde o primeiro acesso.",
    icon: <ThumbsUp size={48} className="text-emerald-600" />,
    color: "from-emerald-500 to-emerald-700",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Inovação Constante",
    desc: "Atualizações contínuas baseadas em feedback real, entregando o que realmente importa.",
    icon: <Lightbulb size={48} className="text-amber-600" />,
    color: "from-amber-500 to-amber-700",
    bgColor: "bg-amber-50",
  },
];

export default function ExploreSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-indigo-300 mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-amber-300 mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Conheça a <span className="bg-gradient-to-r from-indigo-600 to-amber-500 bg-clip-text text-transparent">SUN4</span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Descubra uma plataforma projetada para <span className="font-medium text-slate-800">instigar, envolver e surpreender</span>.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 justify-items-center">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative w-full max-w-md h-[480px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Card Front */}
              <motion.div
                className={`absolute inset-0 ${feat.bgColor} flex flex-col items-center justify-center p-8 sm:p-10 md:p-12 text-center`}
                animate={{
                  opacity: hoveredCard === index ? 0 : 1,
                  y: hoveredCard === index ? -20 : 0
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <motion.div 
                  className={`mb-6 p-5 rounded-full ${feat.bgColor} border-2 border-white shadow-md`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {feat.icon}
                </motion.div>
                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${feat.color} bg-clip-text text-transparent`}>
                  {feat.title}
                </h3>
                <div className="w-16 h-1 bg-white rounded-full mb-6"></div>
                <motion.p 
                  className="text-slate-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Passe o mouse para saber mais
                </motion.p>
              </motion.div>
              
              {/* Card Back (on hover) */}
              <motion.div
                className={`absolute inset-0 ${feat.bgColor} flex flex-col items-center justify-center p-8 sm:p-10 md:p-12`}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hoveredCard === index ? 1 : 0,
                  y: hoveredCard === index ? 0 : 20
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="mb-6">
                  {feat.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${feat.color} bg-clip-text text-transparent`}>
                  {feat.title}
                </h3>
                <motion.p 
                  className="text-lg text-slate-700 leading-relaxed text-center mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {feat.desc}
                </motion.p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r ${feat.color} text-white text-base font-semibold rounded-full shadow-lg hover:shadow-md transition-all`}
                >
                  Saiba mais
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative footer */}
        <motion.div 
          className="absolute left-0 right-0 -bottom-20 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        />
      </div>
    </section>
  );
}