import React, { useState } from "react";
import { FaSistrix } from "react-icons/fa";
import './Trends.css'

const Trends = () => {
  const [keywords, setKeywords] = useState([
    {
      id: 1,
      country: "Trending Worldwide",
      keyword: "#Breakingnews",
      totalKeywords: "Lunar photography improves the discovery of moon",
    },
    {
      id: 2,
      country: "Trending Worldwide",
      keyword: "#worldnews",
      totalKeywords: "125k",
    },
    {
      id: 3,
      country: "Trending Worldwide",
      keyword: "#breakingnews",
      totalKeywords: "these cats are ready for #internationalcatday",
    },
    {
      id: 4,
      country: "Trending Worldwide",
      keyword: "#Greatestofall time",
      totalKeywords: "100k",
    }
  ]);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    const filteredKeywords = keywords.filter((keyword) =>
      keyword.keyword.toLowerCase().includes(searchValue.toLowerCase())
    );
    setKeywords(filteredKeywords);
  };

  return (
    <div className="trends">
      <div className="trends__search">
        <input
          type="text"
          className="trend__control"
          placeholder="Search Twitter"
          onChange={handleSearch}
        />
        <div className="trend__icon">
          <FaSistrix className="search" />
        </div>
      </div>
      <div className="keywords">
        <div className="key">
          <div className="keyword__heading">
            <h4>Trends for you</h4>
          </div>
          {keywords.map((keyword) => (
            <div key={keyword.id}>
              <div className="country">{keyword.country}</div>
              <div className="keyword__name">
                <strong>{keyword.keyword}</strong>
              </div>
              <div className="keyword__tweets">{keyword.totalKeywords}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trends;
