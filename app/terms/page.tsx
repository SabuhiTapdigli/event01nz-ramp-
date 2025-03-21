import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TermsAndConditions() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>

        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: March 21, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p>
              These Terms and Conditions constitute a legally binding agreement
              made between you and TopEventsNZ.com NZ concerning your access to
              and use of our website and services.
            </p>
            <p>
              By accessing our website and/or using our services, you agree to
              be bound by these Terms and Conditions. If you disagree with any
              part of these terms, you may not access the website or use our
              services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Intellectual Property Rights
            </h2>
            <p>
              Unless otherwise indicated, the website and all its content,
              features, and functionality are owned by TopEventsNZ.com NZ and
              are protected by copyright, trademark, and other intellectual
              property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works
              of, publicly display, publicly perform, republish, download,
              store, or transmit any of the material on our website without our
              prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">User Accounts</h2>
            <p>
              When you create an account with us, you guarantee that the
              information you provide is accurate, complete, and current at all
              times. Inaccurate, incomplete, or obsolete information may result
              in the immediate termination of your account.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of your
              account and password and for restricting access to your computer.
              You agree to accept responsibility for all activities that occur
              under your account or password.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Event Bookings and Tickets
            </h2>
            <p>
              All event bookings and ticket purchases are final and
              non-refundable unless an event is canceled or rescheduled by the
              organizer.
            </p>
            <p>
              TopEventsNZ.com NZ reserves the right to refuse service, terminate
              accounts, remove or edit content, or cancel orders at our sole
              discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p>
              In no event shall TopEventsNZ.com NZ, nor its directors,
              employees, partners, agents, suppliers, or affiliates, be liable
              for any indirect, incidental, special, consequential, or punitive
              damages, including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>
                Your access to or use of or inability to access or use the
                service
              </li>
              <li>Any conduct or content of any third party on the service</li>
              <li>Any content obtained from the service</li>
              <li>
                Unauthorized access, use, or alteration of your transmissions or
                content
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of New Zealand, without regard to its conflict of law
              provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will
              not be considered a waiver of those rights. If any provision of
              these Terms is held to be invalid or unenforceable by a court, the
              remaining provisions of these Terms will remain in effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material, we will
              provide at least 30 days' notice prior to any new terms taking
              effect.
            </p>
            <p>
              By continuing to access or use our service after any revisions
              become effective, you agree to be bound by the revised terms. If
              you do not agree to the new terms, you are no longer authorized to
              use the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <address className="not-italic mt-4">
              <p>TopEventsNZ.com NZ</p>
              <p>135 Queen Street</p>
              <p>Auckland CBD, Auckland 1010</p>
              <p>Email: legal@TopEventsNZ.com.co.nz</p>
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
