import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UsersState } from '@/types/user';

const initialState: UsersState = {
    liked: [],
    edited: {},
    deleted: [],
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        toggleLike: (state, action: PayloadAction<number>) => {
            const userId = action.payload;
            if (state.liked.includes(userId)) {
                state.liked = state.liked.filter((id) => id !== userId);
            } else {
                state.liked.push(userId);
            }
        },
        updateUser: (state, action: PayloadAction<{ id: number; data: Partial<User> }>) => {
            const { id, data } = action.payload;
            state.edited[id] = { ...state.edited[id], ...data };
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            const userId = action.payload;
            if (!state.deleted.includes(userId)) {
                state.deleted.push(userId);
            }
        },
    },
});

export const { toggleLike, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
