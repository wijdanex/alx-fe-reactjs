import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AddRecipeForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
    summary: "",
    image: "https://via.placeholder.com/300"
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  // Validate form - check for empty fields and minimum requirements
  const validateForm = () => {
    const newErrors = {};

    // Validate title field
    if (!formData.title || formData.title.trim() === "") {
      newErrors.title = "Recipe title is required";
    }

    // Validate summary field
    if (!formData.summary || formData.summary.trim() === "") {
      newErrors.summary = "Recipe summary is required";
    }

    // Validate ingredients field - require at least 2 ingredients
    if (!formData.ingredients || formData.ingredients.trim() === "") {
      newErrors.ingredients = "Ingredients are required";
    } else {
      const ingredientLines = formData.ingredients
        .split("\n")
        .filter((line) => line.trim().length > 0);
      if (ingredientLines.length < 2) {
        newErrors.ingredients = "Please add at least 2 ingredients";
      }
    }

    // Validate steps field - require at least 2 steps
    if (!formData.steps || formData.steps.trim() === "") {
      newErrors.steps = "Preparation steps are required";
    } else {
      const stepLines = formData.steps
        .split("\n")
        .filter((line) => line.trim().length > 0);
      if (stepLines.length < 2) {
        newErrors.steps = "Please add at least 2 steps";
      }
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid - show success message
      setSubmitted(true);
      console.log("Form submitted:", formData);

      // Reset form after 2 seconds and redirect
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setErrors(newErrors);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Success!</h2>
          <p className="text-gray-700 mb-6">
            Your recipe "{formData.title}" has been submitted successfully!
          </p>
          <p className="text-sm text-gray-500">Redirecting to home page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <Link to="/" className="text-blue-500 underline mb-6 inline-block hover:text-blue-600">
          ← Back to Recipes
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Add a New Recipe
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Field - Styled with Tailwind CSS */}
            <div>
              <label htmlFor="title" className="block text-sm font-bold text-gray-800 mb-2">
                Recipe Title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter recipe title"
                className={`w-full px-4 py-2 border-2 rounded-lg font-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                  errors.title ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-blue-500"
                }`}
              />
              {errors.title && (
                <p className="text-red-600 text-sm font-semibold mt-1">⚠ {errors.title}</p>
              )}
            </div>

            {/* Summary Field - Styled with Tailwind CSS */}
            <div>
              <label htmlFor="summary" className="block text-sm font-bold text-gray-800 mb-2">
                Recipe Summary <span className="text-red-600">*</span>
              </label>
              <textarea
                id="summary"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                placeholder="Brief description of the recipe"
                rows="2"
                className={`w-full px-4 py-2 border-2 rounded-lg font-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-vertical ${
                  errors.summary ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-blue-500"
                }`}
              />
              {errors.summary && (
                <p className="text-red-600 text-sm font-semibold mt-1">⚠ {errors.summary}</p>
              )}
            </div>

            {/* Ingredients Field - Styled with Tailwind CSS */}
            <div>
              <label htmlFor="ingredients" className="block text-sm font-bold text-gray-800 mb-2">
                Ingredients (one per line, minimum 2) <span className="text-red-600">*</span>
              </label>
              <textarea
                id="ingredients"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                placeholder="400g pasta&#10;200g bacon&#10;4 eggs&#10;100g cheese"
                rows="5"
                className={`w-full px-4 py-2 border-2 rounded-lg font-mono text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-vertical ${
                  errors.ingredients ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-blue-500"
                }`}
              />
              {errors.ingredients && (
                <p className="text-red-600 text-sm font-semibold mt-1">⚠ {errors.ingredients}</p>
              )}
            </div>

            {/* Preparation Steps Field - Styled with Tailwind CSS */}
            <div>
              <label htmlFor="steps" className="block text-sm font-bold text-gray-800 mb-2">
                Preparation Steps (one per line, minimum 2) <span className="text-red-600">*</span>
              </label>
              <textarea
                id="steps"
                name="steps"
                value={formData.steps}
                onChange={handleChange}
                placeholder="Boil water with salt&#10;Cook pasta until al dente&#10;Prepare sauce&#10;Combine and serve"
                rows="5"
                className={`w-full px-4 py-2 border-2 rounded-lg font-mono text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-vertical ${
                  errors.steps ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-blue-500"
                }`}
              />
              {errors.steps && (
                <p className="text-red-600 text-sm font-semibold mt-1">⚠ {errors.steps}</p>
              )}
            </div>

            {/* Submit Buttons - Responsive Layout */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 text-center"
              >
                Add Recipe
              </button>
              <Link
                to="/"
                className="flex-1 px-6 py-3 bg-gray-400 text-gray-800 font-bold rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-200 text-center"
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
