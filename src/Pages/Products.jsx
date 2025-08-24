import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const staticProducts = [
  {
    _id: "1",
    farmerName: "Ravi Kumar",
    description: "Dragon fruits",
    region: "North",
    quantity: 100,
    price: 50,
    img: "https://plus.unsplash.com/premium_photo-1723291697706-2755e4244167?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    _id: "2",
    farmerName: "Ravi Kumar",
    description: "Pappaya",
    region: "North",
    quantity: 150,
    price: 75,
    img: "https://plus.unsplash.com/premium_photo-1723245803720-7c54f4a5074c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    _id: "3",
    farmerName: "Ravi Kumar",
    description: "Apples",
    region: "North",
    quantity: 120,
    price: 60,
    img: "https://images.unsplash.com/photo-1652567523140-f332398604a2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    _id: "4",
    farmerName: "Ravi Kumar",
    description: "Rambutan",
    region: "North",
    quantity: 200,
    price: 40,
    img: "https://plus.unsplash.com/premium_photo-1722851542610-937031efd92c?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    _id: "5",
    farmerName: "Ravi Kumar",
    description: "Juicy Watermelons",
    region: "North",
    quantity: 80,
    price: 90,
    img: "https://images.unsplash.com/photo-1589786719173-70a726ebda17?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]

const Products = () => {
  const [product, setProduct] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(staticProducts)

  const handleSearch = () => {
    const filtered = staticProducts.filter(p =>
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
          <Button onClick={handleSearch}>
            Search
          </Button>
        </div>

        {filteredProducts.length === 0 && <p>No products found.</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredProducts.map(prod => (
            <Card key={prod._id} className="p-4 shadow-md flex flex-col items-center">
              <img src={prod.img} alt={prod.description} className="rounded mb-4 w-24 h-24 object-cover" />
              <CardHeader>
                <CardTitle>{prod.farmerName}</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Description:</strong> {prod.description}</p>
                <p><strong>Region:</strong> {prod.region}</p>
                <p><strong>Quantity:</strong> {prod.quantity}</p>
                <p><strong>Price:</strong> ${prod.price}</p>
              </CardContent>
              <CardFooter className={'flex justify-end gap-3'}>
                <Button
                  variant="outline"
                  >
                  Buy
                  </Button>
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

export default Products
