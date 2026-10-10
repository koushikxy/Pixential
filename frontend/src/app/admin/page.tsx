import React from 'react';

export default function AdminDashboard() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          + New Client
        </button>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Clients</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Active Projects</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">8</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Recent Leads</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
        <div className="space-y-6">
          <div className="flex gap-4 border-b border-gray-50 pb-6 last:border-0 last:pb-0">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
              A
            </div>
            <div>
              <p className="text-sm text-gray-700">Client <span className="font-semibold text-gray-900">Acme Corp</span> uploaded a new media asset.</p>
              <span className="text-xs text-gray-400 mt-1 block">2 hours ago</span>
            </div>
          </div>
          
          <div className="flex gap-4 border-b border-gray-50 pb-6 last:border-0 last:pb-0">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
              T
            </div>
            <div>
              <p className="text-sm text-gray-700">New lead <span className="font-semibold text-gray-900">TechStart Inc</span> submitted a contact form.</p>
              <span className="text-xs text-gray-400 mt-1 block">5 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

