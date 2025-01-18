import { create } from "zustand";

interface LogoState {
  category: string;
  shape: string;
  layers: number;
  letters: string;
  selectedColor: string;
  recentProjects: {
    id: string;
    name: string;
    logo: string;
    timestamp: Date;
  }[];
  setCategory: (category: string) => void;
  setShape: (shape: string) => void;
  setLayers: (layers: number) => void;
  setLetters: (letters: string) => void;
  setSelectedColor: (color: string) => void;
  addRecentProject: (project: {
    id: string;
    name: string;
    logo: string;
  }) => void;
}

export const useLogoStore = create<LogoState>((set) => ({
  category: "",
  shape: "",
  layers: 1,
  letters: "",
  selectedColor: "#FF123",
  recentProjects: [],
  setCategory: (category) => set({ category }),
  setShape: (shape) => set({ shape }),
  setLayers: (layers) => set({ layers }),
  setLetters: (letters) => set({ letters }),
  setSelectedColor: (color) => set({ selectedColor: color }),
  addRecentProject: (project) =>
    set((state) => ({
      recentProjects: [
        { ...project, timestamp: new Date() },
        ...state.recentProjects,
      ].slice(0, 10),
    })),
}));
