import React, { useEffect, useState } from "react";
import "./index.scss";
const ServicesCards = () => {
  const [data, setData] = useState([]);
  async function GetFetch() {
    try {
      fetch("http://localhost:3100/services")
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    GetFetch();
  }, []);
  async function deleteFetch(id) {
    fetch("http://localhost:3100/services/" + id, { method: "DELETE" });
    GetFetch();
  }
  return (
    <>
      <div className="services_cards">
        {data &&
          data.map((x) => (
            <div className="services_card">
              <div className="services_card_content">
                <div className="services_card_content_logo">
                  <i className={x.icon}></i>
                </div>
                <div className="services_card_content_text">
                  <h3>{x.title}</h3>
                  <p>{x.text}</p>
                </div>
                <button onClick={() => deleteFetch(x._id)}>delete</button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ServicesCards;
