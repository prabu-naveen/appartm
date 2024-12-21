import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Home, Users, IndianRupee, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export function Layout() {
  const { logout } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-orange-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-8 w-8" />
              <span className="font-bold text-xl">Temple Management</span>
            </Link>
            
            <div className="flex space-x-4">
              <Link to="/users" className="flex items-center space-x-1 hover:bg-orange-700 px-3 py-2 rounded">
                <Users className="h-5 w-5" />
                <span>Users</span>
              </Link>
              <Link to="/donations" className="flex items-center space-x-1 hover:bg-orange-700 px-3 py-2 rounded">
                <IndianRupee className="h-5 w-5" />
                <span>Donations</span>
              </Link>
              <button
                onClick={logout}
                className="flex items-center space-x-1 hover:bg-orange-700 px-3 py-2 rounded"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}