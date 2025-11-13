// src/store/recipeStore.js
import create from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: "Spaghetti", description: "Delicious pasta" },
    { id: 2, title: "Pancakes", description: "Fluffy pancakes" },
  ],
  addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
}));
