import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const confirmState = create(
  persist(
    (set) => ({
      confirm: false,
      confirmTrue: () => set({ confirm: true }),
      confirmFalse: () => set({ confirm: false }),
    }),
    {
      name: 'userLogin',
      storage: createJSONStorage(()=>sessionStorage)
    }

  )

    
  )