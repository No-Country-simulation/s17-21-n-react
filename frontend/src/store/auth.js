import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      token: "",
      role: "",
      id: null,
      setTokenAndRole: (token, role, id) => {
        console.log('Setting token and role:', { token, role, id });
        
        // Convertir el rol a minúsculas antes de almacenarlo
        const normalizedRole = role.toLowerCase();
        
        set({ token, role: normalizedRole, id });
        console.log('Current store state after setting:', useUserStore.getState());
      },
      logout: () => {
        console.log('Logging out');
        set({ token: "", role: "", id: null });
        console.log('Current store state after logout:', useUserStore.getState());
      },
    }),
    {
      name: "auth",
      getStorage: () => sessionStorage,
    },
  ),
);

export default useUserStore;
