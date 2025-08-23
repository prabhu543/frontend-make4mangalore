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

const IndustryDashboard = () => {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    need: "",
    quantity: "",
    region: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`Submitted:`, form)
    setForm({ need: "", quantity: "", region: "" })
    setOpen(false)
  }

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setOpen(true)}>Open Popup</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Send Data</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
            type={'text'}
              name="need"
              placeholder="What do you need?"
              value={form.need}
              onChange={handleChange}
              required
            />
            <Input
              name="quantity"
              placeholder="Quantity needed"
              type="number"
              value={form.quantity}
              onChange={handleChange}
              required
            />
            <Input
              name="region"
              placeholder="Region or Place"
              value={form.region}
              onChange={handleChange}
              required
              type={'text'}
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
  )
}

export default IndustryDashboard