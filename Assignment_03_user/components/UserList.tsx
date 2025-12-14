'use client';

import { useUsers } from '@/lib/hooks/useUsers';
import UserCard from './UserCard';

export default function UserList() {
    const { users, isLoading, isError } = useUsers();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="text-center text-red-500 py-10">
                <p>Failed to load users.</p>
                <button onClick={() => window.location.reload()} className="mt-4 text-blue-500 underline">Retry</button>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
}
