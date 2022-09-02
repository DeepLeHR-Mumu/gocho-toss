export interface ContainerBoxProps {
  optionObj: {
    location: "top" | "bottom";
    marginValue: number;
    maxWidth?: number;
  };
  children: React.ReactNode;
}
