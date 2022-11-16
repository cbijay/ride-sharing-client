import WelcomeText from "core/components/welcome_text/WelcomeText";
import UserCurrentRide from "features/dashboard/comopnents/current_ride/UserCurrentRide";

import UserRideHistory from "features/dashboard/comopnents/ride_history/UserRideHistory";
import SearchRide from "features/dashboard/comopnents/search_ride/SearchRide";

const UserDashboard = () => {
  return (
    <div className="mx-auto mt-12 flex flex-col w-1/2">
      <WelcomeText title="Welcome User!!" />

      <SearchRide
        title="Search your rides"
        subTitle="Enjoy your ride with our best riders"
      />

      <UserCurrentRide heading="Current Ride" className="mb-4" />
      <UserRideHistory heading="Ride History" />
    </div>
  );
};

export default UserDashboard;
