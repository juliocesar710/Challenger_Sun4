import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Serviços", subItems: ["Consultoria", "Contratos", "Litígios"] },
    { name: "Sobre", subItems: ["Equipe", "História", "Valores"] },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-white/80 backdrop-blur-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo com efeito de brilho e gradiente */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-orange-500 tracking-tight">
            Jurídico <span className="text-orange-500">SUN4</span>
          </h1>
          <motion.span 
            className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>

        {/* Botão Mobile */}
        <div className="md:hidden z-50">
          <motion.button 
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-white shadow-md"
          >
            {isOpen ? (
              <X size={24} className="text-slate-800" />
            ) : (
              <Menu size={24} className="text-slate-800" />
            )}
          </motion.button>
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <div 
              key={item.name}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <motion.a
                href={`#${item.name.toLowerCase()}`}
                className="px-4 py-2 flex items-center gap-1 text-slate-700 hover:text-orange-500 transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {item.name}
                <motion.span
                  animate={{ rotate: hoveredItem === item.name ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} />
                </motion.span>
              </motion.a>

              <AnimatePresence>
                {hoveredItem === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden"
                  >
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-3 text-slate-600 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
                      >
                        {subItem}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="ml-4 relative overflow-hidden"
          >
            <button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-orange-300/40 transition-all duration-300 relative z-10 cursor-pointer">
              Contratar Agora
            </button>
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 hover:opacity-100 rounded-full transition-opacity duration-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </nav>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-2 bg-white">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-slate-100 last:border-0">
                  <a
                    href={`#${item.name.toLowerCase()}`}
                    className="block px-4 py-3 text-slate-700 font-medium"
                  >
                    {item.name}
                  </a>
                  <div className="pl-6 pb-2 space-y-1">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-slate-500 hover:text-orange-500 hover:bg-orange-50 rounded transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <button className="w-full mt-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-lg shadow hover:shadow-md transition-all">
                Contratar Agora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}