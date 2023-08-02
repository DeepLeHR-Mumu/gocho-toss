import { CompanyFormValues } from "@/pages/company/edit/type";

export interface CompanyAuthFormValues extends CompanyFormValues {
  certificateOfBusiness: FileList;
  intro: string;
  companyLogo: FileList;
  backgroundImage: FileList;
  factory_arr: {
    factory_name: string;
    product: string;
    address: string;
    male_number: number;
    female_number: number;
    bus_bool: boolean;
    bus_etc: string | null;
    dormitory_bool: boolean;
    dormitory_etc: string | null;
  }[];
}
