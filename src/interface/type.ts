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
export type IService = {
  service_id: string;

  service_name: string;
  category: string;
  description: string;
  price: string;
  availability: string;
}
export type IResponseType<T> = {
  success: boolean,
  statusCode: number,
  message: string,
  data: T
}