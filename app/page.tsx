import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";

export default function Home() {
  // Featured events data
  const featuredEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit",
      date: "April 15, 2025",
      time: "9:00 AM",
      location: "Aotea Centre, Auckland",
      spots: "Limited to 500 attendees",
    },
    {
      id: 2,
      title: "Sustainable Business Conference",
      date: "May 20, 2025",
      time: "10:00 AM",
      location: "Dunedin Centre",
      spots: "Limited to 300 attendees",
    },
    {
      id: 3,
      title: "New Zealand Music Awards",
      date: "June 10, 2025",
      time: "7:00 PM",
      location: "Christchurch Town Hall",
      spots: "Limited to 800 guests",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="container py-24 flex flex-col justify-center items-center text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Top Events in New Zealand
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Discover and book the best conferences, workshops, and entertainment
            events across Aotearoa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/events">Browse Events</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 bg-primary-foreground/10"
              asChild
            >
              <Link href="/register">Register Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Events</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our exclusive events and experience the best conferences,
              workshops, and entertainment that New Zealand has to offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-muted-foreground">
                      <CalendarDays className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.spots}</span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button asChild>
                      <Link href={`/events/${event.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose casinoevent.casino
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide the ultimate event experience with professional
              organization, premium venues, and exclusive networking
              opportunities across New Zealand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg bg-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Staff</h3>
              <p className="text-muted-foreground">
                Our experienced event coordinators ensure a smooth and enjoyable
                experience for all attendees.
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg bg-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M17 8h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4"></path>
                  <path d="M13 12H3"></path>
                  <path d="m8 7-5 5 5 5"></path>
                  <path d="M13 12h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Venues</h3>
              <p className="text-muted-foreground">
                Top-quality conference centers and event spaces with
                state-of-the-art facilities.
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg bg-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Nationwide Coverage</h3>
              <p className="text-muted-foreground">
                Events in all major cities across New Zealand, from Auckland to
                Queenstown.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Events?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Register now to get access to exclusive events and special offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/register">Register Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/events">Browse Events</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
