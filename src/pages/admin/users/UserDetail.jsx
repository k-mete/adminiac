import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EntityDetail from '../EntityDetail';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      // Replace this with your actual API call
      const response = await fetch(`/api/users/${id}`);
      const data = await response.json();
      setUser(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load user');
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      // Replace this with your actual API call
      await fetch(`/api/users/${id}`, { method: 'DELETE' });
      return true;
    } catch (err) {
      setError('Failed to delete user');
      return false;
    }
  };

  const fields = [
    {
      name: 'avatar',
      label: 'Avatar',
      render: (value) => value ? (
        <img src={value} alt="User avatar" className="h-20 w-20 rounded-full" />
      ) : (
        <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-2xl">
            {user?.name?.charAt(0)?.toUpperCase() || '?'}
          </span>
        </div>
      ),
    },
    {
      name: 'name',
      label: 'Full Name',
    },
    {
      name: 'email',
      label: 'Email Address',
    },
    {
      name: 'role',
      label: 'Role',
      render: (value) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {value}
        </span>
      ),
    },
    {
      name: 'status',
      label: 'Status',
      render: (value) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          value === 'active'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}>
          {value}
        </span>
      ),
    },
    {
      name: 'bio',
      label: 'Bio',
      render: (value) => value || 'No bio provided',
    },
    {
      name: 'lastLogin',
      label: 'Last Login',
      render: (value) => value ? new Date(value).toLocaleString() : 'Never',
    },
    {
      name: 'createdAt',
      label: 'Created At',
      render: (value) => new Date(value).toLocaleString(),
    },
  ];

  return (
    <EntityDetail
      title="User Details"
      entity={user}
      fields={fields}
      loading={loading}
      error={error}
      backUrl="/admin/users"
      editUrl={`/admin/users/${id}/edit`}
      onDelete={handleDelete}
    />
  );
};

export default UserDetail; 