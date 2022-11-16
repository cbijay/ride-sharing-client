import Card from "core/components/card/Card";
import { TSearchRide } from "features/dashboard/types/TSearchRIde";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const SearchRide: FC<TSearchRide> = ({ title, subTitle }) => {
  const navigate = useNavigate();

  return (
    <Card className="bg-primary mb-4" onClick={() => navigate("/search-ride")}>
      {title && (
        <h2 className="text-gray-800 text-md mb-1 italic font-medium">
          {title}
        </h2>
      )}
      {subTitle && <p className="text-sm italic">{subTitle}</p>}
    </Card>
  );
};

export default SearchRide;
