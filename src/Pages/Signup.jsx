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
    phone: "",
    address: "",
    region: "",
    fruitsId: "",
    adharNumber: "",
    industryDescription: "",
    photo: "",
    role: ""
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
      const response = await axios.post('http://localhost:5000/api/signup', form)

      const userId = response.data._id
      if (userId) localStorage.setItem('userId', userId)

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
              <Input required id="name" name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input required id="email" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input required id="phone" name="phone" type="tel" placeholder="10-digit Phone Number" pattern="[0-9]{10}" value={form.phone} onChange={handleChange} />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input required id="password" name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input required id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} />
            </div>

            {/* Role specific fields */}

            {form.role === 'farmer' && (
              <>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input required id="address" name="address" type="text" placeholder="Address" value={form.address} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="region">Region</Label>
                  <Input required id="region" name="region" type="text" placeholder="Region" value={form.region} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="fruitsId">Fruits ID</Label>
                  <Input required id="fruitsId" name="fruitsId" type="text" placeholder="Fruits ID" value={form.fruitsId} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="adharNumber">Aadhar Number</Label>
                  <Input required id="adharNumber" name="adharNumber" type="text" placeholder="Aadhar Number" value={form.adharNumber} onChange={handleChange} />
                </div>
              </>
            )}

            {form.role === 'industries' && (
              <>
                <div>
                  <Label htmlFor="industryDescription">Industry Description</Label>
                  <Input required id="industryDescription" name="industryDescription" type="text" placeholder="Industry Description" value={form.industryDescription} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="photo">Photo URL</Label>
                  <Input id="photo" name="photo" type="url" placeholder="Photo URL" value={form.photo} onChange={handleChange} />
                </div>
              </>
            )}

            {form.role === 'logistics' && (
              <>
                <div>
                  <Label htmlFor="adharNumber">Aadhar Number</Label>
                  <Input required id="adharNumber" name="adharNumber" type="text" placeholder="Aadhar Number" value={form.adharNumber} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="region">Region</Label>
                  <Input required id="region" name="region" type="text" placeholder="Region" value={form.region} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="photo">Photo URL</Label>
                  <Input id="photo" name="photo" type="url" placeholder="Photo URL" value={form.photo} onChange={handleChange} />
                </div>
              </>
            )}

            <div>
              <Label htmlFor="role">Role</Label>
              <Select required onValueChange={handleRoleChange} value={form.role}>
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

            {error && <div className="text-red-600 text-sm">{error}</div>}

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
