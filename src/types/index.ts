import { SvgIconProps } from "@mui/material";

export interface Spending {
  title: string;
  amount: number;
  description: string;
}

export interface User {
  username: string;
  password?: string;
  spending?: [Spending];
}

export interface AuthProps {
  handleClick: () => void;
}

export interface HomeLinkProps {
  text: string;
  href: string;
  Logo: React.FC<SvgIconProps>;
}

export interface FormInputProps {
  id: string;
  label: string;
  value: any;
  setValue: (value: any) => void;
  Logo: React.FC<SvgIconProps>;
  type: string;
}
