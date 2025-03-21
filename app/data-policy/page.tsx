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
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p>
              At TopEventsNZ.com NZ, we take your data privacy and security
              seriously. This Data Policy explains how we collect, process,
              store, and protect your personal information when you use our
              services.
            </p>
            <p>
              This policy complements our Privacy Policy and provides more
              detailed information about our data handling practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Collection</h2>
            <p>We collect data through various methods, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>
                Information you provide directly (registration forms, bookings,
                etc.)
              </li>
              <li>
                Automated data collection through cookies and similar
                technologies
              </li>
              <li>Information from third-party services with your consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Processing</h2>
            <p>We process your data for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>To provide and improve our services</li>
              <li>To process event registrations and bookings</li>
              <li>To communicate with you about events and services</li>
              <li>To personalize your experience</li>
              <li>To ensure the security of our platform</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p>
              All data processing activities are conducted in accordance with
              applicable data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Storage</h2>
            <p>
              Your data is stored on secure servers located in New Zealand and
              other countries where our service providers operate. We implement
              appropriate technical and organizational measures to protect your
              data from unauthorized access, alteration, disclosure, or
              destruction.
            </p>
            <p>
              We retain your personal information only for as long as necessary
              to fulfill the purposes for which it was collected, including for
              the purposes of satisfying any legal, accounting, or reporting
              requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p>
              We employ industry-standard security measures to protect your
              data, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Encryption of sensitive data</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Staff training on data protection</li>
              <li>Incident response procedures</li>
            </ul>
            <p>
              Despite our efforts, no method of transmission over the Internet
              or electronic storage is 100% secure. We cannot guarantee absolute
              security of your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Sharing</h2>
            <p>We may share your data with:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Service providers who help us operate our business</li>
              <li>Event organizers for events you register for</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your explicit consent</li>
            </ul>
            <p>
              We require all third parties to respect the security of your data
              and to treat it in accordance with the law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Data Rights</h2>
            <p>
              Under applicable data protection laws, you have the following
              rights:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure (the "right to be forgotten")</li>
              <li>Right to restriction of processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Rights related to automated decision-making and profiling</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information
              provided below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Breach Procedures</h2>
            <p>
              In the event of a data breach that may compromise your personal
              information, we will:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Notify affected users without undue delay</li>
              <li>
                Provide information about the breach and steps we're taking
              </li>
              <li>Report to relevant authorities as required by law</li>
              <li>Take measures to mitigate potential adverse effects</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have questions or concerns about our data practices, please
              contact our Data Protection Officer at:
            </p>
            <address className="not-italic mt-4">
              <p>TopEventsNZ.com NZ</p>
              <p>135 Queen Street</p>
              <p>Auckland CBD, Auckland 1010</p>
              <p>Email: data@TopEventsNZ.com.</p>
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
