"use client";

import { create } from "zustand";
import { UserDetails } from "@/types";
import { getClientInfo } from "@/utils";


interface UserDetailsStore {
  details: UserDetails | null;
  fetchDetails: () => Promise<boolean>;
}

export const useUserDetailsStore = create<UserDetailsStore>((set) => ({
  details: null,

  // Fetch User-Greeting details for Toast...
  fetchDetails: async () => {
    const clientInfo = getClientInfo();

  try {
    const res = await fetch(`/api/userDetails`);
    const data = await res.json();

    if (data.city && data.country) {
      set({
        details: {
          ...clientInfo,
          city: data.city,
          country: data.country,
        },
      });
      return true;
    } else {
      set({ details: null });
      return false;
    }
  } catch {
    set({ details: null });
    return false;
  }
},

}));
