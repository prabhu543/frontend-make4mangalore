import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useNavigate, Link } from 'react-router-dom'

import axios from 'axios'

const Signup = () => {
  const [form, setForm] = useState({ identifier: "", password: "", confirmPassword: "", role: "" })
  const [idType, setIdType] = useState("email")
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

  const handleIdTypeChange = (value) => {
    setIdType(value)
    setForm({ ...form, identifier: "" })
    setError("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      const response = await axios.post('http://localhost:5000/api/farmer/signup', {
        identifier: form.identifier,
        password: form.password,
        role: form.role
      })

      // Assume backend returns the user object including _id
      const userId = response.data._id
      if (userId) {
        localStorage.setItem('userId', userId)
      }

      // Navigate based on role
      if (form.role === 'user') navigate('/user/profile')
      else if (form.role === 'farmer') navigate('/farmer/profile')
      else if (form.role === 'industries') navigate('/industry/profile')
      else if (form.role === 'logistics') navigate('/logistic/profile')
      else navigate('/profile')
      
    } catch (err) {
      setError(err.response?.data?.error || 'Signup failed')
    }
  }



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center">Signup</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label className="my-4">Signup With</Label>
              <RadioGroup
                defaultValue="email"
                value={idType}
                onValueChange={handleIdTypeChange}
                className="flex gap-4 my-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="email" />
                  <Label htmlFor="email">Email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="number" id="number" />
                  <Label htmlFor="number">Phone Number</Label>
                </div>
              </RadioGroup>
              <Input
                id="identifier"
                name="identifier"
                type={idType === "email" ? "email" : "tel"}
                placeholder={idType === "email" ? "Email" : "Phone Number"}
                value={form.identifier}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="password" className="my-2">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="confirmPassword" className="my-2">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            {error && (
              <div className="text-red-600 text-sm">{error}</div>
            )}
            <div>
              <Label htmlFor="role" className={'my-2'}>Role</Label>
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