import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import IndustryDashboard from '../IndustryDashboard'
import Logistics from '../Logistics'
import Farmers from '../Farmers'
import Products from '../Products'
import Notifications from '../Notifications'
import Navbar from '../Navbar'
import Industries from '../Industries'

const sessions = [
  "Dashbaord",
  "Farmers",
  "Products",
  "Logistics",
  "Industries",
  "Notifications",
]

const Industry = () => {
  const [selected, setSelected] = useState(sessions[0])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-100 p-6">
          <nav className="flex flex-col gap-2">
            {sessions.map((session) => (
              <Button
                key={session}
                variant={selected === session ? "default" : "ghost"}
                className="justify-start"
                onClick={() => setSelected(session)}
              >
                {session}
              </Button>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-semibold mb-4">{selected}</h2>
          {selected === 'Dashbaord' && <IndustryDashboard />}
          {selected === 'Farmers' && <Farmers />}
          {selected === 'Products' && <Products />}
          {selected === 'Logistics' && <Logistics />}
          {selected === 'Industries' && <Industries />}
          {selected === 'Notifications' && <Notifications />}
        </main>
      </div>
    </div>
  )
}

export default Industry