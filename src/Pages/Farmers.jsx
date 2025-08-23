import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import axios from 'axios'

const Farmers = () => {
  const [farmers, setFarmers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchFarmers = async () => {
      setLoading(true)
      setError("")
      try {
        const response = await axios.get('http://localhost:5000/api/farmer') // Adjust URL as needed
        setFarmers(response.data)
      } catch (err) {
        setError("Failed to fetch farmers")
      } finally {
        setLoading(false)
      }
    }
    fetchFarmers()
  }, [])

  return (
    <Card className="max-w-4xl mx-auto mt-8 p-6">
      <CardHeader>
        <CardTitle>All Farmers</CardTitle>
      </CardHeader>
      <CardContent>
        {loading && <p>Loading farmers...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && farmers.length === 0 && <p>No farmers found.</p>}

        <div className="space-y-4">
          {farmers.map(farmer => (
            <Card key={farmer._id} className="p-4 shadow-md">
              <CardHeader>
                <CardTitle>{farmer.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Email:</strong> {farmer.email}</p>
                <p><strong>Phone:</strong> {farmer.phone}</p>
                <p><strong>Region:</strong> {farmer.region}</p>
                <p><strong>Fruits ID:</strong> {farmer.fruitsId}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default Farmers
