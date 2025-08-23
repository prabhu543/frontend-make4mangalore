import React, { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import axios from 'axios'

const Industries = () => {
  const [industry, setIndustry] = useState("")
  const [listings, setListings] = useState([])
  const [filteredListings, setFilteredListings] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true)
      setError("")
      try {
        const response = await axios.get('http://localhost:5000/api/list')
        setListings(response.data)
        setFilteredListings(response.data)
      } catch (err) {
        setError("Failed to fetch listings")
      } finally {
        setLoading(false)
      }
    }

    fetchListings()
  }, [])

  const handleSearch = () => {
    const filtered = listings.filter(item =>
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
          <Button onClick={handleSearch} disabled={loading}>
            Search
          </Button>
        </div>

        {loading && <p>Loading listings...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && filteredListings.length === 0 && <p>No listings found.</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredListings.map(listing => (
            <Card key={listing._id} className="p-4 shadow-md">
              <CardHeader>
                <CardTitle>{listing.companyName}</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Product:</strong> {listing.product}</p>
                <p><strong>Quantity:</strong> {listing.quantity}</p>
                <p><strong>Region:</strong> {listing.region}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default Industries
