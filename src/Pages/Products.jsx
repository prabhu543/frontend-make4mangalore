import React, { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import axios from 'axios'

const Products = () => {
  const [product, setProduct] = useState("")
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      setError("")
      try {
        const response = await axios.get('http://localhost:5000/api/product')
        setProducts(response.data)
        setFilteredProducts(response.data)
      } catch (err) {
        setError("Failed to fetch products")
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const handleSearch = () => {
    const filtered = products.filter(p =>
      p.description.toLowerCase().includes(product.toLowerCase())
    )
    setFilteredProducts(filtered)
  }

  return (
    <Card className="max-w-4xl mx-auto mt-8 p-6">
      <CardHeader>
        <CardTitle>Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-6">
          <Input
            placeholder="Search by product description"
            value={product}
            onChange={e => setProduct(e.target.value)}
          />
          <Button onClick={handleSearch} disabled={loading}>
            Search
          </Button>
        </div>

        {loading && <p>Loading products...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && filteredProducts.length === 0 && <p>No products found.</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredProducts.map(prod => (
            <Card key={prod._id} className="p-4 shadow-md">
              <CardHeader>
                <CardTitle>{prod.farmerName}</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Description:</strong> {prod.description}</p>
                <p><strong>Region:</strong> {prod.region}</p>
                <p><strong>Quantity:</strong> {prod.quantity}</p>
                <p><strong>Price:</strong> ${prod.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default Products
