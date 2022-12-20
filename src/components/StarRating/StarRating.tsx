import { useEffect, useState } from "react";
import { StarFill } from "react-bootstrap-icons";
import "./StarRating.css";

interface StarProps {
  rating: number;
}

const StarRating = ({ rating }: StarProps): JSX.Element => {
  const [stars, setStars] = useState<number>(0);

  useEffect(() => {
    setStars(Math.floor(rating / 2));
  }, [rating]);
  return (
    <div className="rating">
      {[...Array(stars)].map((star, index) => {
        return (
          <div key={index} className="star">
            <StarFill />
          </div>
        );
      })}
      {[...Array(5 - stars)].map((star, index) => {
        return (
          <div key={index} className="not_filled_star">
            <StarFill />
          </div>
        );
      })}
    </div>
  );
};
export default StarRating;
