import { motion } from 'framer-motion';
import { GraduationCap, Landmark, Users } from 'lucide-react';
import { images } from '@/assets';

const featureItems = [
  {
    icon: <GraduationCap className="w-10 h-10 text-primary-red" />,
    title: 'Educational Excellence',
    description: 'Experience an olympiad that promotes learning through fun activities and challenges.',
  },
  {
    icon: <Landmark className="w-10 h-10 text-primary-red" />,
    title: 'Cultural Immersion',
    description: 'Dive into Japanese culture through themed activities, performances and exhibitions.',
  },
  {
    icon: <Users className="w-10 h-10 text-primary-red" />,
    title: 'Community Building',
    description: 'Connect with like-minded students from schools across Bandung Raya.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function About() {
  return (
    <section id="about" className="py-20 bg-light-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About <span className="text-primary-red">FEFO</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The annual educational olympiad with a unique Japanese theme
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img 
                src={images.about} 
                alt="Japanese educational concept" 
                className="rounded-lg shadow-lg object-cover"
                style={{ height: '400px', width: '100%' }}
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-lg shadow-md flex gap-10 justify-center">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-red">9th</p>
                  <p className="text-sm">Annual Event</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-red">2015</p>
                  <p className="text-sm">Since</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-4"
              variants={item}
            >
              Fun Education For Olympiad
            </motion.h3>
            
            <motion.p 
              className="mb-6"
              variants={item}
            >
              FEFO is an annual educational event organized by KARBIT and KIR, celebrating its 9th year in 2023. This year's event features a Japanese theme, embracing the concept that "Education is the pillar of a nation."
            </motion.p>
            
            <motion.p 
              className="mb-8"
              variants={item}
            >
              Designed for junior high school students across Bandung Raya, FEFO combines educational competitions with cultural exhibitions and performances to create a unique learning experience.
            </motion.p>

            <motion.div 
              className="grid gap-6"
              variants={container}
            >
              {featureItems.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-4 card-hover bg-white p-4 rounded-lg"
                  variants={item}
                >
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}