import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const HouseAdd = () => {
  const [data, setData] = useState({
    label: undefined,
    address: undefined,
    floorsNumber: undefined,
    description: undefined
  });
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  console.log("data", data);
  const handleSubmit = evt => {
    evt.preventDefault();
    setLoading(true);
    axios
      .post(`http://mobile-reality-backend.sadek.usermd.net/houses`, data)
      .then(function () {
        setLoading(false);
        history.push(`/list/`);
      })
      .catch(function () {
        setLoading(false);
      });
  };

  return (
    <div className="container-2">
      <form onSubmit={handleSubmit} autocomplete="off">
        <label htmlFor="label">Nazwa</label>
        <input
          name="label"
          value={data.label}
          onChange={e => setData({ ...data, [e.target.name]: e.target.value })}
        />
        <label htmlFor="address">Adress</label>
        <input
          name="address"
          value={data.address}
          onChange={e => setData({ ...data, [e.target.name]: e.target.value })}
        />
        <label htmlFor="floorsNumber">Numer pietra</label>
        <input
          name="floorsNumber"
          type="number"
          value={data.floorsNumber}
          onChange={e => setData({ ...data, [e.target.name]: e.target.value })}
        />
        <label htmlFor="description">Opis</label>
        <input
          name="description"
          value={data.description}
          onChange={e => setData({ ...data, [e.target.name]: e.target.value })}
        />

        <input type="submit" disabled={loading} />
      </form>
    </div>
  );
};

export default HouseAdd;
