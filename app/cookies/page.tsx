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
            <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
            <p>
              Cookies are small pieces of text sent to your web browser by a
              website you visit. A cookie file is stored in your web browser and
              allows the website or a third-party to recognize you and make your
              next visit easier and the website more useful to you.
            </p>
            <p>
              Cookies can be "persistent" or "session" cookies. Persistent
              cookies remain on your personal computer or mobile device when you
              go offline, while session cookies are deleted as soon as you close
              your web browser.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              How TopEventsNZ.com NZ Uses Cookies
            </h2>
            <p>
              When you use and access our website, we may place a number of
              cookie files in your web browser. We use cookies for the following
              purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>To enable certain functions of the website</li>
              <li>To provide analytics</li>
              <li>To store your preferences</li>
              <li>
                To enable advertisements delivery, including behavioral
                advertising
              </li>
            </ul>
            <p>
              We use both session and persistent cookies on the website and we
              use different types of cookies to run the website:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>
                <strong>Essential cookies.</strong> We may use essential cookies
                to authenticate users and prevent fraudulent use of user
                accounts.
              </li>
              <li>
                <strong>Preferences cookies.</strong> We may use preferences
                cookies to remember information that changes the way the website
                behaves or looks, such as your preferred language or the region
                you are in.
              </li>
              <li>
                <strong>Analytics cookies.</strong> We may use analytics cookies
                to track information about how the website is used so that we
                can make improvements. We may also use analytics cookies to test
                new advertisements, pages, features, or new functionality of the
                website to see how our users react to them.
              </li>
              <li>
                <strong>Marketing cookies.</strong> These types of cookies are
                used to deliver advertisements on and through the service and
                track the performance of these advertisements.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various
              third-party cookies to report usage statistics of the website,
              deliver advertisements on and through the website, and so on.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              What Are Your Choices Regarding Cookies
            </h2>
            <p>
              If you'd like to delete cookies or instruct your web browser to
              delete or refuse cookies, please visit the help pages of your web
              browser.
            </p>
            <p>
              Please note, however, that if you delete cookies or refuse to
              accept them, you might not be able to use all of the features we
              offer, you may not be able to store your preferences, and some of
              our pages might not display properly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Where Can You Find More Information About Cookies
            </h2>
            <p>
              You can learn more about cookies and the following third-party
              websites:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>
                AllAboutCookies:{" "}
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
              If you have any questions about our Cookie Policy, please contact
              us at:
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
