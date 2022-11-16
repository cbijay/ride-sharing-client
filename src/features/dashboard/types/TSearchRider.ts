export type TSearchRider = {
  start_location: string;
  end_location: string;
  user_location: number[];
  success?: boolean;
  message?: string;
  rider?: TRider;
};

export type TRider = {
  name: string;
  profile_pic: string;
  vehicle: {
    color: string;
    number: string;
    model: string;
  };
};
