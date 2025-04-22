import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TermsAndConditions() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>

        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">
            Effective Date: March 21, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Use of Our Platform</h2>
            <p>
              By accessing casinoevent.casino, you acknowledge that you’ve read,
              understood, and agreed to the terms set out below. If you do not
              agree with these terms, please do not use our platform or
              services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Ownership and Content Usage
            </h2>
            <p>
              All material found on this site, including images, text, branding,
              and features, belong to casinoevent.casino. You are not permitted
              to reuse, copy, or distribute any part of the site’s content
              unless we provide written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Account Responsibilities
            </h2>
            <p>
              When creating an account, you agree to provide accurate and
              up-to-date information. It is your duty to keep your login
              credentials safe. You are solely responsible for all activities
              conducted under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Event Services & Bookings
            </h2>
            <p>
              All ticket sales are binding. Refunds will only be issued if an
              event is formally canceled. casinoevent.casino may modify or
              discontinue services, suspend accounts, or deny transactions at
              our discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Disclaimer & Liability Limits
            </h2>
            <p>
              Our services are provided "as is" and "as available." We do not
              guarantee continuous access or error-free operation. We are not
              liable for indirect or consequential losses that arise from use of
              this site or service.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Technical interruptions or delays</li>
              <li>Data loss or security issues</li>
              <li>Content errors or inaccuracies</li>
              <li>Actions of third-party services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Legal Compliance</h2>
            <p>
              These terms are governed under New Zealand law. If a section of
              this agreement is found to be invalid, it won’t affect the
              enforceability of the remaining terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Policy Updates</h2>
            <p>
              We may revise these terms from time to time. Changes will be
              posted on this page, and it is your responsibility to review them
              periodically. Continued use of our services means you accept the
              updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Talk to Us</h2>
            <p>Need help or clarification? Reach out to our team:</p>
            <address className="not-italic mt-4">
              <p>casinoevent.casino</p>
              <p>135 Queen Street</p>
              <p>Auckland CBD, Auckland 1010</p>
              <p>Email: legal@casinoevent.casino</p>
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
