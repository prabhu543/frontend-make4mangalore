import React, { useState } from 'react'
import Navbar from './Navbar'
import { Button } from "@/components/ui/button"

const sessions = [
  "Dashbaord",
  "Logistics"
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
        <main className="flex-1">
          <div className="p-6">
            <h2 className="text-2xl font-semibold">{selected}</h2>
            {/* Content for the selected session can go here */}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Industry