import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../App.css";

const HomeDetail = props => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  let history = useHistory();

  useLayoutEffect(() => {
    setLoading(true);
    setError(false);
    axios
      .get(
        `http://mobile-reality-backend.sadek.usermd.net/houses/${props.match.params.id}`
      )
      .then(response => {
        setData(response.data.result);
        console.log("response", response.data.result);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const deleteHouse = () => {
    axios
      .delete(
        `http://mobile-reality-backend.sadek.usermd.net/houses/${props.match.params.id}`
      )
      .then(() => {
        history.push(`/list/`);
      })
      .catch(() => {});
  };

  return (
    <div className="container-2">
      <h1>Nazwa: {data.label ? data.label : "brak"}</h1>
      <h2>Adress: {data.adress ? data.adress : "brak"}</h2>
      <h3>
        Numer pietra:
        {data.floorsNumber === undefined ? "brak" : data.floorsNumber}
      </h3>
      <h4>Opis: {data.description ? data.description : "brak"}</h4>
      <button onClick={() => deleteHouse()}>Usun</button>
    </div>
  );
};

export default HomeDetail;
