import React from 'react';
import { useWorld } from '@/contexts/WorldContext';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { isStrangerWorld } = useWorld();

  const coordinators = [
    {
      type: 'Staff Coordinator',
      name: 'Dr. John Smith',
      phone: '+91 98765 43210',
      email: 'john.smith@college.edu',
    },
    {
      type: 'Student Coordinator',
      name: 'Jane Doe',
      phone: '+91 98765 43211',
      email: 'jane.doe@college.edu',
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`font-display text-4xl md:text-5xl font-bold tracking-wider mb-4 transition-all duration-700 ${
            isStrangerWorld ? 'text-red-500 text-glow' : 'text-foreground text-glow'
          }`}>
            Contact Us
          </h2>
          <p className={`font-body text-lg transition-all duration-700 ${
            isStrangerWorld ? 'text-red-200/60' : 'text-muted-foreground'
          }`}>
            Connect with the coordinators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Coordinator Cards */}
          {coordinators.map((coord, index) => (
            <div
              key={index}
              className={`rounded-xl border-2 p-6 backdrop-blur-sm transition-all duration-700 ${
                isStrangerWorld 
                  ? 'bg-black/60 border-red-500/40' 
                  : 'bg-card/60 border-primary/30 card-hover-glow'
              }`}
            >
              <h3 className={`font-display text-lg font-bold tracking-wide mb-4 transition-all duration-700 ${
                isStrangerWorld ? 'text-red-400' : 'text-primary'
              }`}>
                {coord.type}
              </h3>
              <p className={`font-body text-lg font-semibold mb-3 transition-all duration-700 ${
                isStrangerWorld ? 'text-red-100' : 'text-foreground'
              }`}>
                {coord.name}
              </p>
              <div className="space-y-2">
                <a 
                  href={`tel:${coord.phone}`}
                  className={`flex items-center gap-2 text-sm transition-all duration-300 ${
                    isStrangerWorld 
                      ? 'text-red-300/70 hover:text-red-300' 
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  {coord.phone}
                </a>
                <a 
                  href={`mailto:${coord.email}`}
                  className={`flex items-center gap-2 text-sm transition-all duration-300 ${
                    isStrangerWorld 
                      ? 'text-red-300/70 hover:text-red-300' 
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  {coord.email}
                </a>
              </div>
            </div>
          ))}

          {/* Follow Us */}
          <div
            className={`rounded-xl border-2 p-6 backdrop-blur-sm transition-all duration-700 ${
              isStrangerWorld 
                ? 'bg-black/60 border-red-500/40' 
                : 'bg-card/60 border-primary/30 card-hover-glow'
            }`}
          >
            <h3 className={`font-display text-lg font-bold tracking-wide mb-4 transition-all duration-700 ${
              isStrangerWorld ? 'text-red-400' : 'text-primary'
            }`}>
              Follow Us
            </h3>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 ${
                isStrangerWorld 
                  ? 'border-red-500/30 hover:bg-red-500/10 text-red-200' 
                  : 'border-primary/30 hover:bg-primary/10 text-foreground'
              }`}
            >
              <Instagram className="w-6 h-6" />
              <span className="font-body">@innovate8_cse</span>
            </a>
          </div>

          {/* Find Us */}
          <div
            className={`rounded-xl border-2 p-6 backdrop-blur-sm transition-all duration-700 ${
              isStrangerWorld 
                ? 'bg-black/60 border-red-500/40' 
                : 'bg-card/60 border-primary/30 card-hover-glow'
            }`}
          >
            <h3 className={`font-display text-lg font-bold tracking-wide mb-4 transition-all duration-700 ${
              isStrangerWorld ? 'text-red-400' : 'text-primary'
            }`}>
              Find Us
            </h3>
            <div className={`flex items-start gap-3 transition-all duration-700 ${
              isStrangerWorld ? 'text-red-200/80' : 'text-foreground/80'
            }`}>
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <p className="font-body text-sm">
                Department of CSE,<br />
                Engineering College,<br />
                City, State - 600001
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-16 pt-8 border-t transition-all duration-700 ${
          isStrangerWorld ? 'border-red-500/20' : 'border-primary/20'
        }`}>
          <p className={`font-body text-sm transition-all duration-700 ${
            isStrangerWorld ? 'text-red-300/50' : 'text-muted-foreground'
          }`}>
            © 2024 INNOVATE8 - Department of Computer Science and Engineering
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
