import Card from "@/components/Card"
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
    </div>
  );
};

export default Landing;

import React from "react";
import Button from "@/components/Button";

const Landing = () => {
  return (
    <div className="space-y-4 p-6">
      <h1 className="text-xl font-bold mb-4">Button Variants</h1>

      {/* Small Buttons */}
      <Button title="Small Rounded-sm" className="text-sm rounded-sm" />
      <Button title="Small Rounded-md" className="text-sm rounded-md" />
      <Button title="Small Rounded-full" className="text-sm rounded-full" />

      {/* Medium Buttons */}
      <Button title="Medium Rounded-sm" className="text-base rounded-sm" />
      <Button title="Medium Rounded-md" className="text-base rounded-md" />
      <Button title="Medium Rounded-full" className="text-base rounded-full" />

      {/* Large Buttons */}
      <Button title="Large Rounded-sm" className="text-lg rounded-sm" />
      <Button title="Large Rounded-md" className="text-lg rounded-md" />
      <Button title="Large Rounded-full" className="text-lg rounded-full" />
    </div>
  );
};

export default Landing;
