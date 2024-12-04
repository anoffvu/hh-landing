// app/pages/terms-of-service/page.tsx

"use client";

import "./page.css";

function TermsOfService() {
  return (
    <div>
      <div className=" fixed z-0 h-full w-full bg-noise opacity-20" />
      <div className="absolute z-10 p-6">
        <h1>Terms of Service</h1>
        <p>Effective Date: December 2, 2024</p>
        <p>
          Welcome to Holy House! These Terms of Service (“Terms”) govern your
          use of our mobile application (the “App”) and any related services
          provided by Chrona (“we,” “us,” or “our”). By downloading, installing,
          or using the App, you agree to these Terms. If you do not agree,
          please refrain from using the App.
        </p>
        <h3>1. Acceptance of Terms</h3>
        <strong>By accessing or using the App, you represent that:</strong>
        <ul>
          <li>
            You are at least 13 years old or the legal age of majority in your
            jurisdiction.
          </li>
          <li>
            You agree to comply with these Terms and all applicable laws and
            regulations.
          </li>
        </ul>
        <h3>2. Changes to the Terms</h3>
        <p>
          We may modify these Terms from time to time. If we make significant
          changes, we will notify you through the App or via email. Continued
          use of the App after such changes constitutes your acceptance of the
          updated Terms.
        </p>
        <h3>3. User Accounts</h3>
        <strong>
          To access certain features of the App, you may need to create an
          account. You agree to:
        </strong>
        <ul>
          {" "}
          <li>Provide accurate and complete information.</li>
          <li>Keep your account credentials secure and confidential.</li>
          <li>
            Notify us immediately of any unauthorized use of your account.
          </li>
        </ul>
        <h3>4. Prohibited Activities</h3>
        <strong>When using the App, you agree not to:</strong>
        <ul>
          <li>Violate any applicable laws or regulations.</li>
          <li>
            Submit or promote content that is misleading, harmful, or offensive.
          </li>
          <li>
            Reverse-engineer, decompile, or attempt to extract the source code
            of the App.
          </li>
          <li>Introduce viruses, malware, or other harmful software.</li>
          <li>
            Use automated systems to scrape, duplicate, or interfere with the
            App’s operations.
          </li>
        </ul>
        <h3>5. Subscriptions and Payments</h3>
        <strong>(For Future Subscription Features)</strong>
        <ul>
          <li>
            Certain features of the App may require a subscription or one-time
            payments. Subscription pricing, terms, and details will be clearly
            disclosed within the App.
          </li>
          <li>
            Payments will be processed through Apple’s in-app purchase system,
            and all payments are subject to Apple’s terms of service.
          </li>
          <li>
            Subscriptions will automatically renew unless canceled at least 24
            hours before the end of the current billing period.
          </li>
          <li>
            Refunds: Payments are non-refundable, except as required by
            applicable law or Apple’s policies.
          </li>
          <li>
            You may manage or cancel your subscription through your Apple
            account settings.
          </li>
        </ul>
        <h3>6. Intellectual Property</h3>
        <p>
          All content, features, and functionality of the App (including
          software, text, images, graphics, and audio) are the exclusive
          property of Chrona and are protected by copyright, trademark, and
          other intellectual property laws. You are granted a limited,
          non-exclusive, and non-transferable license to use the App solely for
          personal, non-commercial purposes.
        </p>
        <h3>7. Privacy</h3>
        <p>
          Your use of the App is governed by our Privacy Policy, which explains
          how we collect, use, and protect your data. By using the App, you
          consent to the collection and use of your information as described in
          our Privacy Policy.
        </p>
        <h3>8. Termination</h3>
        <p>
          We reserve the right to suspend or terminate your access to the App at
          any time without prior notice if you violate these Terms or engage in
          unlawful activities. Termination of your account does not waive your
          obligations under these Terms.
        </p>
        <h3>9. Disclaimers</h3>
        <p>
          The App is provided “as is” and “as available” without any warranties,
          express or implied. We do not guarantee that the App will be
          error-free or that access will be uninterrupted.
        </p>
        <h3>10. Limitation of Liability</h3>
        <p>
          To the fullest extent permitted by law, Chrona shall not be liable for
          any indirect, incidental, or consequential damages arising from your
          use of the App. Our total liability for all claims related to the App
          shall not exceed the amount you paid, if any, for access to the App.
        </p>
        <h3>11. Governing Law</h3>
        <p>
          These Terms are governed by and construed under the laws of the State
          of Delaware, without regard to its conflict of laws principles. Any
          disputes arising out of or relating to these Terms shall be resolved
          exclusively in the courts located in Delaware.
        </p>
        <h3>12. Contact Information</h3>
        <strong>
          If you have any questions or concerns about these Terms, please
          contact us:
        </strong>
        <p>Chrona</p>
        <p>169 Madison Ave, STE 11254</p>
        <p>New York, NY 10016 US</p>
        <p>Email: help@chrona.nyc</p>
        <h3>13. Third-Party Services</h3>
        <p>
          The App may include integrations or interactions with third-party
          services. Your use of these services is governed by their respective
          terms and policies. We are not responsible for the functionality or
          content of third-party services.
        </p>
        <h3>14. Apple-Specific Terms</h3>
        <strong>If you access the App via the Apple App Store:</strong>
        <ul>
          <li>
            You acknowledge that these Terms are between you and Chrona, not
            Apple.
          </li>
          <li>
            Apple is not responsible for any claims related to the App’s use or
            content.
          </li>
          <li>
            In case of any failure of the App to conform to applicable
            warranties, you may notify Apple, and they may refund the purchase
            price (if applicable). Apple has no further warranty obligations.
          </li>
        </ul>
        <h3>15. Miscellaneous</h3>
        <ul>
          {" "}
          <li>
            These Terms constitute the entire agreement between you and Chrona
            regarding your use of the App.
          </li>
          <li>
            If any provision of these Terms is found to be unenforceable, the
            remaining provisions shall remain in effect.
          </li>
          <li>
            Failure to enforce any provision of these Terms does not constitute
            a waiver of that provision.
          </li>
        </ul>
        <h3>Acceptance of Terms</h3>
        <p>
          By using Holy House, you acknowledge that you have read, understood,
          and agree to these Terms of Service.
        </p>
      </div>
    </div>
  );
}

export default TermsOfService;
