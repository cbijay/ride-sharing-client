import BookingCard from "core/components/card/BookingCard";
import { TRide } from "features/dashboard/types/TRide";
import { FC } from "react";

const UserRideHistory: FC<TRide> = ({ heading, className }) => {
  return (
    <div className={className ? className : ""}>
      {heading && (
        <h3 className="text-gray-800 text-lg font-bold mb-1.5">{heading}</h3>
      )}
      <BookingCard
        date="2022/11/13 4:00 PM"
        startLocation="Kalanki Chowk"
        endLocation="New Road Gate"
        user="John Doe"
      />
    </div>
  );
};

export default UserRideHistory;
