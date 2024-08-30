import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
    persist(
    (set) => ({
        token: '',
        role_id: '',
        id: null,
        setTokenAndRole: (token, role_id, id) => set({ token, role_id, id }),
        logout: () => set({ token: '', role_id: '', id: null }),
    }),
    {
    name: 'auth', 
    getStorage: () => sessionStorage,
    }
    )
);

export default useUserStore;
