import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />

      {/* Small Buttons */}
      <div className="mt-6">
        <Button
          title="Small Rounded SM"
          styles="px-3 py-1.5 text-sm rounded-sm"
        />
        <Button
          title="Small Rounded MD"
          styles="px-3 py-1.5 text-sm rounded-md ml-2"
        />
        <Button
          title="Small Rounded LG"
          styles="px-3 py-1.5 text-sm rounded-lg ml-2"
        />
        <Button
          title="Small Rounded Full"
          styles="px-3 py-1.5 text-sm rounded-full ml-2"
        />
      </div>

      {/* Medium Buttons */}
      <div className="mt-4">
        <Button
          title="Medium Rounded SM"
          styles="px-4 py-2 text-base rounded-sm"
        />
        <Button
          title="Medium Rounded MD"
          styles="px-4 py-2 text-base rounded-md ml-2"
        />
        <Button
          title="Medium Rounded LG"
          styles="px-4 py-2 text-base rounded-LG ml-2"
        />
        <Button
          title="Medium Rounded Full"
          styles="px-4 py-2 text-base rounded-full ml-2"
        />
      </div>

      {/* Large Buttons */}
      <div className="mt-4">
        <Button
          title="Large Rounded SM"
          styles="px-6 py-3 text-lg rounded-sm"
        />
        <Button
          title="Large Rounded MD"
          styles="px-6 py-3 text-lg rounded-md ml-2"
        />
        <Button
          title="Large Rounded LG"
          styles="px-6 py-3 text-lg rounded-lg ml-2"
        />
        <Button
          title="Large Rounded Full"
          styles="px-6 py-3 text-lg rounded-full ml-2"
        />
      </div>
    </div>
  );
};

export default Landing;
