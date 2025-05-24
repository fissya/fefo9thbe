import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { images } from '@/assets';

const steps = [
  {
    number: '01',
    title: 'Choose your competitions',
    description: 'Select from our range of academic and cultural competitions.',
  },
  {
    number: '02',
    title: 'Fill in participant details',
    description: 'Provide your personal and school information.',
  },
  {
    number: '03',
    title: 'Complete payment',
    description: 'Pay the registration fee through our secure payment system.',
  },
  {
    number: '04',
    title: 'Receive confirmation',
    description: 'Get your registration confirmation and event details by email.',
  },
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

export function Registration() {
  return (
    <section id="registration" className="py-20 bg-light-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-full sakura-bg opacity-10 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to <span className="text-primary-red">Join</span>?
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Follow these simple steps to register for FEFO 2023
          </motion.p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sakura/20 rounded-full -mt-10 -mr-10 z-0"></div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-10 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <img 
                src={images.registration} 
                alt="Cherry blossom symbolizing education" 
                className="rounded-lg object-cover w-full h-full max-h-96"
              />
            </div>
            
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Registration Steps</h3>
              
              <div className="space-y-6 mb-8">
                {steps.map((step, index) => (
                  <motion.div 
                    key={index} 
                    className="flex"
                    variants={item}
                  >
                    <div className="mr-4 flex-shrink-0">
                      <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary-red text-white font-bold">
                        {step.number}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <Button className="w-full bg-primary-red hover:bg-primary-red/90">
                Register Now
              </Button>
              
              <p className="text-center text-sm text-muted-foreground mt-4">
                Need help? Contact us at <a href="mailto:fefo@example.com" className="text-primary-red hover:underline">fefo@example.com</a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}