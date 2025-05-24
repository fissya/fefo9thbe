import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { images } from '@/assets';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  },
};

const decorationVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1 }
  },
};

export function Hero() {
  return (
    <section 
      className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${images.hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 sakura-bg z-0"></div>
      
      <motion.div 
        className="absolute top-20 right-20 w-24 h-24 rounded-full bg-sakura/20 z-0"
        variants={decorationVariants}
        initial="hidden"
        animate="visible"
        custom={1}
        style={{ animationDelay: '0.5s' }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-primary-red/10 z-0"
        variants={decorationVariants}
        initial="hidden"
        animate="visible"
        custom={2}
        style={{ animationDelay: '0.8s' }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse' }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="section-title"
            variants={itemVariants}
          >
            FEFO <span className="text-primary-red">2023</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-2 font-medium"
            variants={itemVariants}
          >
            Fun Education For Olympiad
          </motion.p>
          
          <motion.p 
            className="text-2xl md:text-3xl mb-6 japanese-text font-medium text-primary-red"
            variants={itemVariants}
          >
            楽しい教育のためのオリンピック
          </motion.p>
          
          <motion.div 
            className="mb-8 px-4 py-3 bg-white/80 rounded-lg shadow-sm inline-block"
            variants={itemVariants}
          >
            <p className="text-xl md:text-2xl japanese-text mb-2">教育は国の柱</p>
            <p className="text-sm md:text-base text-muted-foreground">Education is the pillar of a nation</p>
          </motion.div>
          
          <motion.p 
            className="mb-8 text-base md:text-lg"
            variants={itemVariants}
          >
            Join the 9th annual FEFO event organized by KARBIT and KIR, designed for junior high school students across Bandung Raya. Experience a unique blend of education and Japanese culture through competitions, exhibitions, and performances.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Button size="lg" className="bg-primary-red hover:bg-primary-red/90">
              Register Now
            </Button>
            <Button size="lg" variant="outline" className="border-primary-red text-primary-red hover:bg-primary-red/10">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}