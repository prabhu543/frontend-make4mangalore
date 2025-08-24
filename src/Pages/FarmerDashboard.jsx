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
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const staticFarmers = [
  {
    _id: "f1",
    name: "Ravi Kumar",
    products: [
      {
        _id: "p1",
        description: "Dragon fruits",
        quantity: 100,
        price: 50,
        img: "https://plus.unsplash.com/premium_photo-1723291697706-2755e4244167?q=80&w=687&auto=format&fit=crop"
      },
      {
        _id: "p2",
        description: "Papaya",
        quantity: 150,
        price: 75,
        img: "https://plus.unsplash.com/premium_photo-1723245803720-7c54f4a5074c?q=80&w=1470&auto=format&fit=crop"
      }
    ]
  }
]

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
    console.log("Submitted:", form)
    setForm({ cropFile: null, cropName: "", quantity: "" })
    setOpen(false)
  }

  const raviKumar = staticFarmers.find(farmer => farmer.name === "Ravi Kumar")

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
                  <Button type="button" variant="secondary">
                    Cancel
                  </Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Ravi Kumar's listed products */}
      <h2 className="text-2xl font-semibold mb-6">Listed Products</h2>
      <div className="max-w-4xl mx-auto space-y-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {raviKumar.products.map(prod => (
          <Card key={prod._id} className="p-4 shadow-md flex flex-col items-center">
            <img
              src={prod.img}
              alt={prod.description}
              className="rounded mb-4 w-24 h-24 object-cover"
            />
            <CardHeader>
              <CardTitle>{prod.description}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Quantity: {prod.quantity}</p>
              <p>Price: ${prod.price}</p>
            </CardContent>
            <CardFooter>
              <Button
                                                variant="default"
                                                >
                                                  update details
                                              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default FarmerDashboard
