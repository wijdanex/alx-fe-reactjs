import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddRecipeForm() {
  // State to track form input values
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  // State to track validation errors
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Validate title is not empty
    if (!title.trim()) {
      newErrors.title = "Title is required";
    }

    // Validate ingredients is not empty and has at least 2 items
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else {
      const ingredientList = ingredients
        .split("\n")
        .filter((item) => item.trim().length > 0);
      if (ingredientList.length < 2) {
        newErrors.ingredients = "Please add at least 2 ingredients";
      }
    }

    // Validate steps is not empty and has at least 2 items
    if (!steps.trim()) {
      newErrors.steps = "Steps are required";
    } else {
      const stepsList = steps
        .split("\n")
        .filter((item) => item.trim().length > 0);
      if (stepsList.length < 2) {
        newErrors.steps = "Please add at least 2 steps";
      }
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid - submit
      setIsSubmitted(true);
      console.log("Recipe submitted:", { title, ingredients, steps });

      // Reset form
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});

      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } else {
      // Form has errors
      setErrors(newErrors);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Success!</h2>
          <p className="text-gray-700">Your recipe has been added successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <Link
          to="/"
          className="inline-block text-blue-500 underline mb-6 hover:text-blue-700"
        >
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Add New Recipe
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Field */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Recipe Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  if (errors.title) {
                    setErrors({ ...errors, title: "" });
                  }
                }}
                placeholder="Enter recipe title"
                className={`w-full px-4 py-2 border-2 rounded-lg font-base focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.title
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300 focus:border-blue-500"
                }`}
              />
              {errors.title && (
                <p className="text-red-600 text-sm font-semibold mt-1">
                  {errors.title}
                </p>
              )}
            </div>

            {/* Ingredients Field */}
            <div>
              <label
                htmlFor="ingredients"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Ingredients (one per line, minimum 2)
              </label>
              <textarea
                id="ingredients"
                value={ingredients}
                onChange={(e) => {
                  setIngredients(e.target.value);
                  if (errors.ingredients) {
                    setErrors({ ...errors, ingredients: "" });
                  }
                }}
                placeholder="400g pasta&#10;200g butter&#10;100g cheese"
                rows="5"
                className={`w-full px-4 py-2 border-2 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-vertical ${
                  errors.ingredients
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300 focus:border-blue-500"
                }`}
              />
              {errors.ingredients && (
                <p className="text-red-600 text-sm font-semibold mt-1">
                  {errors.ingredients}
                </p>
              )}
            </div>

            {/* Steps Field */}
            <div>
              <label
                htmlFor="steps"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Preparation Steps (one per line, minimum 2)
              </label>
              <textarea
                id="steps"
                value={steps}
                onChange={(e) => {
                  setSteps(e.target.value);
                  if (errors.steps) {
                    setErrors({ ...errors, steps: "" });
                  }
                }}
                placeholder="Boil water with salt&#10;Add pasta and cook&#10;Drain and serve"
                rows="5"
                className={`w-full px-4 py-2 border-2 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-vertical ${
                  errors.steps
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300 focus:border-blue-500"
                }`}
              />
              {errors.steps && (
                <p className="text-red-600 text-sm font-semibold mt-1">
                  {errors.steps}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-blue-500 text-white font-bold text-lg rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              >
                Submit Recipe
              </button>
              <Link
                to="/"
                className="flex-1 px-6 py-3 bg-gray-300 text-gray-800 font-bold text-lg rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-200 text-center"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddRecipeForm;
