"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Clock, MapPin, Users, ArrowLeft, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function EventDetail({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isBooking, setIsBooking] = useState(false)
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tickets: "1",
    paymentMethod: "credit-card",
  })

  // In a real app, this would fetch event data from an API
  const event = {
    id: Number.parseInt(params.id),
    title: "Tech Innovation Summit",
    date: "April 15, 2025",
    time: "9:00 AM",
    location: "Aotea Centre, Auckland",
    spots: "Limited to 500 attendees",
    category: "Conference",
    description:
      "Join us for the premier tech innovation summit in New Zealand. This event brings together technology leaders, innovators, and entrepreneurs from across the Asia-Pacific region to share insights, showcase new technologies, and explore the future of digital transformation. Whether you're a startup founder, corporate executive, or tech enthusiast, this summit offers valuable networking and learning opportunities in the heart of Auckland.",
    agenda: [
      "8:00 AM - Registration and networking breakfast",
      "9:00 AM - Opening keynote: The Future of AI in Business",
      "10:30 AM - Panel discussion: Sustainable Technology",
      "12:00 PM - Networking lunch",
      "1:30 PM - Breakout sessions and workshops",
      "3:30 PM - Startup showcase",
      "5:00 PM - Closing keynote and awards",
      "6:30 PM - Evening reception and networking",
    ],
    amenities: [
      "Full-day catering included",
      "VIP lounge access for premium ticket holders",
      "Professional photography and recording",
      "Discounted parking",
      "After-event networking reception with views of Auckland Harbour",
    ],
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, paymentMethod: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsBooking(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real app, this would send booking data to a backend
      setBookingSuccess(true)

      // Store booking in localStorage
      const user = localStorage.getItem("user")
      const bookings = JSON.parse(localStorage.getItem("bookings") || "[]")

      bookings.push({
        id: Date.now(),
        eventId: event.id,
        eventTitle: event.title,
        eventDate: event.date,
        eventTime: event.time,
        tickets: Number.parseInt(formData.tickets),
        bookingDate: new Date().toISOString(),
      })

      localStorage.setItem("bookings", JSON.stringify(bookings))
    } catch (error) {
      console.error("Booking failed:", error)
    } finally {
      setIsBooking(false)
    }
  }

  return (
    <div className="container py-12">
      <Link href="/events" className="flex items-center text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Events
      </Link>

      {bookingSuccess ? (
        <Card className="max-w-2xl mx-auto">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
              <p className="text-muted-foreground mb-6">
                Your booking for {event.title} has been confirmed. We've sent a confirmation email with all the details.
              </p>
              <div className="space-y-4 w-full max-w-md">
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Event:</span>
                  <span>{event.title}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Date & Time:</span>
                  <span>
                    {event.date}, {event.time}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Location:</span>
                  <span>{event.location}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Tickets:</span>
                  <span>{formData.tickets}</span>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <Button asChild>
                  <Link href="/dashboard">View My Bookings</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/events">Browse More Events</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Badge>{event.category}</Badge>
                <h1 className="text-3xl font-bold mt-2">{event.title}</h1>
              </div>

              <Tabs defaultValue="details">
                <TabsList className="mb-4">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="agenda">Agenda</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="space-y-4">
                  <p className="text-muted-foreground">{event.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center p-4 border rounded-lg">
                      <CalendarDays className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Date</p>
                        <p className="font-medium">{event.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 border rounded-lg">
                      <Clock className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Time</p>
                        <p className="font-medium">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 border rounded-lg">
                      <MapPin className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">{event.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 border rounded-lg">
                      <Users className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Capacity</p>
                        <p className="font-medium">{event.spots}</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="agenda">
                  <h3 className="text-xl font-bold mb-4">Event Agenda</h3>
                  <ul className="space-y-2">
                    {event.agenda.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="amenities">
                  <h3 className="text-xl font-bold mb-4">Event Amenities</h3>
                  <ul className="space-y-2">
                    {event.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-primary" />
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Book Your Ticket</h3>
                  <div className="mb-4 pb-2 border-b">
                    <p className="text-muted-foreground">Registration required to attend this event</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tickets">Number of Tickets</Label>
                      <Input
                        id="tickets"
                        name="tickets"
                        type="number"
                        min="1"
                        max="10"
                        value={formData.tickets}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Payment Method</Label>
                      <RadioGroup
                        value={formData.paymentMethod}
                        onValueChange={handleRadioChange}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="credit-card" id="credit-card" />
                          <Label htmlFor="credit-card" className="font-normal">
                            Credit Card
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal" className="font-normal">
                            PayPal
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                          <Label htmlFor="bank-transfer" className="font-normal">
                            Bank Transfer
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="pt-4 border-t">
                      <Button type="submit" className="w-full" disabled={isBooking}>
                        {isBooking ? "Processing..." : "Book Now"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

