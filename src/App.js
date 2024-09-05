import React, { useEffect, useState } from 'react';
import ResourceList from './components/ResourceList';
import resourcesData from './resources.json';

function App() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // Simulate fetching data from JSON file
    setResources(resourcesData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8">CS Resources Tracker</h1>
        <ResourceList resources={resources} />
      </div>
    </div>
  );
}

export default App;
