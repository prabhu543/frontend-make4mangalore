import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    address: "",
    phone: "",
    region: "",
    fruitsId: "",
    adharNumber: ""
  })
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError("")
  }

  const handleRoleChange = (value) => {
    setForm({ ...form, role: value })
    setError("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      // Send all the extra details to backend
      const response = await axios.post('http://localhost:5000/api/farmer/signup', {
        name: form.name,
        email: form.email,
        password: form.password,
        role: form.role,
        address: form.address,
        phone: form.phone,
        region: form.region,
        fruitsId: form.fruitsId,
        adharNumber: form.adharNumber
      })

      const userId = response.data._id
      if (userId) {
        localStorage.setItem('userId', userId)
      }

      if (form.role === 'user') navigate('/user')
      else if (form.role === 'farmer') navigate('/farmer')
      else if (form.role === 'industries') navigate('/industry')
      else if (form.role === 'logistics') navigate('/logistic')
      else navigate('/')

    } catch (err) {
      setError(err.response?.data?.error || 'Signup failed')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Signup</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} required />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} required />
            </div>

            <div>
              <Label htmlFor="address">Address</Label>
              <Input id="address" name="address" type="text" placeholder="Address" value={form.address} onChange={handleChange} required />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" type="tel" placeholder="Phone Number" value={form.phone} onChange={handleChange} pattern="[0-9]{10}" required />
            </div>

            <div>
              <Label htmlFor="region">Region</Label>
              <Input id="region" name="region" type="text" placeholder="Region" value={form.region} onChange={handleChange} required />
            </div>

            <div>
              <Label htmlFor="fruitsId">Fruits ID</Label>
              <Input id="fruitsId" name="fruitsId" type="text" placeholder="Fruits ID" value={form.fruitsId} onChange={handleChange} required />
            </div>

            <div>
              <Label htmlFor="adharNumber">Aadhar Number</Label>
              <Input id="adharNumber" name="adharNumber" type="text" placeholder="Aadhar Number" value={form.adharNumber} onChange={handleChange} required />
            </div>

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <div>
              <Label htmlFor="role">Role</Label>
              <Select onValueChange={handleRoleChange} value={form.role} required>
                <SelectTrigger id="role" className="w-full">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="farmer">Farmer</SelectItem>
                  <SelectItem value="industries">Industries</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                  <SelectItem value="logistics">Logistics</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full">Signup</Button>
          </form>

          <div className="mt-4 text-center">
            <span>Have an account? </span>
            <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Signup
