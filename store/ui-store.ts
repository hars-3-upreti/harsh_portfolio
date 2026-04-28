import { create } from 'zustand';

interface UIState {
  mouse: { x: number; y: number };
  setMouse: (x: number, y: number) => void;
  scrollProgress: number;
  setScrollProgress: (progress: number) => void;
}

export const useUIStore = create<UIState>((set) => ({
  mouse: { x: 0, y: 0 },
  setMouse: (x, y) => set({ mouse: { x, y } }),
  scrollProgress: 0,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
}));
