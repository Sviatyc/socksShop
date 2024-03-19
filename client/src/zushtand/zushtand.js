import { create } from 'zustand';

export const confirmState = create((set) => ({
    confirm: false,
    confirmTrue: () => set({ confirm: true }),
    confirmFalse: () => set({ confirm: false }),
  }));