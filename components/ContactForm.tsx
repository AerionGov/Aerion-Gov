import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, FileText, CheckCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const mailtoLink = `mailto:Support@aeriongov.com?subject=${encodeURIComponent(formData.subject || 'Contact Form Submission')}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  const subjectOptions = [
    'General Inquiry',
    'Request for Quote',
    'Partnership Opportunity',
    'Technical Support',
    'Contract Questions',
    'Other'
  ];

  return (
    <section id="contact" className="py-24 bg-neutral-900 border-b border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(45deg, rgba(255,255,255,1) 1px, transparent 1px),
          linear-gradient(-45deg, rgba(255,255,255,1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="max-w-[1800px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-neutral-500 mb-6 block">
              // CONTACT
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
              INITIATE<br />
              <span className="text-neutral-500">COMMUNICATION</span>
            </h2>
            <p className="text-lg text-neutral-400 font-light mb-10 max-w-lg">
              Ready to streamline your government procurement? Reach out to our team for quotes, partnership inquiries, or general questions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-neutral-400">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 mb-1">Email</p>
                  <a href="mailto:Support@aeriongov.com" className="text-white hover:text-green-400 transition-colors">
                    Support@aeriongov.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-neutral-400">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 mb-1">Phone</p>
                  <a href="tel:+12672702237" className="text-white hover:text-green-400 transition-colors">
                    (267) 270-2237
                  </a>
                </div>
              </div>

              <div className="mt-8 p-6 bg-black/50 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Response Time</span>
                </div>
                <p className="text-neutral-400 text-sm">
                  Our team typically responds within <span className="text-white font-semibold">24-48 business hours</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black border border-white/10 p-8 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
            
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 ml-auto">
                SECURE_FORM_V1
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-3">
                    <User className="w-3 h-3" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full bg-neutral-900 border border-white/10 px-4 py-3 text-white placeholder-neutral-600 focus:border-green-500/50 focus:outline-none transition-colors font-mono text-sm"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-3">
                    <Mail className="w-3 h-3" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.gov"
                    className="w-full bg-neutral-900 border border-white/10 px-4 py-3 text-white placeholder-neutral-600 focus:border-green-500/50 focus:outline-none transition-colors font-mono text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-3">
                  <FileText className="w-3 h-3" />
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-900 border border-white/10 px-4 py-3 text-white focus:border-green-500/50 focus:outline-none transition-colors font-mono text-sm appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select inquiry type</option>
                  {subjectOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-3">
                  <MessageSquare className="w-3 h-3" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Describe your procurement needs..."
                  className="w-full bg-neutral-900 border border-white/10 px-4 py-3 text-white placeholder-neutral-600 focus:border-green-500/50 focus:outline-none transition-colors font-mono text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 flex items-center justify-center gap-3 hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Opening Email Client...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-[10px] font-mono text-neutral-600 text-center uppercase tracking-wider">
                This form will open your email client with the message pre-filled
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
