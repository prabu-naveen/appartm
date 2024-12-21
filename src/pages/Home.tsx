import React from 'react';
import { Link } from 'react-router-dom';
import { Users, IndianRupee, Heart } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Temple Management System</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Streamline your temple operations with our comprehensive management system.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="h-8 w-8 text-orange-600" />
            <h2 className="text-xl font-semibold">User Management</h2>
          </div>
          <p className="text-gray-600 mb-4">Manage temple members, track memberships, and maintain user profiles.</p>
          <Link
            to="/users"
            className="inline-block bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
          >
            Manage Users
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <IndianRupee className="h-8 w-8 text-orange-600" />
            <h2 className="text-xl font-semibold">Donations</h2>
          </div>
          <p className="text-gray-600 mb-4">Track and manage donations, generate receipts, and maintain financial records.</p>
          <Link
            to="/donations"
            className="inline-block bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
          >
            Manage Donations
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <Heart className="h-8 w-8 text-orange-600" />
            <h2 className="text-xl font-semibold">Matrimony</h2>
          </div>
          <p className="text-gray-600 mb-4">Coming soon! A dedicated matrimony service for our temple community.</p>
          <button
            disabled
            className="inline-block bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed"
          >
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
}