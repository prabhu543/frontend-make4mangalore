import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import axios from 'axios'

const Logistics = () => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchLogistics = async () => {
      setError("")
      setLoading(true)
      try {
        const response = await axios.get('http://localhost:5000/api/logistic')
        setResults(response.data)
      } catch (err) {
        setError("Failed to fetch logistics data")
        setResults([])
      } finally {
        setLoading(false)
      }
    }

    fetchLogistics()
  }, [])

  return (
    <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {loading && <p className="col-span-full text-center">Loading logistics data...</p>}
      {error && <p className="col-span-full text-center text-red-600">{error}</p>}
      {!loading && results.length === 0 && <p className="col-span-full text-center">No logistics data found.</p>}

      {results.map(logistic => (
        <Card key={logistic._id} className="shadow-md">
          <CardHeader>
            <CardTitle>{logistic.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Email:</strong> {logistic.email}</p>
            <p><strong>Phone:</strong> {logistic.phone}</p>
            <p><strong>Region:</strong> {logistic.region}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default Logistics
