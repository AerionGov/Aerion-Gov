import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';

export const TermsOfService: React.FC = () => {
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
          <h1 className="text-5xl font-bold tracking-tight">Terms & Conditions</h1>
        </div>

        <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-16">
          Last Updated: February 17, 2025
        </div>

        <div className="prose prose-invert prose-neutral max-w-none space-y-12">
          <div className="border-l-2 border-white/20 pl-6">
            <p className="text-lg text-neutral-300 leading-relaxed">
              Our Terms of Service Has Recently Changed.
            </p>
          </div>

          <div className="bg-red-950/20 border border-red-500/30 p-6 rounded">
            <p className="text-red-200 font-semibold mb-2">IMPORTANT NOTICE</p>
            <p className="text-neutral-300 text-sm leading-relaxed">
              PLEASE NOTE THAT THESE TERMS OF USE CONTAIN A DISPUTE RESOLUTION PROVISION THAT REQUIRES ARBITRATION, WAIVES YOUR RIGHT TO TRIAL BY JURY, AND WAIVES YOUR RIGHT TO PARTICIPATE IN ANY CLASS ACTION OR REPRESENTATIVE PROCEEDING IN THE EVENT OF DISPUTES, AS SET OUT IN MORE DETAIL BELOW.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">1. Introduction</h2>
            <p className="text-neutral-400">
              Aerion (collectively, "Aerion" "we," "us," or "our") is pleased to provide you with this website and other online or digital services (the "Website"). These Terms of Use, together with any terms expressly incorporated by reference, including the Aerion Online Privacy Notice, govern your access to and use of the Website. By clicking "I Accept" if prompted, or creating an account, you agree to these Terms of Use. If you do not agree to these Terms of Use, you should not access the Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">2. Eligibility and Availability</h2>
            <p className="text-neutral-400 mb-4">In order to access the Website, the following must be true:</p>
            <ul className="space-y-2 text-neutral-400 ml-6">
              <li className="flex gap-3"><span className="text-white">•</span>You are at least 18 years of age or older; and</li>
              <li className="flex gap-3"><span className="text-white">•</span>You live in the United States and in a state or territory where the Website is made available.</li>
            </ul>
            <p className="text-neutral-400 mt-4">
              If you do not meet these requirements, you must not access or use the Website. Aerion is based in the United States. We provide the Website for use only to persons located in the United States. We make no claims or representations that the Website or any of their content is accessible or appropriate outside of the United States.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">3. Relationship to Other Terms and Policies</h2>
            <p className="text-neutral-400">
              Our Online Privacy Notice describes in detail our online information practices and how we gather, use, share, and protect your information when you use, access, or visit the Website. By accessing or using the Website, you agree to our information collection and use practices as disclosed in our Online Privacy Notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">4. Restrictions on Use</h2>
            <p className="text-neutral-400 mb-4">You may use the Website only for lawful purposes and in accordance with these Terms of Use. You agree not to use the Website:</p>
            <ul className="space-y-2 text-neutral-400 ml-6">
              <li className="flex gap-3"><span className="text-white">•</span>In any way that violates any applicable federal, state, local or international law or regulation</li>
              <li className="flex gap-3"><span className="text-white">•</span>To impersonate or attempt to impersonate us, our employees, or any other person or entity</li>
              <li className="flex gap-3"><span className="text-white">•</span>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Website</li>
              <li className="flex gap-3"><span className="text-white">•</span>Use any robot, spider or other automatic device to access the Website</li>
              <li className="flex gap-3"><span className="text-white">•</span>Introduce any viruses, Trojan horses, worms, logic bombs, or other malicious material</li>
              <li className="flex gap-3"><span className="text-white">•</span>Attack the Website via a denial-of-service attack or distributed denial-of-service attack</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">5. User Contributions</h2>
            <p className="text-neutral-400 mb-4">
              The Website may contain message boards, chat features, personal web pages or profiles, forums, bulletin boards, and other interactive features (collectively, "Interactive Services") that allow users to post content or materials (collectively, "User Contributions").
            </p>
            <p className="text-neutral-400 mb-4">
              Any User Contribution you post to the site will be considered non-confidential and non-proprietary. By providing any User Contribution on the Website, you grant us and our affiliates the right to use, reproduce, modify, perform, display, distribute, and otherwise disclose to third parties any such material.
            </p>
            <p className="text-neutral-400">
              You understand and acknowledge that you are responsible for any User Contributions you submit, and you, not Aerion, have full responsibility for such content, including its legality, reliability, accuracy, and appropriateness.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">6. Monitoring and Enforcement; Termination</h2>
            <p className="text-neutral-400 mb-4">We have the right to:</p>
            <ul className="space-y-2 text-neutral-400 ml-6">
              <li className="flex gap-3"><span className="text-white">•</span>Remove or refuse to post any User Contributions for any or no reason</li>
              <li className="flex gap-3"><span className="text-white">•</span>Take any action with respect to any User Contribution that we deem necessary or appropriate</li>
              <li className="flex gap-3"><span className="text-white">•</span>Disclose your identity to any third party who claims material posted by you violates their rights</li>
              <li className="flex gap-3"><span className="text-white">•</span>Take appropriate legal action for any illegal or unauthorized use of the Website</li>
              <li className="flex gap-3"><span className="text-white">•</span>Terminate or suspend your access to all or part of the Website for any reason</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">7. Content Standards</h2>
            <p className="text-neutral-400 mb-4">User Contributions must comply with all applicable laws and must not:</p>
            <ul className="space-y-2 text-neutral-400 ml-6">
              <li className="flex gap-3"><span className="text-white">•</span>Contain defamatory, obscene, abusive, offensive, or hateful material</li>
              <li className="flex gap-3"><span className="text-white">•</span>Promote sexually explicit material, violence, or discrimination</li>
              <li className="flex gap-3"><span className="text-white">•</span>Infringe any patent, trademark, trade secret, copyright, or other intellectual property rights</li>
              <li className="flex gap-3"><span className="text-white">•</span>Violate legal rights of others or give rise to civil or criminal liability</li>
              <li className="flex gap-3"><span className="text-white">•</span>Promote illegal activity or assist any unlawful act</li>
              <li className="flex gap-3"><span className="text-white">•</span>Impersonate any person or misrepresent your identity or affiliation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">8. Copyright Infringement</h2>
            <p className="text-neutral-400">
              If you believe that any User Contributions violate your copyright, please send us a notice of copyright infringement to <span className="text-white font-mono">support@aeriongov.com</span>. It is the policy of Aerion to terminate the user accounts of repeat infringers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">9. Intellectual Property</h2>
            <p className="text-neutral-400">
              The Website and the entirety of its contents, features and functionality are owned, controlled or licensed by us and are protected by United States and international copyright, trademark, patent, trade secret and other intellectual property laws. No right, title or interest in or to the Website or any content on the Website is transferred to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">10. Links to Other Sites</h2>
            <p className="text-neutral-400">
              In an effort to provide you with additional information, Aerion website may include links to third-party websites. We make no representations about any third-party website. A hyperlink to another party's website does not mean that Aerion endorses or accepts the content or use of the site or its privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">11. Access, Correction, and Data Integrity</h2>
            <p className="text-neutral-400">
              Although we attempt to maintain the integrity and accuracy of the information on the Website, we make no guarantees as to its correctness, completeness, or accuracy. The Website may contain typographical errors, inaccuracies, or other errors or omissions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">12. Security</h2>
            <p className="text-neutral-400">
              We implement reasonable and appropriate security measures to protect your Personal Information. However, no security system is impenetrable. We cannot guarantee the security of our databases, nor can we guarantee that information you supply will not be intercepted while being transmitted over the Internet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">13. SMS Messaging Terms</h2>
            <p className="text-neutral-400 mb-4">
              By voluntarily providing your mobile number and opting in to SMS communications from Aerion, you consent to receive text messages related to service updates, account alerts, appointment reminders, and promotional offers.
            </p>
            <ul className="space-y-3 text-neutral-400">
              <li><strong className="text-white">Program Name:</strong> Aerion Alerts & Updates</li>
              <li><strong className="text-white">Message Frequency:</strong> Message frequency varies</li>
              <li><strong className="text-white">Opt-Out:</strong> Reply "STOP" to any SMS to opt out</li>
              <li><strong className="text-white">Help:</strong> Reply "HELP" or contact (267) 270-2237 or support@aeriongov.com</li>
              <li><strong className="text-white">Rates:</strong> Standard message and data rates may apply</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">14. Disclaimer of Warranties</h2>
            <div className="bg-yellow-950/20 border border-yellow-500/30 p-6 rounded">
              <p className="text-neutral-300 mb-4">
                YOU UNDERSTAND AND AGREE THAT YOUR USE OF OUR WEBSITE IS AT YOUR OWN RISK AND THAT THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITH ALL FAULTS.
              </p>
              <p className="text-neutral-300">
                TO THE FULLEST EXTENT PERMITTED BY LAW, AERION EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND RELATED TO ITS WEBSITE, WHETHER EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NONINFRINGEMENT.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">15. Indemnification</h2>
            <p className="text-neutral-400">
              You agree to indemnify and hold harmless Aerion, its affiliates, licensors, and service companies from any claims and expenses, including attorneys' fees, arising out of your use of the Website, your violation of these Terms of Use, or your violation of any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">16. Waiver, Release, and Limitation of Liability</h2>
            <div className="bg-yellow-950/20 border border-yellow-500/30 p-6 rounded">
              <p className="text-neutral-300">
                YOU AGREE THAT, TO THE FULLEST EXTENT ALLOWED BY LAW, AERION SHALL NOT BE LIABLE TO YOU FOR ANY SPECIAL, PUNITIVE, INDIRECT, INCIDENTAL, LOST PROFITS, OR CONSEQUENTIAL DAMAGES RELATED TO THE OPERATION OF OR YOUR ACCESS AND USE OF THE WEBSITE.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">17. Governing Law</h2>
            <p className="text-neutral-400">
              You and Aerion agree that your access to the Website and these Terms of Use will be governed by and construed in accordance with the laws of the State of Michigan, without regard to its conflicts of law rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">18. Severability and No Waiver</h2>
            <p className="text-neutral-400">
              No waiver by Aerion of any term or condition shall be deemed a continuing waiver. If any part of these Terms of Use is held invalid or unenforceable, all other parts remain valid and enforceable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">19. Modification</h2>
            <p className="text-neutral-400">
              Aerion may modify these Terms of Use at any time, and such modifications will be posted here and become effective upon posting. Your continued use of the Website constitutes agreement to any modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">20. Term and Termination</h2>
            <p className="text-neutral-400">
              Aerion can suspend, restrict, limit, or terminate your access to its Website at any time for any reason. YOU AGREE THAT WE ARE NOT LIABLE TO YOU OR ANY THIRD PARTY FOR ANY MODIFICATION, SUSPENSION, OR DISCONTINUANCE OF THE WEBSITE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">21. Accessing the Website</h2>
            <p className="text-neutral-400">
              We reserve the right to withdraw or amend the Website without notice. We will not be liable if the Website is unavailable at any time. We may restrict access to some parts or the entirety of the Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">22. Entire Agreement</h2>
            <p className="text-neutral-400">
              These Terms of Use constitute the entire agreement between you and Aerion pertaining to the subject matter hereof and supersede all other agreements, communications, or representations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">23. Dispute Resolution</h2>
            <div className="bg-red-950/20 border border-red-500/30 p-6 rounded">
              <p className="text-neutral-300 mb-4">
                PLEASE READ CAREFULLY: ARBITRATION USES A NEUTRAL ARBITRATOR INSTEAD OF A JUDGE OR JURY, ALLOWS FOR MORE LIMITED DISCOVERY THAN IN COURT, AND IS SUBJECT TO VERY LIMITED REVIEW BY COURTS.
              </p>
              <p className="text-neutral-300">
                ANY ARBITRATION UNDER THIS AGREEMENT WILL TAKE PLACE ON AN INDIVIDUAL BASIS; CLASS ARBITRATIONS, CLASS ACTIONS OR REPRESENTATIVE ARBITRATIONS ARE NOT PERMITTED.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
            <p className="text-neutral-400 mb-4">If you have any questions about these Terms of Use, please contact us at:</p>
            <div className="p-6 bg-white/5 border border-white/10 rounded space-y-2">
              <p className="text-white font-mono">📧 support@aeriongov.com</p>
              <p className="text-white font-mono">📞 (267) 270-2237</p>
            </div>
          </section>

          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-neutral-500 text-sm font-mono">
              For complete details about all sections including electronic communications, class action waiver, and arbitration procedures, please refer to the complete Terms & Conditions document or contact us directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
