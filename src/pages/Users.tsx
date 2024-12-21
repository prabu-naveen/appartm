import React from 'react';
import { UserForm } from '../components/forms/UserForm';
import { UserList } from '../components/users/UserList';
import { UserSearch } from '../components/users/UserSearch';
import { useUsers } from '../hooks/useUsers';

export function Users() {
  const { isLoading, error, createUser } = useUsers();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Management</h1>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <UserSearch />
          <UserList />
        </div>

        <div>
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold">Add New User</h2>
            </div>
            <UserForm onSubmit={createUser} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
}