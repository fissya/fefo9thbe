import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { images } from '@/assets';

const competitions = [
  {
    title: 'Mathematics Olympiad',
    format: 'Individual',
    level: 'Junior High',
    structure: '2 Rounds',
    prizes: 'Cash Prizes',
  },
  {
    title: 'Science Challenge',
    format: 'Team of 3',
    level: 'Theory & Practical',
    structure: 'Multiple Stages',
    prizes: 'Science Kits',
  },
  {
    title: 'Language & Literature',
    format: 'Individual',
    level: 'Multiple Categories',
    structure: 'Written & Oral Tests',
    prizes: 'Books & Certificates',
  },
  {
    title: 'Coding Competition',
    format: 'Team of 2',
    level: 'Problem Solving',
    structure: 'Timed Challenges',
    prizes: 'Tech Gadgets',
  },
];

const highlights = [
  'Represent your school in prestigious contests',
  'Win attractive prizes and certificates',
  'Improve problem-solving skills',
  'Experience friendly competitive atmosphere',
  'Network with like-minded students',
];

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

export function Competition() {
  return (
    <section id="competition" className="py-20 bg-light-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary-red">Competitions</span> & Challenges
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Put your skills to the test and compete for amazing prizes
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Competition Highlights</h3>
              
              <motion.ul
                className="space-y-4 mb-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {highlights.map((highlight, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    variants={item}
                  >
                    <Check className="text-primary-red mr-3 mt-1 flex-shrink-0" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </motion.ul>
              
              <Button className="w-full bg-primary-red hover:bg-primary-red/90">
                Register for Competitions
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <motion.div 
              className="relative mb-10"
              variants={item}
            >
              <img 
                src={images.competition} 
                alt="Competition environment" 
                className="rounded-lg shadow-lg object-cover w-full h-56 md:h-64"
              />
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={container}
            >
              {competitions.map((competition, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-5 rounded-lg shadow-sm card-hover"
                  variants={item}
                >
                  <h4 className="font-bold text-lg mb-3 text-primary-red">{competition.title}</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Format:</span>
                      <span className="font-medium">{competition.format}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Level:</span>
                      <span className="font-medium">{competition.level}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Structure:</span>
                      <span className="font-medium">{competition.structure}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Prizes:</span>
                      <span className="font-medium">{competition.prizes}</span>
                    </li>
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}