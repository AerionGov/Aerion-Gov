import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12 font-mono text-sm uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>

        <div className="flex items-center gap-4 mb-8">
          <Shield className="w-8 h-8" />
          <h1 className="text-5xl font-bold tracking-tight">Privacy Policy</h1>
        </div>

        <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-16">
          Last Updated: February 17, 2025
        </div>

        <div className="prose prose-invert prose-neutral max-w-none space-y-12">
          <div className="border-l-2 border-white/20 pl-6">
            <p className="text-lg text-neutral-300 leading-relaxed">
              Our Privacy Notice Has Recently Changed.
            </p>
            <p className="text-neutral-400 mt-4 leading-relaxed">
              This Privacy Policy governs the manner in which Aerion ("Aerion", "Company," "our," "us," or "we") collects, uses, maintains, and discloses information collected from users (each, a "User") on our website or platform ("Platform"), available from or otherwise, and any successors to the foregoing ("Platform"). It also applies to users who contact us through other communication methods such as email or phone.
            </p>
            <p className="text-neutral-400 mt-4 leading-relaxed">
              Please read this Notice carefully. If any term in this Notice is unacceptable to you, please do not use our Website or provide us with any personal information. In this Notice, when we talk about "Personal Information," we mean any information that is related to an identified or identifiable natural person. This Notice does not apply to any products, services, websites, mobile applications, or content (including advertising) offered by third parties or that may be linked to or from the Website. Data collected by these third parties is covered by their own privacy notices.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">1. Your Information We Collect</h2>
            <p className="text-neutral-400 mb-4">Depending on your relationship with us, we may collect the following categories of Personal Information from you:</p>
            <ul className="space-y-3 text-neutral-400">
              <li className="flex gap-3"><span className="text-white">•</span><span><strong className="text-white">Personal details:</strong> Name, email address, telephone number, company name, job title, and other professional and employment information</span></li>
              <li className="flex gap-3"><span className="text-white">•</span><span><strong className="text-white">Account information:</strong> Account login credentials such as username and password</span></li>
              <li className="flex gap-3"><span className="text-white">•</span><span><strong className="text-white">Financial information:</strong> Billing and payment information (e.g., credit card or ACH account information)</span></li>
              <li className="flex gap-3"><span className="text-white">•</span><span><strong className="text-white">Device and other automatic information:</strong> IP address, browsing history, search history, and information regarding your interactions with a website, application, or advertisement</span></li>
              <li className="flex gap-3"><span className="text-white">•</span><span><strong className="text-white">Views and opinions:</strong> Feedback, survey responses, and other information included within your interactions with us or provided via the Website</span></li>
              <li className="flex gap-3"><span className="text-white">•</span><span><strong className="text-white">Employee and Job Applicant Information:</strong> Includes resumes, work history, skills, etc., covered by separate notices</span></li>
              <li className="flex gap-3"><span className="text-white">•</span><span><strong className="text-white">Communications:</strong> Includes chats, phone calls, or video calls, such as when using our chatbot or support tools</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">2. How We Collect Your Information</h2>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Information We Collect Directly From You</h3>
            <p className="text-neutral-400 mb-4">We collect Personal Information when you:</p>
            <ul className="space-y-2 text-neutral-400 ml-6">
              <li className="flex gap-3"><span className="text-white">•</span>Browse the Website</li>
              <li className="flex gap-3"><span className="text-white">•</span>Create an account</li>
              <li className="flex gap-3"><span className="text-white">•</span>Submit forms or information requests</li>
              <li className="flex gap-3"><span className="text-white">•</span>Contact us directly</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4 mt-8 text-white">Information We Automatically Collect About You</h3>
            <p className="text-neutral-400 mb-4">We use automatic technologies such as cookies and web beacons to collect:</p>
            <ul className="space-y-2 text-neutral-400 ml-6">
              <li className="flex gap-3"><span className="text-white">•</span>Usage details (IP, browser, interactions, etc.)</li>
              <li className="flex gap-3"><span className="text-white">•</span>Location data for legal eligibility and fraud prevention</li>
              <li className="flex gap-3"><span className="text-white">•</span>Analytics from tools like Google Analytics</li>
              <li className="flex gap-3"><span className="text-white">•</span>Behavioral data for optimization and compliance</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4 mt-8 text-white">Information We Collect From Other Sources</h3>
            <p className="text-neutral-400 mb-4">We may receive information from affiliates, partners, and public sources like:</p>
            <ul className="space-y-2 text-neutral-400 ml-6">
              <li className="flex gap-3"><span className="text-white">•</span>Job titles and professional details</li>
              <li className="flex gap-3"><span className="text-white">•</span>Public profiles or business directories</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">3. How We Use Your Information</h2>
            <p className="text-neutral-400 mb-4">We may use your Personal Information to:</p>
            <ul className="space-y-2 text-neutral-400 ml-6">
              <li className="flex gap-3"><span className="text-white">•</span>Operate and maintain the Website</li>
              <li className="flex gap-3"><span className="text-white">•</span>Provide requested services</li>
              <li className="flex gap-3"><span className="text-white">•</span>Respond to inquiries</li>
              <li className="flex gap-3"><span className="text-white">•</span>Send transactional or customer service communications</li>
              <li className="flex gap-3"><span className="text-white">•</span>Analyze trends and improve user experience</li>
              <li className="flex gap-3"><span className="text-white">•</span>Comply with legal obligations</li>
              <li className="flex gap-3"><span className="text-white">•</span>Detect fraud and enhance security</li>
              <li className="flex gap-3"><span className="text-white">•</span>Support third-party service functions related to our operations</li>
              <li className="flex gap-3"><span className="text-white">•</span>Fulfill any purpose disclosed at the time of collection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">4. With Whom Do We Disclose Your Information</h2>
            <p className="text-neutral-400 mb-4">We may share your information with:</p>
            <ul className="space-y-2 text-neutral-400 ml-6">
              <li className="flex gap-3"><span className="text-white">•</span>Service providers (email, payment, analytics, etc.)</li>
              <li className="flex gap-3"><span className="text-white">•</span>Legal advisors, accountants, auditors</li>
              <li className="flex gap-3"><span className="text-white">•</span>Authorities when required by law</li>
              <li className="flex gap-3"><span className="text-white">•</span>Buyers in the event of a merger or acquisition</li>
              <li className="flex gap-3"><span className="text-white">•</span>Our affiliates and subsidiaries</li>
              <li className="flex gap-3"><span className="text-white">•</span>With your consent or as directed by you</li>
            </ul>
            <p className="text-neutral-400 mt-4">De-identified or aggregated information may be shared for analytics and reporting.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">5. SMS/Text Messaging Privacy Policy</h2>
            <p className="text-neutral-400 mb-4">We are committed to protecting your privacy, including how we handle information related to SMS/text messaging. This section outlines how we collect, use, and share mobile data specifically for text message communications.</p>
            
            <h3 className="text-xl font-semibold mb-4 mt-6 text-white">No Selling or Sharing of SMS Opt-In Data</h3>
            <p className="text-neutral-400">We do not sell, share, or rent your mobile number, SMS opt-in data, or consent information to third parties for any marketing or promotional purposes.</p>

            <h3 className="text-xl font-semibold mb-4 mt-6 text-white">No Third-Party Marketing Use</h3>
            <p className="text-neutral-400">No phone number or mobile information will be shared with third parties or affiliates for marketing or promotional use. All such categories specifically exclude SMS/text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>

            <h3 className="text-xl font-semibold mb-4 mt-6 text-white">Permitted Use of Data by Service Providers</h3>
            <p className="text-neutral-400 mb-4">We may share your mobile number and SMS opt-in status only with trusted third-party service providers (such as messaging platforms, telecom carriers, and infrastructure vendors) who assist us in:</p>
            <ul className="space-y-2 text-neutral-400 ml-6">
              <li className="flex gap-3"><span className="text-white">•</span>Delivering SMS/text messages</li>
              <li className="flex gap-3"><span className="text-white">•</span>Managing opt-in and opt-out preferences</li>
              <li className="flex gap-3"><span className="text-white">•</span>Ensuring message deliverability</li>
              <li className="flex gap-3"><span className="text-white">•</span>Maintaining compliance with messaging regulations</li>
            </ul>
            <p className="text-neutral-400 mt-4">These providers are contractually obligated to use your information solely for these services and not for their own marketing or unrelated purposes.</p>

            <h3 className="text-xl font-semibold mb-4 mt-6 text-white">Opt-Out and Revocation of Consent</h3>
            <p className="text-neutral-400 mb-4">You may withdraw your consent to receive SMS messages at any time by:</p>
            <ul className="space-y-2 text-neutral-400 ml-6">
              <li className="flex gap-3"><span className="text-white">•</span>Replying "STOP" to any message</li>
              <li className="flex gap-3"><span className="text-white">•</span>Contacting us using the methods provided in the "How to Contact Us" section</li>
            </ul>
            <p className="text-neutral-400 mt-4">Please note that standard message and data rates may apply depending on your mobile service provider.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">6. How We Protect Your Information</h2>
            <p className="text-neutral-400">We use reasonable administrative, technical, and physical safeguards to protect your Personal Information. However, no data transmission or storage system can be guaranteed to be 100% secure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">7. Children</h2>
            <p className="text-neutral-400">Our Website is not intended for children under 13 (or 16 where applicable). We do not knowingly collect Personal Information from children without parental consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">8. Links to External Sites</h2>
            <p className="text-neutral-400">We are not responsible for the privacy practices or content of any external websites linked to from our Website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">9. Changes to This Notice</h2>
            <p className="text-neutral-400">We may update this Privacy Policy periodically. The revised version will be posted with an updated "Last Updated" date.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">10. How to Contact Us</h2>
            <p className="text-neutral-400">If you have questions or concerns about this Privacy Policy or wish to exercise your privacy rights, please contact us at:</p>
            <div className="mt-4 p-6 bg-white/5 border border-white/10 rounded">
              <p className="text-white font-mono">📧 Support@aeriongov.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">11. Other Choices</h2>
            <p className="text-neutral-400 mb-4"><strong className="text-white">Phone Calls/Text Messages.</strong> With your consent, we may engage in communications, which may include phone calls and text messages made using an automatic telephone dialing system or artificial prerecorded voice. You are not required to consent to such communications as a condition of purchasing products or services, and you may revoke consent at any time by contacting us via the methods in Section 10 "How to Contact Us."</p>
            <p className="text-neutral-400"><strong className="text-white">Push Notifications to Mobile Devices.</strong> With your consent, we may send push notifications to your mobile device. You can deactivate these messages at any time by changing the notification settings on your mobile device.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">12. Additional Information for Residents Of California</h2>
            <p className="text-neutral-400 mb-6">The California Consumer Privacy Act, as amended by the California Privacy Rights Act (Civil Code Section 1798.100, et seq.) ("California Law"), provides eligible California residents with specific rights with respect to our collection, retention, disclosing, selling, sharing, and use of Personal Information.</p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">California Privacy Rights</h3>
            <p className="text-neutral-400 mb-4">California Law provides consumers with specific rights regarding their Personal Information. Your California Law rights include the:</p>
            <ul className="space-y-3 text-neutral-400 ml-6">
              <li className="flex gap-3"><span className="text-white">•</span><span><strong className="text-white">Right to Know or Access:</strong> Request that we disclose to you your Personal Information that we collected, used, disclosed, shared, and sold.</span></li>
              <li className="flex gap-3"><span className="text-white">•</span><span><strong className="text-white">Right to Delete:</strong> Request that we delete any of your Personal Information that we collected from you and retained, subject to certain exceptions.</span></li>
              <li className="flex gap-3"><span className="text-white">•</span><span><strong className="text-white">Right to Correct Inaccurate Personal Information:</strong> Request that we correct any of your Personal Information that we maintain about you that is inaccurate.</span></li>
              <li className="flex gap-3"><span className="text-white">•</span><span><strong className="text-white">Right to Opt Out of Sales or Sharing of Personal Information:</strong> We do not sell your Personal Information for monetary profit.</span></li>
              <li className="flex gap-3"><span className="text-white">•</span><span><strong className="text-white">Right to Non-Discrimination:</strong> We will not discriminate against you for choosing to exercise any of your rights.</span></li>
            </ul>

            <p className="text-neutral-400 mt-6">To exercise your California privacy rights, please submit a request by contacting us via the methods in Section 10 "How to Contact Us."</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">13. Additional Information for Residents of Other States</h2>
            <p className="text-neutral-400 mb-4">For eligible residents of Colorado, Connecticut, Montana, Oregon, Texas, Utah and Virginia, you also have rights with respect to the Personal Information that we collect about you. Subject to certain exceptions, you have certain privacy rights which may include:</p>
            <ul className="space-y-2 text-neutral-400 ml-6">
              <li className="flex gap-3"><span className="text-white">•</span><strong className="text-white">Right to Know/Access</strong></li>
              <li className="flex gap-3"><span className="text-white">•</span><strong className="text-white">Right to Delete</strong></li>
              <li className="flex gap-3"><span className="text-white">•</span><strong className="text-white">Right to Correct</strong></li>
              <li className="flex gap-3"><span className="text-white">•</span><strong className="text-white">Right to Opt Out</strong></li>
              <li className="flex gap-3"><span className="text-white">•</span><strong className="text-white">Right to Appeal</strong></li>
            </ul>
            <p className="text-neutral-400 mt-4 font-semibold">NOTICE TO TEXAS CONSUMERS: We may sell your sensitive personal data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">14. Canadian Privacy Rights</h2>
            <p className="text-neutral-400">If you are located in Canada, the Personal Information Protection and Electronic Documents Act and applicable provincial privacy legislation govern the collection, use and disclosure of personal information. This section applies to Canadian residents and provides information about your rights under Canadian Privacy Laws.</p>
          </section>

          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-neutral-500 text-sm font-mono">
              For complete details about all sections, international transfers, and additional rights, please refer to the complete Privacy Policy document or contact us directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
