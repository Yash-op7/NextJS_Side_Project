import React from 'react';
export const fetchCache = 'force-no-store' // refer to the fetchCache docs for all available options

const RenderContent = ({ content, createdAt, deadline }) => {
  const items = content.split('\n');

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="mb-4">
        <p className="text-sm text-gray-500">Created At: <span className="font-semibold">{formatDate(createdAt)}</span></p>
        <p className="text-sm text-gray-500">Deadline: <span className="font-semibold">{deadline}</span></p>
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-4 border border-gray-200 transition-transform transform hover:scale-105"
        >
          <p className="text-lg text-gray-800">{item}</p>
        </div>
      ))}
    </div>
  );
};




export default RenderContent;
