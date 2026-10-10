'use client';

import React from 'react';
import { useAuth } from '../../context/AuthContext';

export default function ClientDashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h1>
      <p className="text-gray-600 mb-10">Here is the current status of your project with AgencyX.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Col: Timeline */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-8">Project Timeline</h2>
          
          <div className="relative ml-4">
            {/* Vertical Progress Line */}
            <div className="absolute left-[-15px] top-0 bottom-0 w-0.5 bg-gray-100"></div>
            
            <div className="space-y-10 relative">
              <div className="flex gap-6 relative">
                <div className="absolute left-[-24px] w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs z-10 ring-4 ring-white shadow-sm">✓</div>
                <div>
                  <h3 className="font-bold text-gray-900">Discovery & Strategy</h3>
                  <p className="text-sm text-gray-500 mt-1">Completed on Oct 1st. Market research and competitor analysis delivered.</p>
                </div>
              </div>
              
              <div className="flex gap-6 relative">
                <div className="absolute left-[-24px] w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs z-10 ring-4 ring-white shadow-sm">✓</div>
                <div>
                  <h3 className="font-bold text-gray-900">UI/UX Design</h3>
                  <p className="text-sm text-gray-500 mt-1">Completed on Oct 8th. Figma wireframes and high-fidelity mockups approved.</p>
                </div>
              </div>
              
              <div className="flex gap-6 relative">
                <div className="absolute left-[-24px] w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold z-10 ring-4 ring-white border border-blue-200">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-20"></span>
                  3
                </div>
                <div>
                  <h3 className="font-bold text-blue-600">Web Development</h3>
                  <p className="text-sm text-gray-600 mt-1">Currently building your Next.js application.</p>
                  <span className="inline-block mt-3 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">In Progress (Est. Oct 20th)</span>
                </div>
              </div>
              
              <div className="flex gap-6 relative opacity-50">
                <div className="absolute left-[-24px] w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold z-10 ring-4 ring-white">4</div>
                <div>
                  <h3 className="font-bold text-gray-900">Launch & SEO Setup</h3>
                  <p className="text-sm text-gray-500 mt-1">Final testing, domain DNS setup, and indexing.</p>
                  <span className="inline-block mt-3 px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-semibold">Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 mb-4">Your Account Manager</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                S
              </div>
              <div>
                <p className="font-bold text-gray-900">Sarah Jenkins</p>
                <p className="text-sm text-gray-500">Lead Strategist</p>
              </div>
            </div>
            <button className="w-full bg-blue-50 text-blue-600 font-medium py-2 rounded-lg text-sm hover:bg-blue-100 transition-colors">
              Send a Message
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 mb-4">Recent Uploads</h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-sm">
                <span className="text-gray-600 flex items-center gap-2">📄 Logo_Assets.zip</span>
                <span className="text-gray-400 text-xs">Oct 8</span>
              </li>
              <li className="flex justify-between items-center text-sm">
                <span className="text-gray-600 flex items-center gap-2">📄 Content_Draft.docx</span>
                <span className="text-gray-400 text-xs">Oct 5</span>
              </li>
            </ul>
            <button className="w-full mt-6 border border-gray-200 text-gray-600 font-medium py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
              Upload New File
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

