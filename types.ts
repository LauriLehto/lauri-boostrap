export type Language = "fi" | "en" | "se";

export type ProfileType = "developer" | "musician" | "manager";

export type FormType = {
  fields: {
    name: string;
    label: string;
    type: string;
    placeholder: string;
  }[];
  button: string;
  setShow: (show: boolean) => void;
};
