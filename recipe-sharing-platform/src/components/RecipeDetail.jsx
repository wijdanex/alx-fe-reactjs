import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = data.find((r) => String(r.id) === String(id));

  if (!recipe) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold">Recipe not found</h2>
        <Link to="/" className="text-blue-500 underline mt-4 inline-block hover:text-blue-600">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-blue-500 underline mb-6 inline-block hover:text-blue-600 transition">
          ← Back to recipes
        </Link>

        {/* Recipe Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {recipe.title}
            </h1>
            <p className="text-lg text-gray-600">{recipe.summary}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ingredients Section */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="text-2xl mr-2">🛒</span> Ingredients
            </h2>
            <ul className="space-y-3">
              {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-700 hover:text-blue-600 transition"
                >
                  <span className="text-blue-500 font-bold mr-3 mt-1">✓</span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="text-2xl mr-2">👨‍🍳</span> Cooking Instructions
            </h2>
            <ol className="space-y-4">
              {recipe.instructions && recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 pt-1">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
