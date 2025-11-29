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

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Recipe title is required";
    }

    if (!formData.summary.trim()) {
      newErrors.summary = "Recipe summary is required";
    }

    if (!formData.ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else {
      const ingredientLines = formData.ingredients
        .split("\n")
        .filter((line) => line.trim());
      if (ingredientLines.length < 2) {
        newErrors.ingredients = "Please add at least 2 ingredients";
      }
    }

    if (!formData.steps.trim()) {
      newErrors.steps = "Preparation steps are required";
    } else {
      const stepLines = formData.steps
        .split("\n")
        .filter((line) => line.trim());
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
            {/* Title Field */}
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                Recipe Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter recipe title"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.title ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>

            {/* Summary Field */}
            <div>
              <label htmlFor="summary" className="block text-sm font-semibold text-gray-700 mb-2">
                Recipe Summary *
              </label>
              <textarea
                id="summary"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                placeholder="Brief description of the recipe"
                rows="2"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.summary ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.summary && (
                <p className="text-red-500 text-sm mt-1">{errors.summary}</p>
              )}
            </div>

            {/* Ingredients Field */}
            <div>
              <label htmlFor="ingredients" className="block text-sm font-semibold text-gray-700 mb-2">
                Ingredients (one per line, minimum 2) *
              </label>
              <textarea
                id="ingredients"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                placeholder="400g pasta&#10;200g bacon&#10;4 eggs&#10;100g cheese"
                rows="5"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm ${
                  errors.ingredients ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.ingredients && (
                <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
              )}
            </div>

            {/* Preparation Steps Field */}
            <div>
              <label htmlFor="steps" className="block text-sm font-semibold text-gray-700 mb-2">
                Preparation Steps (one per line, minimum 2) *
              </label>
              <textarea
                id="steps"
                name="steps"
                value={formData.steps}
                onChange={handleChange}
                placeholder="Boil water with salt&#10;Cook pasta until al dente&#10;Prepare sauce&#10;Combine and serve"
                rows="5"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm ${
                  errors.steps ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.steps && (
                <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
              >
                Add Recipe
              </button>
              <Link
                to="/"
                className="flex-1 px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 transition text-center"
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
