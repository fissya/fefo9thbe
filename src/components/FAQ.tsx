import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
  {
    question: 'Who can participate in FEFO?',
    answer: 'FEFO is open to all junior high school students (grades 7-9) from schools across Bandung Raya. Both individual students and school teams are welcome to participate in various competitions and activities.',
  },
  {
    question: 'How do I register for FEFO?',
    answer: 'Registration is available through our online form. Click the "Register Now" button at the top or bottom of this page to access the registration form. Follow the instructions to complete your registration.',
  },
  {
    question: 'What are the registration fees?',
    answer: 'Registration fees are Rp 50,000 for individual competitions and Rp 100,000 for team competitions. The fee includes access to all exhibitions, workshops, and a participation certificate.',
  },
  {
    question: 'When and where will FEFO be held?',
    answer: 'FEFO will take place on November 18-19, 2023, at the Main Campus. The event will run from 8:00 AM to 5:00 PM on both days. A detailed schedule will be provided after registration.',
  },
  {
    question: 'What should I bring to the event?',
    answer: 'Participants should bring their student ID, registration confirmation, stationery, and any specific items required for their chosen competitions (details will be provided after registration). Lunch and refreshments will be provided.',
  },
  {
    question: 'Can I participate in multiple competitions?',
    answer: 'Yes, students can participate in multiple competitions as long as the schedules do not overlap. There is an additional fee of Rp 25,000 for each additional competition after the first one.',
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

export function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked <span className="text-primary-red">Questions</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Find answers to common questions about FEFO
          </motion.p>
        </div>

        <motion.div 
          className="max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <motion.div 
      className="mb-4 border-b border-gray-200 pb-4"
      variants={item}
    >
      <button
        className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="font-medium text-lg">{question}</h3>
        <span className="ml-4 flex-shrink-0">
          {isOpen ? (
            <Minus className="h-5 w-5 text-primary-red" />
          ) : (
            <Plus className="h-5 w-5 text-primary-red" />
          )}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-muted-foreground">{answer}</p>
      </motion.div>
    </motion.div>
  );
}