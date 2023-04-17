import Starts from "@/app/components/Starts";
import { calculateReviewRatingAvrage } from "@/utils/calculateReviewRatingAvrage";
import { Review } from "@prisma/client";

export default function Rating({ reviews }: { reviews: Review[] }) {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <Starts reviews={reviews} />
        <p className="text-reg ml-3">
          {calculateReviewRatingAvrage(reviews).toFixed(1)}
        </p>
      </div>
      <div>
        <p className="text-reg ml-4">{reviews.length}</p>
      </div>
    </div>
  );
}
