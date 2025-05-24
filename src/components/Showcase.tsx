import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import { images } from '@/assets';

const showcaseItems = [
  {
    title: 'Robotics Exhibition',
    description: 'Discover innovative robots designed by students and interact with cutting-edge technology.',
    location: 'Main Hall',
    time: '10:00 AM - 4:00 PM',
    image: images.robotics,
  },
  {
    title: 'Cultural Performance',
    description: 'Experience traditional and modern Japanese performances by talented students.',
    location: 'Auditorium',
    time: '1:00 PM - 2:30 PM',
    image: images.cultural,
  },
  {
    title: 'Science Exhibition',
    description: 'Explore fascinating science projects and experiments demonstrating key scientific principles.',
    location: 'Science Building',
    time: '9:00 AM - 5:00 PM',
    image: images.science,
  },
  {
    title: 'Calligraphy Workshop',
    description: 'Learn the art of Japanese calligraphy with expert guidance and take home your creation.',
    location: 'Art Room',
    time: '11:00 AM - 3:00 PM',
    image: images.calligraphy,
  },
  {
    title: 'Music Performance',
    description: 'Enjoy both traditional Japanese and contemporary music performances by talented musicians.',
    location: 'Music Hall',
    time: '12:00 PM - 4:00 PM',
    image: images.music,
  },
  {
    title: 'Culinary Demonstration',
    description: 'Watch and learn how to prepare authentic Japanese dishes with a modern twist.',
    location: 'Food Court',
    time: '10:30 AM - 2:30 PM',
    image: images.culinary,
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
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

export function Showcase() {
  return (
    <section id="showcase" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Showcase & <span className="text-primary-red">Exhibitions</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore a variety of exhibitions, workshops and performances
          </motion.p>
        </div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {showcaseItems.map((item, index) => (
            <ShowcaseCard key={index} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface ShowcaseCardProps {
  item: {
    title: string;
    description: string;
    location: string;
    time: string;
    image: string;
  };
  index: number;
}

function ShowcaseCard({ item, index }: ShowcaseCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
      variants={item}
    >
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{item.title}</h3>
        <p className="text-muted-foreground mb-4">{item.description}</p>
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <MapPin size={16} className="mr-2 text-primary-red" />
          <span>{item.location}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock size={16} className="mr-2 text-primary-red" />
          <span>{item.time}</span>
        </div>
      </div>
    </motion.div>
  );
}