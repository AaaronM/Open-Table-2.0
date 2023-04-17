import React from "react";

import fullstar from "../../public/full-star.png";
import halfstar from "../../public/half-star.png";
import emtystar from "../../public/empty-star.png";
import Image from "next/image";
import { Review } from "@prisma/client";
import { calculateReviewRatingAvrage } from "@/utils/calculateReviewRatingAvrage";

export default function Starts({
  reviews,
  rating,
}: {
  reviews: Review[];
  rating?: number;
}) {
  const reviewRating = rating || calculateReviewRatingAvrage(reviews);

  const renderStarts = () => {
    const starts = [];

    for (let i = 0; i < 5; i++) {
      const difference = parseFloat((reviewRating - i).toFixed(1));
      if (difference >= 1) starts.push(fullstar);
      else if (difference < 1 && difference > 0) {
        if (difference <= 0.2) starts.push(emtystar);
        else if (difference > 0.2 && difference <= 0.6) starts.push(halfstar);
        else starts.push(fullstar);
      } else starts.push(emtystar);
    }
    return starts.map((start) => {
      return <Image src={start} alt="" className="w-4 h-4 mr-1 " />;
    });
  };
  return <div className="flex items-center">{renderStarts()}</div>;
}
