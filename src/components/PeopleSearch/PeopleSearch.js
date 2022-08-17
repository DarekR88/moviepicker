import React, { useState, useEffect } from "react";
import "./PeopleSearch.scss";
import { peopleSearch } from "../../API";

const PeopleSearch = (props) => {
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    peopleSearch(props.globalTerm).then((res) => {
      setPeopleData(res.data.results);
    });
  }, [props.globalTerm]);

  const renderPeople = () =>
    peopleData.map((data) => {
      return (
        <div className="person-card" key={data.id}>
          <h2>{data.name}</h2>
          <img
            src={`http://image.tmdb.org/t/p/w500${data.profile_path}`}
            alt=""
          />
          <p>Popularity: {data.popularity}</p>
          {data.known_for.map((knownForData) => {
            return (
              <div>
                <h2>{knownForData.original_title}</h2>
                <h2>{knownForData.original_name}</h2>
                <img
                  src={`http://image.tmdb.org/t/p/w500${knownForData.poster_path}`}
                  alt=""
                />
                <p>{knownForData.overview}</p>
              </div>
            );
          })}
          
        </div>
      );
    });

  return (
  <div className="people-container">
    {renderPeople()}
  </div>
  )
};

export default PeopleSearch;
