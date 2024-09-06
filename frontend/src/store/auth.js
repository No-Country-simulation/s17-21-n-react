import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      token: "",
      user: {
        id: null,
        role: "",
        name: "",
        lastName: "",
      },
      setTokenAndUser: (token, user) => {
        // Convertir el rol a minúsculas antes de almacenarlo
        const normalizedRole = user.role.toLowerCase();

        set({
          token,
          user: {
            id: user.id,
            role: normalizedRole,
            name: user.name,
            lastName: user.lastName,
          },
        });
      },
      logout: () => {
        set({
          token: "",
          user: {
            id: null,
            role: "",
            name: "",
            lastName: "",
          },
        });
      },
    }),
    {
      name: "auth",
      getStorage: () => sessionStorage,
    }
  )
);

export default useUserStore;
