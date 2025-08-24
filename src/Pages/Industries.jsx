import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const staticListings = [
  {
    _id: "1",
    companyName: "Fresh Farms Ltd",
    product: "Oranges",
    quantity: 150,
    region: "West",
    img: "https://images.unsplash.com/photo-1629175023293-8c296d371426?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    _id: "2",
    companyName: "Green Valley Co",
    product: "Apples",
    quantity: 200,
    region: "North",
    img: "https://images.unsplash.com/photo-1624631590217-d32471384767?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    _id: "3",
    companyName: "Sunshine Orchards",
    product: "Mangoes",
    quantity: 100,
    region: "South",
    img: "https://images.unsplash.com/photo-1532617754634-819393ff5106?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    _id: "4",
    companyName: "Blue River Farms",
    product: "Bananas",
    quantity: 300,
    region: "East",
    img: "https://imgs.search.brave.com/rlzRGdJJV3sKiJOuzHkBtRGPMHay2f30hDVMkyfNerE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMC8w/NS8yNy8xNy8wOC9i/dWlsZGluZy01MjI4/MTAxXzY0MC5qcGc"
  },
  {
    _id: "5",
    companyName: "Golden Harvest",
    product: "Pineapples",
    quantity: 75,
    region: "Central",
    img: "https://imgs.search.brave.com/qNwv4eSzm9BijCjMuVv6Jx4FRYU8pXfKZ2XZsqAduag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9idXNp/bmVzcy1idWlsZGlu/Zy0yNTM5NzIxNy5q/cGc"
  }
]

const Industries = () => {
  const [industry, setIndustry] = useState("")
  const [filteredListings, setFilteredListings] = useState(staticListings)

  const handleSearch = () => {
    const filtered = staticListings.filter(item =>
      item.product.toLowerCase().includes(industry.toLowerCase())
    )
    setFilteredListings(filtered)
  }

  return (
    <Card className="max-w-4xl mx-auto mt-8 p-6">
      <CardHeader>
        <CardTitle>Industry Listings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-6">
          <Input
            placeholder="Search by product name"
            value={industry}
            onChange={e => setIndustry(e.target.value)}
          />
          <Button onClick={handleSearch}>
            Search
          </Button>
        </div>

        {filteredListings.length === 0 && <p>No listings found.</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredListings.map(listing => (
            <Card key={listing._id} className="p-4 shadow-md flex flex-col items-center">
              <img src={listing.img} alt={listing.product} className="rounded mb-4 w-24 h-24 object-cover" />
              <CardHeader>
                <CardTitle>{listing.companyName}</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Product:</strong> {listing.product}</p>
                <p><strong>Quantity:</strong> {listing.quantity}</p>
                <p><strong>Region:</strong> {listing.region}</p>
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
}

export default Industries
