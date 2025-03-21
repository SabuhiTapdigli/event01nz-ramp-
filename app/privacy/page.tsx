import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: March 21, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p>
              TopEventsNZ.com NZ ("we", "our", or "us") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or use our services.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree
              with the terms of this privacy policy, please do not access the
              site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The
              information we may collect includes:
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Personal Data</h3>
            <p>
              When you register for an account, purchase tickets, or sign up for
              our newsletter, we collect personally identifiable information,
              such as your:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>
                Payment information (processed securely through our payment
                processors)
              </li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">Usage Data</h3>
            <p>
              We may also collect information about how you access and use our
              website, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Your IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Pages you visit</li>
              <li>Time and date of your visit</li>
              <li>Time spent on those pages</li>
              <li>Other statistics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              How We Use Your Information
            </h2>
            <p>We may use the information we collect about you to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Create and manage your account</li>
              <li>Process ticket purchases and send confirmation emails</li>
              <li>Send you event updates and promotional materials</li>
              <li>Respond to your inquiries and customer service requests</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Disclosure of Your Information
            </h2>
            <p>
              We may share information we have collected about you in certain
              situations. Your information may be disclosed as follows:
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">
              By Law or to Protect Rights
            </h3>
            <p>
              If we believe the release of information about you is necessary to
              respond to legal process, to investigate or remedy potential
              violations of our policies, or to protect the rights, property,
              and safety of others, we may share your information as permitted
              or required by any applicable law, rule, or regulation.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">
              Third-Party Service Providers
            </h3>
            <p>
              We may share your information with third parties that perform
              services for us or on our behalf, including payment processing,
              data analysis, email delivery, hosting services, customer service,
              and marketing assistance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>
                Request that we correct any inaccurate personal information
              </li>
              <li>Request that we delete your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy,
              please contact us at:
            </p>
            <address className="not-italic mt-4">
              <p>TopEventsNZ.com NZ</p>
              <p>135 Queen Street</p>
              <p>Auckland CBD, Auckland 1010</p>
              <p>Email: privacy@TopEventsNZ.com.co.nz</p>
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
