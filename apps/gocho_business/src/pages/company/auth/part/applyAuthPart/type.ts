import { CompanyFormValues } from "@/pages/company/edit/type";

export interface CompanyAuthFormValues extends CompanyFormValues {
  certificateOfBusiness: FileList;
  oneLineIntro: string;
  companyLogo: FileList;
  backgroundImage: FileList;
  factory: {
    name: string;
    address: string;
    maleNumber: number;
    femaleNumber: number;
    product: string;
    bus: {
      exists: boolean;
      desc: string;
    };
    dormitory: {
      exists: boolean;
      desc: string;
    };
  }[];
}
