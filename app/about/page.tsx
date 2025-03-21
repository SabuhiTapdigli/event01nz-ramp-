import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <div className="container py-12">
      <div className="space-y-4 mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">
          About TopEventsNZ.com New Zealand
        </h1>
        <p className="text-xl text-muted-foreground">
          The premier destination for conferences, workshops, and events in
          Aotearoa
        </p>
      </div>

      {/* Our Story Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Founded in 2010, TopEventsNZ.com New Zealand began with a simple
            mission: to create extraordinary event experiences that combine
            valuable content with professional organization in the beautiful
            settings of Aotearoa.
          </p>
          <p className="text-muted-foreground mb-4">
            What started as small business workshops in Auckland venues has
            grown into a full-service event management company, hosting hundreds
            of events annually across New Zealand from Auckland to Queenstown.
          </p>
          <p className="text-muted-foreground">
            Our team of event planners, content curators, and hospitality
            experts work together to ensure every event exceeds expectations and
            creates lasting connections while showcasing the best of New Zealand
            hospitality.
          </p>
        </div>
        <div className="bg-muted rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Our Mission</h3>
          <p className="text-muted-foreground mb-4">
            To connect people through exceptional events that inspire, educate,
            and entertain while showcasing the best of New Zealand.
          </p>
          <h3 className="text-xl font-bold mb-4 mt-6">Our Vision</h3>
          <p className="text-muted-foreground">
            To be New Zealand's most trusted event management company, known for
            creating memorable experiences that bring communities together.
          </p>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At TopEventsNZ.com, we're guided by a set of core values that define
            how we operate and serve our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 border rounded-lg bg-card">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Excellence</h3>
            <p className="text-muted-foreground">
              We strive for excellence in every aspect of our events, from the
              quality of our venues to the service provided by our staff.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg bg-card">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Community</h3>
            <p className="text-muted-foreground">
              We believe in building strong communities through meaningful
              events that connect people and ideas.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg bg-card">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M12 2v4"></path>
                <path d="m6.41 6.41-2.83-2.83"></path>
                <path d="M2 12h4"></path>
                <path d="m6.41 17.59-2.83 2.83"></path>
                <path d="M12 18v4"></path>
                <path d="m17.59 17.59 2.83 2.83"></path>
                <path d="M22 12h-4"></path>
                <path d="m17.59 6.41 2.83-2.83"></path>
                <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-muted-foreground">
              We continuously innovate to create unique and memorable
              experiences that set our events apart.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated professionals who make TopEventsNZ.com events
            exceptional.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: "James Wilson", title: "CEO & Founder" },
            { name: "Aroha Thompson", title: "Event Director" },
            { name: "William Taumaunu", title: "Content Manager" },
            { name: "Emma Patel", title: "Client Relations" },
          ].map((member, index) => (
            <div key={index} className="text-center p-6 border rounded-lg">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-muted-foreground">{member.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-12 px-6 bg-muted rounded-lg">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Experience TopEventsNZ.com?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Join us for an unforgettable event. Browse our upcoming conferences
          and workshops or contact us to create a custom experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/events">Browse Events</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
