import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="h-10 bg-gradient-to-r from-indigo-600 to-amber-500 text-white px-6 py-8 text-center text-sm md:text-base rounded-t-3xl shadow-inner"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between  gap-4">
        <p className="font-medium">
          &copy; {new Date().getFullYear()} SuaEmpresa. Todos os direitos
          reservados.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#"
            className="hover:underline hover:text-slate-100 transition duration-300"
          >
            Política de Privacidade
          </a>
          <a
            href="#"
            className="hover:underline hover:text-slate-100 transition duration-300"
          >
            Termos de Uso
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
