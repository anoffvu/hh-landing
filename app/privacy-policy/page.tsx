// app/pages/terms-of-service/page.tsx

"use client";

import "./page.css";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#fafaf9] py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-semibold mb-8">Privacy Policy</h1>
        <div className="prose prose-lg">
          <p className="text-sm text-gray-600 mb-8">
            Last updated: December 03, 2024
          </p>

          <p>
            This Privacy Policy describes Our policies and procedures on the
            collection, use, and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </p>

          <p>
            We use Your Personal Data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Interpretation and Definitions
          </h2>

          <h3 className="text-xl font-medium mt-6 mb-3">Interpretation</h3>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">Definitions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Account</strong>: A unique account created for You to
              access our Service.
            </li>
            <li>
              <strong>Affiliate</strong>: An entity that controls, is controlled
              by, or is under common control with a party.
            </li>
            <li>
              <strong>Application</strong>: Holy House, the software program
              provided by the Company.
            </li>
            <li>
              <strong>Company</strong>: Chrona, Inc., located at 169 Madison Ave
              STE 11254 New York, NY 10016 US.
            </li>
            <li>
              <strong>Country</strong>: New York, United States.
            </li>
            <li>
              <strong>Device</strong>: Any device that can access the Service.
            </li>
            <li>
              <strong>Personal Data</strong>: Any information relating to an
              identified or identifiable individual.
            </li>
            <li>
              <strong>Service</strong>: Refers to the Application.
            </li>
            <li>
              <strong>Service Provider</strong>: Any person who processes data
              on behalf of the Company.
            </li>
            <li>
              <strong>Usage Data</strong>: Data collected automatically from
              Service use.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Collecting and Using Your Personal Data
          </h2>

          <h3 className="text-xl font-medium mt-6 mb-3">
            Types of Data Collected
          </h3>

          <h4 className="text-lg font-medium mt-4 mb-2">Personal Data</h4>
          <p>While using Our Service, We may collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Usage Data</li>
          </ul>

          <h4 className="text-lg font-medium mt-4 mb-2">Usage Data</h4>
          <p>
            Usage Data is collected automatically when using the Service,
            including IP address, browser type, pages visited, time and date of
            visits, and other diagnostic data.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Payment and Subscription Information
          </h2>
          <h3 className="text-xl font-medium mt-6 mb-3">Payment Information</h3>
          <p>
            All payments are processed securely through Apple's In-App Purchase
            system. We do not handle or store your payment information directly.
            Any credit/debit card information or billing information is managed
            by Apple. Please see Apple's Privacy Policy for details on how they
            handle your information
          </p>
          <h3 className="text-xl font-medium mt-6 mb-3">Transaction History</h3>
          <p>
            To provide better services and support, we may collect data related
            to your transactions made via our app, including the purchased
            items, date and time of your purchases. However, we do not collect
            or store your financial information related to these transactions as
            these are processed through Apple's payment system
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Security of Your Data
          </h2>
          <p>
            We implement commercially reasonable measures to secure your
            Personal Data. However, no transmission method over the Internet is
            100% secure.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Children&apos;s Privacy
          </h2>
          <p>
            Our Service does not address anyone under the age of 13. If We
            become aware of collecting information from a child without parental
            consent, We will delete it.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy. Changes will be posted with an
            updated &ldquo;Last updated&rdquo; date.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us at:</p>
          <p>
            <a
              href="mailto:help@chrona.nyc"
              className="text-blue-600 hover:text-blue-800"
            >
              help@chrona.nyc
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
