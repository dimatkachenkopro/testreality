import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../App.css";

const ListOfHouses = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  let history = useHistory();

  useLayoutEffect(() => {
    setLoading(true);
    setError(false);
    axios
      .get(`http://mobile-reality-backend.sadek.usermd.net/houses/all`)
      .then(response => {
        setData(response.data.results);
        console.log("response", response.data.results);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <div className="container-2">
      <h3>Lista domków</h3>
      <div>
        <button onClick={() => history.push(`/addHouse/`)}>Dodaj dom</button>
      </div>
      <ul>
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <li className="row-2" key={index}>
                <div className="row-container">
                  {item.label ? "Nazwa: " + item.label : "Dom bez nazwy"}
                  <button
                    style={{ marginLeft: "15px" }}
                    onClick={() => history.push(`${item._id}/`)}
                  >
                    szczegóły
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ListOfHouses;
