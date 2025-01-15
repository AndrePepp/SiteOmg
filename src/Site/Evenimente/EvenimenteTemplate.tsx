import React from "react";

interface EvenimenteProps {
  title: React.ReactNode; // Allows string or JSX
  content: string;
}

export const EvenimenteTemplate = ({ data }: { data: EvenimenteProps[] }) => {
  return (
    <div className="w-full bg-white dark:bg-neutral-950 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-neutral-800 p-6 rounded-lg shadow-md"
          >
            <h2 className="text-lg md:text-2xl mb-4 text-black dark:text-white">
              {item.title}
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EvenimenteTemplate;
