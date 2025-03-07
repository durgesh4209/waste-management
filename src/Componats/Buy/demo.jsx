import React from "react";  // Import Bootstrap CSS

const dataList = [
  { id: 1, title: "Card 1", text: "This is the first card." },
  { id: 2, title: "Card 2", text: "This is the second card." },
  { id: 3, title: "Card 3", text: "This is the third card." },
  { id: 3, title: "Card 3", text: "This is the third card." },
];

export default function BootstrapCards() {
  return (
    <div className="container mt-5">
      <div className="row">
        {dataList.map((item) => (
          <div key={item.id} className="col-md-4"> {/* Bootstrap Grid System */}
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.text}</p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
