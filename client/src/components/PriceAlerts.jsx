"use client"

import { useState } from "react"

const PriceAlerts = () => {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      commodity: "Wheat",
      targetPrice: 2400,
      currentPrice: 2300,
      type: "above",
      isActive: true,
    },
    {
      id: 2,
      commodity: "Rice",
      targetPrice: 8000,
      currentPrice: 8850,
      type: "below",
      isActive: true,
    },
  ])

  const [showAddAlert, setShowAddAlert] = useState(false)

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-violet-100 overflow-hidden">
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
            <span className="text-2xl">🔔</span>
            <span>Price Alerts</span>
          </h3>
          <button
            onClick={() => setShowAddAlert(!showAddAlert)}
            className="px-3 py-1 bg-amber-100 text-amber-700 rounded-lg text-sm font-medium hover:bg-amber-200 transition-colors"
          >
            + Add Alert
          </button>
        </div>

        {showAddAlert && (
          <div className="bg-slate-50 rounded-xl p-4 mb-4">
            <div className="grid grid-cols-2 gap-3">
              <select className="px-3 py-2 border border-slate-300 rounded-lg text-sm">
                <option>Select Commodity</option>
                <option>Wheat</option>
                <option>Rice</option>
                <option>Tomato</option>
              </select>
              <input
                type="number"
                placeholder="Target Price"
                className="px-3 py-2 border border-slate-300 rounded-lg text-sm"
              />
            </div>
            <div className="flex items-center justify-between mt-3">
              <select className="px-3 py-2 border border-slate-300 rounded-lg text-sm">
                <option value="above">Alert when above</option>
                <option value="below">Alert when below</option>
              </select>
              <button className="px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-medium">Create Alert</button>
            </div>
          </div>
        )}

        <div className="space-y-3">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
              <div>
                <div className="font-medium text-slate-900">{alert.commodity}</div>
                <div className="text-sm text-slate-600">
                  Alert when {alert.type} ₹{alert.targetPrice}
                </div>
                <div className="text-xs text-slate-500">Current: ₹{alert.currentPrice}</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${alert.isActive ? "bg-violet-500" : "bg-slate-400"}`}></div>
                <button className="text-rose-600 hover:text-rose-700 text-sm">Remove</button>
              </div>
            </div>
          ))}
        </div>

        {alerts.length === 0 && (
          <div className="text-center py-8 text-slate-500">
            <div className="text-4xl mb-2">🔔</div>
            <p>No price alerts set</p>
            <p className="text-sm">Get notified when prices reach your target</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PriceAlerts
