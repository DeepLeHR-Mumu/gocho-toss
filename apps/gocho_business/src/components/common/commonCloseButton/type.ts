export type CloseButtonType = "S" | "M" | "L" | "XL";

type CloseButtonProps = {
  size: CloseButtonType;
  buttonClick: () => void;
  isHome?: undefined;
};

type HomeButtonProps = {
  size: CloseButtonType;
  isHome: boolean;
  buttonClick?: undefined;
};

export type ButtonProps = CloseButtonProps | HomeButtonProps;
