import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const staticLogistics = [
  {
    _id: "1",
    name: "Fast Track Logistics",
    email: "contact@fasttrack.com",
    phone: "9876543210",
    region: "North",
    img: "https://images.unsplash.com/photo-1672084643056-90c21867b409?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    _id: "2",
    name: "Quick Move Logistics",
    email: "info@quickmove.com",
    phone: "9123456789",
    region: "South",
    img: "https://images.unsplash.com/photo-1581406785482-53e693f8eb78?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    _id: "3",
    name: "Reliable Transport",
    email: "support@reliable.com",
    phone: "9012345678",
    region: "East",
    img: "https://images.unsplash.com/photo-1742106848698-2c33cc3ce66e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    _id: "4",
    name: "Eagle Logistics",
    email: "hello@eaglelogistics.com",
    phone: "9988776655",
    region: "West",
    img: "https://images.unsplash.com/photo-1721804295754-1905f69c86ad?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    _id: "5",
    name: "Skyline Freight",
    email: "contact@skylinefreight.com",
    phone: "9871234567",
    region: "Central",
    img: "https://images.unsplash.com/photo-1696663118264-55a63c75409b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]

const Logistics = () => (
  <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {staticLogistics.map(logistic => (
      <Card key={logistic._id} className="shadow-md flex flex-col items-center">
        <img
          src={logistic.img}
          alt={logistic.name}
          className="rounded-full mb-4 w-24 h-24 object-cover"
        />
        <CardHeader>
          <CardTitle>{logistic.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Email:</strong> {logistic.email}
          </p>
          <p>
            <strong>Phone:</strong> {logistic.phone}
          </p>
          <p>
            <strong>Region:</strong> {logistic.region}
          </p>
          <div className="mt-4 flex gap-2 justify-end">
            <Button
              variant="outline"
              onClick={() => window.open(`tel:${logistic.phone}`, "_self")}
            >
              Call
            </Button>
            <Button
              variant="default"
            >
              Details
            </Button>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
)

export default Logistics
