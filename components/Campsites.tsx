'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tent, MapPin, Users, ArrowLeft } from 'lucide-react'

// Mock data for campsites
const campsites = [
  {
    id: 1,
    name: "Pine Valley Campground",
    location: "Rocky Mountains, CO",
    description: "Nestled in a serene pine forest with stunning mountain views.",
    capacity: 50,
    amenities: ["Hiking Trails", "Fishing", "Fire Pits"],
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 2,
    name: "Lakeside Retreat",
    location: "Lake Tahoe, CA",
    description: "Beautiful lakefront campsites with water activities.",
    capacity: 30,
    amenities: ["Boating", "Swimming", "Picnic Areas"],
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 3,
    name: "Desert Oasis",
    location: "Joshua Tree, CA",
    description: "Experience the magic of the desert under starry skies.",
    capacity: 20,
    amenities: ["Stargazing", "Rock Climbing", "Nature Walks"],
    image: "/placeholder.svg?height=200&width=300"
  }
]

export default function Component() {
  const [selectedCampsite, setSelectedCampsite] = useState(null)

  const handleCardClick = (campsite) => {
    setSelectedCampsite(campsite)
  }

  const handleBackClick = () => {
    setSelectedCampsite(null)
  }

  if (selectedCampsite) {
    return (
      <div className="container mx-auto p-4">
        <Button onClick={handleBackClick} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Campsites
        </Button>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>{selectedCampsite.name}</CardTitle>
            <CardDescription>{selectedCampsite.location}</CardDescription>
          </CardHeader>
          <CardContent>
            <img src={selectedCampsite.image} alt={selectedCampsite.name} className="w-full h-64 object-cover rounded-md mb-4" />
            <p className="mb-4">{selectedCampsite.description}</p>
            <div className="flex items-center mb-2">
              <Users className="mr-2 h-4 w-4" />
              <span>Capacity: {selectedCampsite.capacity} campers</span>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Amenities:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedCampsite.amenities.map((amenity, index) => (
                  <Badge key={index} variant="secondary">{amenity}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Book Now</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Explore Our Campsites</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campsites.map((campsite) => (
          <Card key={campsite.id} className="cursor-pointer hover:shadow-lg transition-shadow duration-300" onClick={() => handleCardClick(campsite)}>
            <CardHeader>
              <CardTitle>{campsite.name}</CardTitle>
              <CardDescription className="flex items-center">
                <MapPin className="mr-1 h-4 w-4" /> {campsite.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img src={campsite.image} alt={campsite.name} className="w-full h-40 object-cover rounded-md mb-4" />
              <p className="text-sm text-gray-600 mb-2">{campsite.description}</p>
              <div className="flex items-center">
                <Tent className="mr-1 h-4 w-4" />
                <span className="text-sm">Capacity: {campsite.capacity} campers</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}