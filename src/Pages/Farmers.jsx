import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Farmers = () => {
  const [farmer, setFarmer] = useState("")

  const handleSearch = () => {
    // You can handle the search logic here
    console.log("Searching for farmer:", farmer)
  }

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Search by farmer name"
          value={farmer}
          onChange={e => setFarmer(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </div>
  )
}

export default Farmers