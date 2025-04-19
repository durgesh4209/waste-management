import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-4">
        {children.map((child) => (
          <button
            key={child.props.label}
            onClick={() => onTabClick(child.props.label)}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 
              ${activeTab === child.props.label ? 'bg-blue text-black border border-warning' : 'bg-gray-300 text-gray-700'}
              hover:bg-blue-400 hover:text-white`}
          >
            {child.props.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {children.map((child) =>
          child.props.label === activeTab ? <div key={child.props.label}>{child}</div> : null
        )}
      </div>
    </div>
  );
};

export default Tabs;
