"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Clock, Ticket, User, CreditCard, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface UserType {
  id: string
  firstName: string
  lastName: string
  email: string
}

interface Booking {
  id: number
  eventId: number
  eventTitle: string
  eventDate: string
  eventTime: string
  tickets: number
  bookingDate: string
}

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<UserType | null>(null)
  const [bookings, setBookings] = useState<Booking[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/login")
      return
    }

    setUser(JSON.parse(userData))

    // Get bookings from localStorage
    const bookingsData = localStorage.getItem("bookings")
    if (bookingsData) {
      setBookings(JSON.parse(bookingsData))
    }

    setIsLoading(false)
  }, [router])

  if (isLoading) {
    return (
      <div className="container py-12 flex justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">My Dashboard</h1>

      <Tabs defaultValue="bookings">
        <TabsList className="mb-8">
          <TabsTrigger value="bookings">My Bookings</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="bookings">
          {bookings.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Ticket className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-2">No Bookings Yet</h3>
              <p className="text-muted-foreground mb-6">
                You haven't booked any events yet. Browse our upcoming events and secure your spot!
              </p>
              <Button asChild>
                <Link href="/events">Browse Events</Link>
              </Button>
            </div>
          ) : (
            <div className="grid gap-6">
              {bookings.map((booking) => (
                <Card key={booking.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <Badge className="mb-2">{booking.eventId}</Badge>
                        <h3 className="text-xl font-bold">{booking.eventTitle}</h3>
                        <div className="flex flex-wrap gap-4 mt-2">
                          <div className="flex items-center text-muted-foreground">
                            <CalendarDays className="h-4 w-4 mr-2" />
                            <span>{booking.eventDate}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{booking.eventTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="text-sm text-muted-foreground mb-1">
                          Booked on {new Date(booking.bookingDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">
                            {booking.tickets} {booking.tickets === 1 ? "ticket" : "tickets"}
                          </span>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Button size="sm" variant="outline" asChild>
                            <Link href={`/events/${booking.eventId}`}>View Event</Link>
                          </Button>
                          <Button size="sm">Download Ticket</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="profile">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Manage your personal details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Full Name</span>
                    <span className="font-medium">
                      {user?.firstName} {user?.lastName}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Email</span>
                    <span className="font-medium">{user?.email}</span>
                  </div>
                  <Button variant="outline" className="mt-4">
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="h-5 w-5 mr-2 text-muted-foreground" />
                      <span>Change Password</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Update
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CreditCard className="h-5 w-5 mr-2 text-muted-foreground" />
                      <span>Payment Methods</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Manage
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                      <span>Notification Preferences</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Configure
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

