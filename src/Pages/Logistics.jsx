import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Logistics = () => {
  const [region, setRegion] = useState("")

  const handleSearch = () => {
    // You can handle the search logic here
    console.log("Searching for region:", region)
  }

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Search by region"
          value={region}
          onChange={e => setRegion(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </div>
  )
}
export default Logistics