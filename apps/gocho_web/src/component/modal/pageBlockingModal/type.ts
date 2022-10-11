export interface PageBlockingBoxProps {
  dataObj: {
    url: string;
    text: string;
    afterAction?(): void;
  };
  closeModal(): void;
}
