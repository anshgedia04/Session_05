import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { fetchUsers } from '@/lib/api';
import { User } from '@/types/user';

export function useUsers() {
    const { data: serverUsers, isLoading, isError, error } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    });

    const { liked, edited, deleted } = useSelector((state: RootState) => state.users);

    const users = serverUsers
        ?.filter((user) => !deleted.includes(user.id))
        .map((user) => {
            const editedUser = edited[user.id] ? { ...user, ...edited[user.id] } : user;
            return {
                ...editedUser,
                isLiked: liked.includes(user.id),
            };
        }) || [];

    return {
        users,
        isLoading,
        isError,
        error,
    };
}
