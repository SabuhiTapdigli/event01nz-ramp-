import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">
            Effective Date: March 21, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <p>
              At casinoevent.casino, your trust matters to us. This Privacy
              Policy outlines how we collect, use, and protect your personal
              data when you visit our website or engage with our services.
            </p>
            <p>
              By using our site, you accept the practices described in this
              policy. If you disagree, please discontinue use of the platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Data Collection Overview
            </h2>
            <p>
              We gather information to enhance your experience. This includes:
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Details You Provide</h3>
            <p>When you sign up, buy tickets, or subscribe, we may request:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing or shipping address</li>
              <li>Payment details (handled by secure third parties)</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">Technical Insights</h3>
            <p>We automatically collect technical data such as:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>IP address and device information</li>
              <li>Browser and operating system</li>
              <li>Pages visited and time spent</li>
              <li>Date/time of access</li>
              <li>User interactions and behavior patterns</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Why We Use Your Info</h2>
            <p>Your data may be used to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Set up and manage your account</li>
              <li>Process transactions and send updates</li>
              <li>Deliver event news and exclusive offers</li>
              <li>Respond to queries or support requests</li>
              <li>Enhance website features and content</li>
              <li>Fulfill legal and compliance obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">When We Share Data</h2>
            <p>
              We may disclose your information under the following conditions:
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">
              Legal & Safety Reasons
            </h3>
            <p>
              We may share data to comply with laws, enforce our terms, or
              protect our users, systems, and rights.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Service Providers</h3>
            <p>
              We collaborate with trusted vendors to handle services such as
              hosting, analytics, payment, marketing, and customer care.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Choices & Rights</h2>
            <p>You may exercise your rights, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Requesting access to your personal data</li>
              <li>Correcting or updating your information</li>
              <li>Asking for deletion of your records</li>
              <li>Managing your communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
            <p>
              If you have any questions or need assistance regarding this
              Privacy Policy, feel free to reach out:
            </p>
            <address className="not-italic mt-4">
              <p>casinoevent.casino</p>
              <p>135 Queen Street</p>
              <p>Auckland CBD, Auckland 1010</p>
              <p>Email: privacy@casinoevent.casino</p>
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
