import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = data.find((r) => String(r.id) === String(id));

  if (!recipe) {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Recipe not found</h2>
        <Link to="/" className="text-blue-500 underline">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-blue-500 underline mb-6 inline-block">
          ← Back to Home
        </Link>

        {/* Recipe Header Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {recipe.title}
            </h1>
            <p className="text-lg text-gray-700">
              {recipe.summary}
            </p>
          </div>
        </div>

        {/* Ingredients and Instructions Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ingredients Card */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ingredients</h2>
            <ul className="space-y-3">
              {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <span className="text-blue-500 font-bold mr-3">•</span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions Card */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Instructions</h2>
            <ol className="space-y-4">
              {recipe.instructions && recipe.instructions.map((instruction, index) => (
                <li key={index} className="text-gray-700 flex gap-3">
                  <span className="text-blue-500 font-bold flex-shrink-0 pt-0.5">{index + 1}.</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Back to Recipes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
