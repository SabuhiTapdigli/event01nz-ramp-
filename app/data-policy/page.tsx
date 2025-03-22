import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DataPolicy() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Data Policy</h1>

        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: March 21, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Approach to Data</h2>
            <p>
              At TopEventsNZ.com, transparency and security in how we handle
              your data are core to our commitment. This document outlines how
              your data is collected, processed, stored, and shared.
            </p>
            <p>
              It expands on our Privacy Policy by giving you a deeper insight
              into our data handling procedures.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Collect Data</h2>
            <p>Your data may be gathered through:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Forms you fill out on our website</li>
              <li>Cookies and tracking technologies</li>
              <li>Third-party services you authorize</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Data</h2>
            <p>We use data to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Manage event registrations</li>
              <li>Improve website performance and functionality</li>
              <li>Send updates and promotional material</li>
              <li>Enhance user experience through personalization</li>
              <li>Safeguard users and detect fraudulent activity</li>
              <li>Meet regulatory requirements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Storing Your Information
            </h2>
            <p>
              Data is stored on secure systems based in New Zealand and other
              countries where our infrastructure is hosted. Access is restricted
              and encrypted where appropriate.
            </p>
            <p>
              Information is retained only for as long as necessary and disposed
              of securely when no longer required.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Keeping Your Data Safe</h2>
            <p>We apply best practices in cybersecurity, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Use of SSL encryption</li>
              <li>Routine security checks</li>
              <li>Controlled access and user permissions</li>
              <li>Training our staff in data privacy protocols</li>
              <li>Prepared incident response plans</li>
            </ul>
            <p>
              While we strive to safeguard your information, no online platform
              is entirely immune from risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">When We Share Data</h2>
            <p>We may disclose data to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Vendors supporting our platform operations</li>
              <li>Event partners you’ve interacted with</li>
              <li>Government or legal entities when lawfully required</li>
              <li>Partners you’ve explicitly consented to</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Rights Over Data</h2>
            <p>You may request to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Erase your data entirely</li>
              <li>Restrict how we use your information</li>
              <li>Transfer your data elsewhere</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>
              To make a request, reach out to our Data Protection Officer using
              the contact details below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Security Incidents</h2>
            <p>If a data breach occurs, we will:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Alert affected users as soon as possible</li>
              <li>Disclose the nature and scope of the incident</li>
              <li>Report to authorities if required</li>
              <li>Act swiftly to address vulnerabilities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p>Have questions? Contact our Data Protection Officer:</p>
            <address className="not-italic mt-4">
              <p>TopEventsNZ.com</p>
              <p>135 Queen Street</p>
              <p>Auckland CBD, Auckland 1010</p>
              <p>Email: data@TopEventsNZ.com</p>
              <p>Phone: (09) 555-7000</p>
            </address>
          </section>
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
