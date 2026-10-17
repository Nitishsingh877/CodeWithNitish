import { motion } from 'framer-motion';
import { FaCertificate, FaMicrosoft, FaAws, FaTrophy, FaBrain } from 'react-icons/fa';
import { certifications } from '../../data/portfolioData';

const getCertIcon = (cert) => {
  if (/hackathon/i.test(cert.name)) return FaTrophy;
  if (cert.issuer === 'Amazon Web Services') return FaAws;
  if (cert.issuer === 'Microsoft') return FaMicrosoft;
  if (cert.issuer === 'Anthropic') return FaBrain;
  return FaCertificate;
};

const orderedCertifications = [...certifications].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

const Certifications = () => {
  return (
    <section id="certifications" className="relative w-full bg-[#0b0b0b] text-white py-24 px-6 md:px-12 overflow-hidden select-none">
      <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-12">
        <div className="flex flex-col items-start space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span className="text-red-500 font-bold">CREDENTIALS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            CERTIFIED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              &amp; VALIDATED.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orderedCertifications.map((cert, idx) => {
            const Icon = getCertIcon(cert);
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className={`relative p-8 bg-[#141414]/95 backdrop-blur-2xl border rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.7)] text-center overflow-hidden transition-colors duration-500 ${
                  cert.featured ? 'border-red-600/50 hover:border-red-500' : 'border-white/10 hover:border-red-600/60'
                }`}
              >
                {cert.featured && (
                  <span className="absolute top-3 right-3 text-[9px] font-mono font-bold uppercase tracking-widest text-red-500 bg-red-600/10 border border-red-600/30 px-2 py-0.5 rounded">
                    Featured
                  </span>
                )}
                <FaCertificate className="absolute -top-5 -right-5 text-white/5 rotate-12" size={130} />
                <div className="flex justify-center mb-6 relative z-10">
                  <Icon className="text-red-500" size={40} />
                </div>
                <p className="text-sm font-bold text-white mb-2 relative z-10">{cert.name}</p>
                <p className="text-white/50 text-xs font-mono uppercase tracking-widest relative z-10">Issued by {cert.issuer}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

