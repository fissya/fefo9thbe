import { motion } from 'framer-motion';

const sponsorLogos = Array(8).fill('');

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Sponsors() {
  return (
    <section className="py-16 bg-light-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="text-primary-red">Sponsors</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Partners who make FEFO possible
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {sponsorLogos.map((_, index) => (
            <motion.div 
              key={index} 
              className="h-24 bg-gray-200 rounded-md flex items-center justify-center card-hover"
              variants={item}
            >
              <span className="text-gray-400 font-medium">Sponsor Logo</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center mt-12 text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Interested in sponsoring FEFO? <a href="#" className="text-primary-red hover:underline">Contact us</a> for sponsorship opportunities.
        </motion.p>
      </div>
    </section>
  );
}