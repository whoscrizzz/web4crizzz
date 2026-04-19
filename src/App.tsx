import { motion, AnimatePresence } from "motion/react";
import { 
  Instagram, 
  Twitter, 
  Github, 
  Youtube, 
  ExternalLink, 
  Mail, 
  Globe, 
  Music, 
  Camera,
  Layers
} from "lucide-react";

const links = [
  {
    title: "Portfolio",
    url: "https://whoscrizzz.com",
    icon: <Globe className="w-5 h-5" />,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Instagram",
    url: "https://instagram.com/whoscrizzz",
    icon: <Instagram className="w-5 h-5" />,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Twitter / X",
    url: "https://twitter.com/whoscrizzz",
    icon: <Twitter className="w-5 h-5" />,
    color: "from-blue-400/20 to-indigo-400/20"
  },
  {
    title: "YouTube Channel",
    url: "https://youtube.com/@whoscrizzz",
    icon: <Youtube className="w-5 h-5" />,
    color: "from-red-500/20 to-orange-500/20"
  },
  {
    title: "GitHub Projects",
    url: "https://github.com/whoscrizzz",
    icon: <Github className="w-5 h-5" />,
    color: "from-gray-700/20 to-gray-900/20"
  },
  {
    title: "Photography",
    url: "#",
    icon: <Camera className="w-5 h-5" />,
    color: "from-emerald-500/20 to-teal-500/20"
  }
];

const socialIcons = [
  { icon: <Instagram />, url: "#" },
  { icon: <Twitter />, url: "#" },
  { icon: <Github />, url: "#" },
  { icon: <Mail />, url: "mailto:contactocrizzz@gmail.com" }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20 overflow-x-hidden">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-orange-600/5 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-xl mx-auto px-6 pt-20 pb-12 flex flex-col items-center">
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center mb-12"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://picsum.photos/seed/crizzz/200/200" 
              alt="Profile" 
              className="relative w-28 h-28 rounded-full border-2 border-white/10 object-cover"
              referrerPolicy="no-referrer"
            />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-dashed border-white/10 rounded-full pointer-events-none"
            />
          </div>
          
          <h1 className="mt-6 text-3xl font-light tracking-tight text-white/90">
            @whoscrizzz
          </h1>
          <p className="mt-2 text-sm font-medium text-white/40 uppercase tracking-[0.2em]">
            Digital Creator & Developer
          </p>
        </motion.div>

        {/* Links Section */}
        <div className="w-full space-y-4">
          <AnimatePresence>
            {links.map((link, index) => (
              <motion.a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative flex items-center gap-4">
                  <div className="p-2 rounded-xl bg-white/5 text-white/70 group-hover:text-white transition-colors">
                    {link.icon}
                  </div>
                  <span className="font-medium text-white/80 group-hover:text-white transition-colors">
                    {link.title}
                  </span>
                </div>
                
                <ExternalLink className="relative w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors" />
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* Social Icons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 flex items-center gap-8"
        >
          {socialIcons.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              whileHover={{ y: -5, color: "#fff" }}
              className="text-white/30 transition-colors"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/20">
            <Layers className="w-3 h-3" />
            <span>Built with Precision</span>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}
