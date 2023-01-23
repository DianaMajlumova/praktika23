import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CardsSection.scss";

function CardsSection() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((response) => {
      setPost(response.data);
    });
  }, []);

  return (
    <>
        <div className="cardmaindiv">
      {post.map((element) => {
        return (
            <div className="cardsection">
              <div className="cards">
                <div className="card">
                  <i class><img src={element.image} alt={"foto"} /></i>
                  <h2>{element.title}</h2>
                  <p>{element.description}</p>
                </div>
              </div>
            </div>
        );
      })}
      </div>
    </>
  );
}

export default CardsSection;
