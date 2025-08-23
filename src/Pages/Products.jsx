import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Products = () => {
  const [product, setProduct] = useState("")

  const handleSearch = () => {
    // You can handle the search logic here
    console.log("Searching for product:", product)
  }

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Search by product name"
          value={product}
          onChange={e => setProduct(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </div>
  )
}

export default Products