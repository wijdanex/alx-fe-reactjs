import { create } from 'zustand';
import { nanoid } from 'nanoid';

export const useRecipeStore = create((set) => ({
  recipes: [],

  addRecipe: (title, description) =>
    set((state) => ({
      recipes: [...state.recipes, { id: nanoid(), title, description }],
    })),

  updateRecipe: (id, title, description) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, title, description } : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),
}));
