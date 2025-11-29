import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = data.find((r) => String(r.id) === String(id));

  if (!recipe) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold">Recipe not found</h2>
        <Link to="/" className="text-blue-500 underline mt-4 inline-block">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">
        ← Back
      </Link>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>
          <p className="text-gray-700 mb-4">{recipe.summary}</p>
          <div className="text-sm text-gray-600">More details would go here.</div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
