import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { updateUserProfile } from '../store/authSlice';
import { api } from '../services/api';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { User as UserIcon, Lock, Mail, Save } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { User } from '../types';

export const Dashboard: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
  });

  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  // Sync form data with Redux user state when it changes or on refresh
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
      });
    }
  }, [user]);

  const updateProfileMutation = useMutation({
    mutationFn: (data: Partial<User>) => {
      if (!user) throw new Error("User not authenticated");
      return api.updateUser(user.id, data);
    },
    onSuccess: (data) => {
      dispatch(updateUserProfile(data));
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
      setTimeout(() => setMessage(null), 3000);
    },
    onError: () => {
      setMessage({ type: 'error', text: 'Failed to update profile.' });
    }
  });

  const updatePasswordMutation = useMutation({
    mutationFn: (newPassword: string) => {
      if (!user) throw new Error("User not authenticated");
      // Simulate password update API call
      return api.updateUser(user.id, { password: newPassword });
    },
    onSuccess: () => {
      setMessage({ type: 'success', text: 'Password changed successfully!' });
      setPasswordData({ currentPassword: '', newPassword: '' });
      setTimeout(() => setMessage(null), 3000);
    },
    onError: () => {
      setMessage({ type: 'error', text: 'Failed to change password. Please try again.' });
    }
  });

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    updateProfileMutation.mutate(formData);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!passwordData.currentPassword || !passwordData.newPassword) {
      setMessage({ type: 'error', text: 'Please fill in all password fields.' });
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setMessage({ type: 'error', text: 'New password must be at least 6 characters.' });
      return;
    }

    updatePasswordMutation.mutate(passwordData.newPassword);
  };

  // Safe guard if user is null
  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Account Dashboard</h1>
      
      {message && (
        <div className={`mb-6 p-4 rounded-lg ${message.type === 'success' ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400' : 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400'}`}>
          {message.text}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* User Card */}
        <div className="col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center transition-colors">
            <div className="relative inline-block">
              <img 
                src={user.image || 'https://via.placeholder.com/150'} 
                alt={user.username} 
                className="h-32 w-32 rounded-full mx-auto border-4 border-white dark:border-gray-700 shadow-lg object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-green-400 h-6 w-6 rounded-full border-4 border-white dark:border-gray-700"></div>
            </div>
            <h2 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">{user.firstName} {user.lastName}</h2>
            <p className="text-gray-500 dark:text-gray-400">@{user.username}</p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-300 text-left">
               <div className="flex items-center gap-2">
                 <Mail className="h-4 w-4" /> {user.email}
               </div>
               <div className="flex items-center gap-2">
                 <UserIcon className="h-4 w-4" /> {user.gender}
               </div>
            </div>
          </div>
        </div>

        {/* Forms */}
        <div className="col-span-1 md:col-span-2 space-y-8">
          
          {/* Edit Profile */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                <UserIcon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Edit Profile</h3>
            </div>
            
            <form onSubmit={handleProfileSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input 
                  label="First Name" 
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  required
                />
                <Input 
                  label="Last Name" 
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  required
                />
              </div>
              <Input 
                label="Email" 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
              <div className="flex justify-end">
                <Button type="submit" isLoading={updateProfileMutation.isPending} className="flex items-center gap-2">
                  <Save className="h-4 w-4" /> Save Changes
                </Button>
              </div>
            </form>
          </div>

          {/* Change Password */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors">
             <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Change Password</h3>
            </div>
            
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <Input 
                label="Current Password" 
                type="password"
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
              />
              <Input 
                label="New Password" 
                type="password"
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
              />
              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  variant="secondary" 
                  isLoading={updatePasswordMutation.isPending}
                >
                  Update Password
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};