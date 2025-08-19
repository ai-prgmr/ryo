"use client";
import { PaperType } from "../lib/data";
import { useState } from "react";
export default function PaperTypeSelector({
  availableTypes,
}: {
  availableTypes: PaperType[];
}) {
  const [selectedType, setSelectedType] = useState<PaperType | null>(null);

  return (
    <div className="mt-6">
      <h4 className="text-lg font-semibold mb-3">Available Paper Types:</h4>
      <div className="flex flex-wrap gap-2">
        {availableTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`
              px-4 py-2 text-sm font-medium
              ${
                selectedType === type
                  ? "bg-amber-600 text-white shadow-md"
                  : "text-gray-500 border border-gray-600"
              }
            `}
          >
            {type}
          </button>
        ))}
      </div>
      {selectedType && (
        <p className="mt-4 text-gray-300 text-sm">
          {" "}
          <span className="font-semibold text-amber-300">{selectedType}</span>.
          This paper type offers unique characteristics for your rolling
          experience.
        </p>
      )}
    </div>
  );
}
