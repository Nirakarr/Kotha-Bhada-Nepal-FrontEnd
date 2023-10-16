import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./CardDetailsBreak1.css";
import NavBar1 from "../NavBar1";
import Footer from "../Footer/Footer";
import { timeAgo } from "../../utils/timeago";
import CardDetailsBreak2 from "./CardDetailsBreak2";
import CardDetailsCategory from "./CardDetailsCategory";

const CardDetailsBreak1 = () => {
  const { id } = useParams();
  const [card, setCard] = useState({});
  const [categoryCard, setCategoryCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/post/get-blog-posts/${id}`
        );

        if (response.status !== 200) {
          throw new Error("Card not found");
        }

        setCard(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchCard();
  }, [id]);

  useEffect(() => {
    if (!isLoading && !error) {
      const fetchCategoryCards = async () => {
        try {
          const categoryResponse = await axios.get(
            `http://localhost:5000/post/get-blog-posts/category/${card.category}`
          );

          if (categoryResponse.status === 200) {
            setCategoryCard(categoryResponse.data.data);
          }
        } catch (error) {
          console.error("Error fetching category cards:", error);
        }
      };

      fetchCategoryCards();
    }
  }, [isLoading, error, card]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="all">
      <NavBar1 />
      <div className="container pb50 mt-[80px]">
        <div className="row">
          <div className="col-md-9 mb40">
            <article>
              <div className="post-content">
                <h3 className="font-bold md:text-2xl text-l flex flex-align-center justify-center mt-5">
                  <ion-icon name="location-outline"></ion-icon> {card.location}
                </h3>
                <ul className="post-meta list-inline flex flex-align-center justify-center">
                  <li className="list-inline-item font-bold">
                    <ion-icon name="person-outline"></ion-icon>
                    {card.username}
                  </li>
                  <li className="list-inline-item font-bold">
                    <ion-icon name="calendar-outline"></ion-icon>{" "}
                    {card.updatedDate || card.date}
                  </li>
                  <li className="list-inline-item font-bold">
                    <ion-icon name="hourglass-outline"></ion-icon>{" "}
                    {timeAgo(card.updatedDate || card.date)}
                  </li>
                  <li className="list-inline-item font-bold">
                    <ion-icon name="call-outline"></ion-icon>
                    {card.contactno}
                  </li>
                </ul>
                <img
                  src={"http://localhost:5000/" + card.image[0]}
                  alt=""
                  className="img-fluid mb30 mx-auto md:mx-0 md:my-auto max-w-[500px] max-h-[600px]"
                />
                <div className="md:text-lg text-l text-black leading-relaxed mt-4 flex align-center justify-center">
                  <div dangerouslySetInnerHTML={{ __html: card.description }} />
                </div>

                <hr className="mt-[50px] mb-2" />
                <CardDetailsBreak2></CardDetailsBreak2>
              </div>
            </article>
          </div>
          <div className="col-md-3 mb40">
            <div className="mb40">
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    aria-describedby="basic-addon2"
                  />
                  <button className="input-group-addon" id="basic-addon2">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="mb40">
              <h4 className="sidebar-title">Categories</h4>
              <ul className="list-unstyled categories font-bold">
                <li>
                  <Link style={{ color: "black" }}>{card.category}</Link>
                </li>
              </ul>
            </div>
            <CardDetailsCategory categoryCard={categoryCard} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CardDetailsBreak1;
