import { motion } from 'framer-motion';
import { ExternalLink, Layers, Link2, Zap, Code2 } from 'lucide-react';

const icons = {
  quibly: Layers,
  lynkr: Link2,
  elevare: Zap,
  codex: Code2,
};

const BrandCard = ({ name, description, url, type, color }) => {
  const Icon = icons[type] || ExternalLink;

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="glass rounded-3xl p-8 relative overflow-hidden group cursor-pointer"
      onClick={() => window.open(url, '_blank')}
    >
      <div 
        className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity rounded-full blur-3xl"
        style={{ backgroundColor: color }}
      />
      
      <div className="flex flex-col h-full space-y-4">
        <div 
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
          style={{ backgroundColor: `${color}15`, border: `1px solid ${color}40` }}
        >
          <Icon size={24} style={{ color }} />
        </div>
        
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="pt-4 flex items-center text-sm font-semibold group-hover:gap-2 transition-all" style={{ color }}>
          Launch Project <ExternalLink size={14} className="ml-1" />
        </div>
      </div>
    </motion.div>
  );
};

export default BrandCard;
