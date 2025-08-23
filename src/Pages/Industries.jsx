import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Industries = () => {
  const [industry, setIndustry] = useState("")

  const handleSearch = () => {
    // You can handle the search logic here
    console.log("Searching for industry:", industry)
  }

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Search by industry name"
          value={industry}
          onChange={e => setIndustry(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </div>
  )
}

export default Industries