

export type IFooterService = { ServiceTitle: string; Info: string[] }[]
export type IInput = {
    name: string;
    type: string;
    value?: string | string[] | undefined;
    id?: string;
    placeholder?: string;
    size?: "large" | "small";
    validate?: object;
    label?:string
  };