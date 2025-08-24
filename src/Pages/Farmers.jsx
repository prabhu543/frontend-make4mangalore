import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'

const staticFarmers = [
  {
    _id: "1",
    name: "Ravi Kumar",
    email: "ravi.kumar@example.com",
    phone: "9876543210",
    region: "North",
    fruitsId: "FRU12345",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    _id: "2",
    name: "Sita Devi",
    email: "sita.devi@example.com",
    phone: "9123456789",
    region: "East",
    fruitsId: "FRU67890",
    img: "https://images.unsplash.com/photo-1614025000673-edf238aaf5d4?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    _id: "3",
    name: "Amit Sharma",
    email: "amit.sharma@example.com",
    phone: "9012345678",
    region: "South",
    fruitsId: "FRU11223",
    img: "https://images.unsplash.com/photo-1618088044996-29f175e9d672?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    _id: "4",
    name: "Neha Jain",
    email: "neha.jain@example.com",
    phone: "9988776655",
    region: "West",
    fruitsId: "FRU44556",
    img: "https://plus.unsplash.com/premium_photo-1708275308965-bde27579612d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    _id: "5",
    name: "Rohit Verma",
    email: "rohit.verma@example.com",
    phone: "9871234567",
    region: "Central",
    fruitsId: "FRU77889",
    img: "https://images.unsplash.com/photo-1628264047320-49bab8dc07d6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]

const Farmers = () => (
  <Card className="max-w-4xl mx-auto mt-8 p-6">
    <CardHeader>
      <CardTitle>All Farmers</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {staticFarmers.map(farmer => (
          <Card key={farmer._id} className="p-4 shadow-md flex flex-col items-center">
            <img src={farmer.img} alt={farmer.name} className="rounded-full mb-4 w-24 h-24 object-cover" />
            <CardHeader>
              <CardTitle>{farmer.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Email:</strong> {farmer.email}</p>
              <p><strong>Phone:</strong> {farmer.phone}</p>
              <p><strong>Region:</strong> {farmer.region}</p>
            </CardContent>
            <CardFooter className={'flex justify-end gap-3'}>
                              
                                <Button
                                  variant="default"
                                  >
                                    Details
                                </Button>
                            </CardFooter>
          </Card>
        ))}
      </div>
    </CardContent>
  </Card>
)

export default Farmers
