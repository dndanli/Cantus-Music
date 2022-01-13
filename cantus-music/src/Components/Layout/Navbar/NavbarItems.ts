import { IconType } from "react-icons";
import { BsSearch, BsCloudDownload } from "react-icons/bs";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";

export let NavItems: { id: number; text: string; icon: IconType }[] = [
  { id: 0, text: "discover", icon: AiOutlineHome },
  { id: 1, text: "search", icon: BsSearch },
  { id: 2, text: "library", icon: AiOutlineMenu },
  { id: 3, text: "download", icon: BsCloudDownload },
];
