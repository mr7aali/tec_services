import { type } from "os";


export type IFooterService = { ServiceTitle: string; Info: string[] }[]
export type IInput = {
  name: string;
  type: string;
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  size?: "large" | "small";
  validate?: object;
  label?: string
};


export type IResponseType<T> = {
  success: boolean,
  statusCode: number,
  message: string,
  data: T
}

export type IUser = {
  user_id: string;
  email        :string;
  password: string;
  role: string;
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
  profileimage: string;

  bookings     :IBooking[]
  reviews      :IReview[]
  feedbacks    :IFeedback[]
  Notification :INotification[]
  Admin        :IAdmin 
}


export type IAdmin = {

}

export type IService = {
  service_id: string;
  service_name: string;
  category: string;
  description: string;
  price: string;
  availability: string;

  Review:IReview[]

}

export type IBooking = {
  bookingid: string;

  user_id: string;
  service_id: string;
  bookingdate: string;
  bookingtime: string;
  status: string;

  user      : IUser;
  service    : IService ;
}
export type IReview = {
  review_id: string;
  user_id: string;
  service_id: string;
  rating: string;
  comment: string;
  reviewdate: string;


  user?: string;
  service?: string;
}


export type IFeedback = {
  feedbackid: string;
  user_id: string;
  subject: string;
  comment: string;
  feedbackdate: string;
}
export type INotification={
  notificationid :string;
  user_id        :string;
  message        :string;
  date           :string;
  status         :string;
  user           :IUser;
}
export type IContent = {
  contentid: string;
  title: string;
  body: string;
  type: string;
  admin_id: string;
}
