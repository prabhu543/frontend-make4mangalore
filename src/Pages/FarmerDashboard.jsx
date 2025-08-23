import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

const FarmerDashboard = () => {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    cropFile: null,
    cropName: "",
    quantity: ""
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === "cropFile") {
      setForm({ ...form, cropFile: files[0] })
    } else {
      setForm({ ...form, [name]: value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can handle file upload and form submission here
    console.log("Submitted:", form)
    setForm({ cropFile: null, cropName: "", quantity: "" })
    setOpen(false)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setOpen(true)}>List a Product</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>List a Product</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="file"
                name="cropFile"
                accept="image/*"
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="cropName"
                placeholder="Crop Name"
                value={form.cropName}
                onChange={handleChange}
                required
              />
              <Input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={form.quantity}
                onChange={handleChange}
                required
              />
              <DialogFooter>
                <Button type="submit">Submit</Button>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">Cancel</Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      {/* Add more dashboard content here */}
    </div>
  )
}

export default FarmerDashboard