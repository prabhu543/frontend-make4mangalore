import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const FarmerProfile = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    region: '',
    fruitsId: '',
    adharNumber: ''
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    const fetchFarmer = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/farmer/')
        const { name, email, address, region, fruitsId, adharNumber } = res.data
        setForm({ name, email, address, region, fruitsId, adharNumber })
      } catch (err) {
        setError('Failed to load profile data')
      }
    }
    fetchFarmer()
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
    setSuccess('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put('/api/farmer/profile', form)
      setSuccess('Profile updated successfully')
    } catch (err) {
      setError(err.response?.data?.error || 'Update failed')
    }
  }

  return (
    <div>
      <Navbar />
      <div className="p-6 max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">Update Farmer Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              type="text"
              value={form.address}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="region">Region</Label>
            <Input
              id="region"
              name="region"
              type="text"
              value={form.region}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="fruitsId">Fruits ID</Label>
            <Input
              id="fruitsId"
              name="fruitsId"
              type="text"
              value={form.fruitsId}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="adharNumber">Aadhar Number</Label>
            <Input
              id="adharNumber"
              name="adharNumber"
              type="text"
              value={form.adharNumber}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          {error && <p className="text-red-600">{error}</p>}
          {success && <p className="text-green-600">{success}</p>}

          <Button type="submit" className="w-full">
            Update Profile
          </Button>
        </form>
      </div>
    </div>
  )
}

export default FarmerProfile
