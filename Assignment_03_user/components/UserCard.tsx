'use client';

import { User } from '@/types/user';
import { Heart, Trash2, Edit2, Mail, Phone, Globe } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { toggleLike, deleteUser } from '@/lib/redux/slices/usersSlice';
import { useState } from 'react';
import EditUserModal from './EditUserModal';
import Image from 'next/image';

interface UserCardProps {
    user: User & { isLiked: boolean };
}

export default function UserCard({ user }: UserCardProps) {
    const dispatch = useDispatch();
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    // Avatar URL based on username
    const avatarUrl = `https://api.dicebear.com/9.x/personas/svg?seed=${user.username}`;

    return (
        <>
            <div className="bg-white rounded-sm border border-gray-200 overflow-hidden flex flex-col h-full">
                {/* Avatar Section */}
                <div className="bg-[#f5f5f5] flex justify-center p-8">
                    <Image
                        src={avatarUrl}
                        alt={user.username}
                        width={120}
                        height={120}
                        className="h-32 w-32"
                        unoptimized
                    />
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow bg-white">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 truncate">
                        {user.name}
                    </h3>

                    <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-gray-400" />
                            <span className="truncate">{user.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <span className="truncate">{user.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-gray-400" />
                            <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="truncate hover:underline">
                                {user.website}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Actions Footer */}
                <div className="bg-white p-3 flex items-center justify-between border-t border-gray-200">
                    <button
                        onClick={() => dispatch(toggleLike(user.id))}
                        className={`flex-1 flex justify-center items-center py-2 transition-colors ${user.isLiked ? 'text-red-500' : 'text-red-500'
                            }`}
                        aria-label={user.isLiked ? "Unlike" : "Like"}
                    >
                        <Heart className={`w-5 h-5 ${user.isLiked ? 'fill-current' : ''}`} />
                    </button>

                    <div className="w-px h-6 bg-gray-200"></div>

                    <button
                        onClick={() => setIsEditModalOpen(true)}
                        className="flex-1 flex justify-center items-center py-2 text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Edit"
                    >
                        <Edit2 className="w-5 h-5" />
                    </button>

                    <div className="w-px h-6 bg-gray-200"></div>

                    <button
                        onClick={() => dispatch(deleteUser(user.id))}
                        className="flex-1 flex justify-center items-center py-2 text-gray-400 hover:text-blue-500 transition-colors"
                        aria-label="Delete"
                    >
                        <Trash2 className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <EditUserModal
                user={user}
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
            />
        </>
    );
}
