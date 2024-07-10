"use client";

import React, { useState } from "react";
import RatingReview from "./RatingReview";
const Page = () => {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <RatingReview rating={rating} setRating={setRating} />
    </div>
  );
};

export default Page;
