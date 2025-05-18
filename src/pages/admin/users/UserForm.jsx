import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EntityForm from '../EntityForm';

const UserForm = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(id ? true : false);
  const [error, setError] = useState(null);
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    if (id) {
      fetchUser();
    }
  }, [id]);

  const fetchUser = async () => {
    try {
      // Replace this with your actual API call
      const response = await fetch(`/api/users/${id}`);
      const data = await response.json();
      setInitialValues(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load user');
      setLoading(false);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      // Replace this with your actual API call
      const response = await fetch(id ? `/api/users/${id}` : '/api/users', {
        method: id ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save user');
      }

      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  const fields = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      required: true,
      placeholder: 'Enter full name',
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      required: true,
      placeholder: 'Enter email address',
    },
    {
      name: 'role',
      label: 'Role',
      type: 'select',
      required: true,
      options: [
        { value: 'admin', label: 'Administrator' },
        { value: 'manager', label: 'Manager' },
        { value: 'user', label: 'User' },
      ],
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      required: true,
      options: [
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
      ],
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      required: !id,
      placeholder: id ? 'Leave blank to keep current password' : 'Enter password',
    },
    {
      name: 'avatar',
      label: 'Avatar URL',
      type: 'text',
      placeholder: 'Enter avatar URL',
      description: 'Provide a URL for the user\'s avatar image',
    },
    {
      name: 'bio',
      label: 'Bio',
      type: 'textarea',
      placeholder: 'Enter user bio',
      description: 'A brief description about the user',
    },
  ];

  return (
    <EntityForm
      title={id ? 'Edit User' : 'Create User'}
      fields={fields}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
      backUrl="/admin/users"
    />
  );
};

export default UserForm; 