import React from 'react';
import type { Milestone } from '../../types';

const formatDate = (date: string | null) =>
  date ? new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : null;

export default function Timeline({ milestones }: { milestones: Milestone[] }) {
  if (milestones.length === 0) return <p className="text-sm text-gray-500">No milestones have been added yet.</p>;

  return (
    <div className="relative ml-4">
      <div className="absolute left-[-15px] top-0 bottom-0 w-0.5 bg-gray-100"></div>
      <div className="space-y-10 relative">
        {milestones.map((m, i) => (
          <div key={m.id} className={`flex gap-6 relative ${m.status === 'PENDING' ? 'opacity-50' : ''}`}>
            {m.status === 'DONE' ? (
              <div className="absolute left-[-24px] w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs z-10 ring-4 ring-white">✓</div>
            ) : (
              <div className={`absolute left-[-24px] w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold z-10 ring-4 ring-white ${m.status === 'IN_PROGRESS' ? 'bg-blue-100 text-blue-600 border border-blue-200' : 'bg-gray-100 text-gray-500'}`}>
                {m.status === 'IN_PROGRESS' && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-20"></span>}
                {i + 1}
              </div>
            )}
            <div>
              <h3 className={`font-bold ${m.status === 'IN_PROGRESS' ? 'text-blue-600' : 'text-gray-900'}`}>{m.title}</h3>
              {m.description && <p className="text-sm text-gray-500 mt-1">{m.description}</p>}
              {m.status === 'IN_PROGRESS' && (
                <span className="inline-block mt-3 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">
                  In Progress{m.dueDate && ` (Est. ${formatDate(m.dueDate)})`}
                </span>
              )}
              {m.status === 'PENDING' && (
                <span className="inline-block mt-3 px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-semibold">
                  Pending{m.dueDate && ` · ${formatDate(m.dueDate)}`}
                </span>
              )}
              {m.status === 'DONE' && m.dueDate && <p className="text-xs text-gray-400 mt-1">Done by {formatDate(m.dueDate)}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
