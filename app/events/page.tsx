import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Clock, MapPin, Users, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function Events() {
  // Events data
  const events = [
    {
      id: 1,
      title: "Tech Innovation Summit",
      date: "April 15, 2025",
      time: "9:00 AM",
      location: "Aotea Centre, Auckland",
      spots: "Limited to 500 attendees",
      category: "Conference",
    },
    {
      id: 2,
      title: "Sustainable Business Conference",
      date: "May 20, 2025",
      time: "10:00 AM",
      location: "Dunedin Centre",
      spots: "Limited to 300 attendees",
      category: "Conference",
    },
    {
      id: 3,
      title: "New Zealand Music Awards",
      date: "June 10, 2025",
      time: "7:00 PM",
      location: "Christchurch Town Hall",
      spots: "Limited to 800 guests",
      category: "Entertainment",
    },
    {
      id: 4,
      title: "Digital Marketing Masterclass",
      date: "July 5, 2025",
      time: "9:30 AM",
      location: "Claudelands, Hamilton",
      spots: "Limited to 200 attendees",
      category: "Workshop",
    },
    {
      id: 5,
      title: "Queenstown Winter Festival",
      date: "August 12, 2025",
      time: "All Day",
      location: "Queenstown Events Centre",
      spots: "Limited to 1000 attendees",
      category: "Festival",
    },
    {
      id: 6,
      title: "Leadership & Management Symposium",
      date: "September 8, 2025",
      time: "9:00 AM",
      location: "Te Papa, Wellington",
      spots: "Limited to 400 attendees",
      category: "Conference",
    },
  ]

  // Categories for filtering
  const categories = ["All", "Conference", "Workshop", "Entertainment", "Festival", "Networking", "Seminar"]

  return (
    <div className="container py-12">
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold">Upcoming Events</h1>
        <p className="text-muted-foreground">Browse and book our exclusive events and conferences</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search events..." className="pl-10" />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          {categories.map((category) => (
            <Badge key={category} variant={category === "All" ? "default" : "outline"} className="cursor-pointer">
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <Card key={event.id} className="overflow-hidden">
            <CardContent className="p-6">
              <Badge className="mb-2">{event.category}</Badge>
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
    </div>
  )
}

