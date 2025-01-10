import React from "react";

type Campaign = {
  id: number;
  name: string;
  description: string;
};

const campaigns: Campaign[] = [
  { id: 1, name: "Campaign 1", description: "Description of Campaign 1" },
  { id: 2, name: "Campaign 2", description: "Description of Campaign 2" },
  { id: 3, name: "Campaign 3", description: "Description of Campaign 3" },
  { id: 4, name: "Campaign 4", description: "Description of Campaign 4" },
  { id: 5, name: "Campaign 5", description: "Description of Campaign 5" },
  { id: 6, name: "Campaign 6", description: "Description of Campaign 6" },
];

const CampaignSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto p-6 text-center">
      <h2 className="text-3xl font-semibold mb-6">Available Campaigns</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="bg-gray-100 p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105"
          >
            <h3 className="text-xl font-bold mb-2">{campaign.name}</h3>
            <p className="text-base mb-4">{campaign.description}</p>
            <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300">
              Submit
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampaignSection;
