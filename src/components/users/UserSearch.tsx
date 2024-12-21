import React from 'react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';

export function UserSearch() {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          label="Search by Name"
          placeholder="Enter name..."
          onChange={(e) => {
            // TODO: Implement search
          }}
        />
        
        <Input
          label="Mobile Number"
          placeholder="Enter mobile number..."
          onChange={(e) => {
            // TODO: Implement search
          }}
        />
        
        <Select
          label="Filter by Village"
          options={[
            { value: '', label: 'All Villages' },
            // TODO: Load villages from database
          ]}
          onChange={(e) => {
            // TODO: Implement filter
          }}
        />
      </div>
    </div>
  );
}