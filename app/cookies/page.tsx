import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CookiePolicy() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: March 21, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Understanding Cookies</h2>
            <p>
              Cookies are tiny files placed on your device when you visit a
              website. They help websites remember your actions and preferences
              so you don’t have to re-enter them each time you visit.
            </p>
            <p>
              Some cookies expire when you close your browser (session cookies),
              while others stay longer (persistent cookies).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
            <p>
              casinoevent.casino uses cookies to optimize your experience,
              enhance functionality, and personalize content. We may use cookies
              for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Ensuring key features of our website work smoothly</li>
              <li>Analyzing visitor behavior and site usage</li>
              <li>Saving your preferences and settings</li>
              <li>Customizing marketing based on your interests</li>
            </ul>
            <p>The types of cookies we use include:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>
                <strong>Necessary Cookies:</strong> Required for core
                functionality like login and security.
              </li>
              <li>
                <strong>Preference Cookies:</strong> Store your site preferences
                such as language or region.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how
                visitors interact with the site.
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Track browsing habits for
                targeted advertising.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
            <p>
              We may allow third-party services (such as analytics and
              advertisers) to place cookies to help us understand usage and
              deliver tailored ads.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Cookie Choices</h2>
            <p>
              You can manage or disable cookies through your browser settings.
              However, turning off certain cookies may affect site
              functionality.
            </p>
            <p>
              Instructions for managing cookies can usually be found in your
              browser’s help section.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Learn More</h2>
            <p>For additional information, visit these resources:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>
                All About Cookies:{" "}
                <a
                  href="https://www.allaboutcookies.org/"
                  className="text-primary hover:underline"
                >
                  https://www.allaboutcookies.org/
                </a>
              </li>
              <li>
                Network Advertising Initiative:{" "}
                <a
                  href="https://www.networkadvertising.org/"
                  className="text-primary hover:underline"
                >
                  https://www.networkadvertising.org/
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have questions about how we use cookies, please reach out:
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
