import { IconType } from "react-icons";
import { BsSearch, BsCloudDownload } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { RiHome2Line } from "react-icons/ri";

export let NavItems: { id: number; text: string; icon: IconType }[] = [
  { id: 0, text: "discover", icon: RiHome2Line },
  { id: 1, text: "search", icon: BsSearch },
  { id: 2, text: "library", icon: AiOutlineMenu },
  { id: 3, text: "download", icon: BsCloudDownload },
];
