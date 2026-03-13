"use client";
import NavBar from "@/components/Layout/nabar";
import AndhraPradesh from "../../../public/asset/images/AndhraPradesh.jpg";
import ArunachalPradesh from "../../../public/asset/images/Arunachal Pradesh.jpg";
import Assam from "../../../public/asset/images/Assam.jpg";
import Bihar from "../../../public/asset/images/Bihar.jpg";
import Chhattisgarh from "../../../public/asset/images/Chhattisgarh.jpg";
import Goa from "../../../public/asset/images/Goa.jpg";
import Gujarat from "../../../public/asset/images/Gujarat.jpg";
import HimachalPradesh from "../../../public/asset/images/Himachal Pradesh.jpg";
import Jharkhand from "../../../public/asset/images/Jharkhand.jpg";
import Karnataka from "../../../public/asset/images/Karnataka.jpg";
import Kerala from "../../../public/asset/images/Kerala.jpg";
import MadhyaPradesh from "../../../public/asset/images/Madhya Pradesh.jpg";
import Maharashtra from "../../../public/asset/images/Maharashtra.jpg";
import Manipur from "../../../public/asset/images/Manipur.jpg";
import Meghalaya from "../../../public/asset/images/Meghalaya.jpg";
import Mizoram from "../../../public/asset/images/Mizoram.jpg";
import Nagaland from "../../../public/asset/images/Nagaland.jpg";
import Odisha from "../../../public/asset/images/Odisha.jpg";
import Punjab from "../../../public/asset/images/Punjab.jpg";
import Rajasthan from "../../../public/asset/images/Rajasthan.jpg";
import Sikkim from "../../../public/asset/images/Sikkim.jpg";
import TamilNadu from "../../../public/asset/images/TamilNadu.jpg";
import Telangana from "../../../public/asset/images/Telangana.jpg";
import Tripura from "../../../public/asset/images/Tripura.jpg";
import UttarPradesh from "../../../public/asset/images/UttarPradesh.jpg";
import Uttarakhand from "../../../public/asset/images/Uttarakhand.jpg";
import Andaman from "../../../public/asset/images/Andaman.jpg";
import Chandigarh from "../../../public/asset/images/Chandigarh.jpg";
import Dadra from "../../../public/asset/images/Dadra.jpg";
import Delhi from "../../../public/asset/images/Delhi.jpg";
import JammuKashmir from "../../../public/asset/images/JammuKashmir.jpg";
import Ladakh from "../../../public/asset/images/Ladakh.jpg";
import Lakshadweep from "../../../public/asset/images/Lakshadweep.jpg";
import Puducherry from "../../../public/asset/images/Puducherry.jpg";
import WestBengal from "../../../public/asset/images/WestBengal.jpg";
import Domestic from "@/components/domestic/Domestic";

const states = [
  {
    Title: "Andhra Pradesh",
    Image: AndhraPradesh,
  },
  {
    Title: "Arunachal Pradesh",
    Image: ArunachalPradesh,
  },
  {
    Title: "Assam",
    Image: Assam,
  },
  {
    Title: "Bihar",
    Image: Bihar,
  },
  {
    Title: "Chhattisgarh",
    Image: Chhattisgarh,
  },
  {
    Title: "Goa",
    Image: Goa,
  },
  {
    Title: "Gujarat",
    Image: Gujarat,
  },
  {
    Title: "Himachal Pradesh",
    Image: HimachalPradesh,
  },
  {
    Title: "Jharkhand",
    Image: Jharkhand,
  },
  {
    Title: "Karnataka",
    Image: Karnataka,
  },
  {
    Title: "Kerala",
    Image: Kerala,
  },
  {
    Title: "Madhya Pradesh",
    Image: MadhyaPradesh,
  },
  {
    Title: "Maharashtra",
    Image: Maharashtra,
  },
  {
    Title: "Manipur",
    Image: Manipur,
  },
  {
    Title: "Meghalaya",
    Image: Meghalaya,
  },
  {
    Title: "Mizoram",
    Image: Mizoram,
  },
  {
    Title: "Nagaland",
    Image: Nagaland,
  },
  {
    Title: "Odisha",
    Image: Odisha,
  },
  {
    Title: "Punjab",
    Image: Punjab,
  },
  {
    Title: "Rajasthan",
    Image: Rajasthan,
  },
  {
    Title: "Sikkim",
    Image: Sikkim,
  },
  {
    Title: "Tamil Nadu",
    Image: TamilNadu,
  },
  {
    Title: "Telangana",
    Image: Telangana,
  },
  {
    Title: "Tripura",
    Image: Tripura,
  },
  {
    Title: "Uttar Pradesh",
    Image: UttarPradesh,
  },
  {
    Title: "Uttarakhand",
    Image: Uttarakhand,
  },
  {
    Title: "West Bengal",
    Image: WestBengal,
  },
];

const territories = [
  {
    Title: "Andaman and Nicobar Islands",
    Image: Andaman,
  },
  {
    Title: "Chandigarh",
    Image: Chandigarh,
  },
  {
    Title: "Dadra and Nagar Haveli and Daman & Diu",
    Image: Dadra,
  },
  {
    Title: "Delhi (NCT)",
    Image: Delhi,
  },
  {
    Title: "Jammu & Kashmir",
    Image: JammuKashmir,
  },
  {
    Title: "Ladakh",
    Image: Ladakh,
  },
  {
    Title: "Lakshadweep",
    Image: Lakshadweep,
  },
  {
    Title: "Puducherry",
    Image: Puducherry,
  },
];

const services = [
  {
    Title: "Air Ticket",
    Image: "",
  },
  {
    Title: "Travel Insurance",
    Image: "",
  },
  {
    Title: "Hotel booking",
    Image: "",
  },
  {
    Title: "Tour package",
    Image: "",
  },
  {
    Title: "Passport Assistence",
    Image: "",
  },
  {
    Title: "Visa Assistence",
    Image: "",
  },
  {
    Title: "Western Union",
    Image: "",
  },
];


const page = () => {
  return (
    <>
      <NavBar />
      <Domestic/>
    </>
  );
};

export default page;
