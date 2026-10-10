'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { fetchAPI } from '../../../utils/api';

interface Location {
  id: string;
  address: string;
  city: string;
  state: string;
}

interface Client {
  id: string;
  name: string;
  locations: Location[];
  createdAt: string;
}

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    const loadClients = async () => {
      try {
        if (!token) return;
        // The API call assumes your backend is running
        // const data = await fetchAPI('/clients', { token });
        // setClients(data);
        
        // Mock data for display purposes
        setClients([
          {
            id: '1',
            name: 'Acme Corp',
            createdAt: new Date().toISOString(),
            locations: [{ id: 'l1', address: '123 Main St', city: 'Techville', state: 'CA' }]
          },
          {
            id: '2',
            name: 'Globex Inc',
            createdAt: new Date().toISOString(),
            locations: [{ id: 'l2', address: '456 Innovation Blvd', city: 'Metropolis', state: 'NY' }]
          }
        ]);
      } catch (error) {
        console.error('Failed to load clients', error);
      } finally {
        setLoading(false);
      }
    };

    loadClients();
  }, [token]);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Clients</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          + Add Client
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading clients...</div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Locations</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Added On</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {clients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {client.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {client.locations.length} location(s)
                    <div className="text-xs text-gray-400 mt-1">
                      {client.locations[0]?.city}, {client.locations[0]?.state}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(client.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mx-2">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
              
              {clients.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-sm text-gray-500">
                    No clients found. Add your first client above.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

