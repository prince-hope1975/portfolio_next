import { IconType } from "react-icons";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";

interface Links {
    name: string
    Link: string;
    Logo: IconType
}

const links: Array<Links> = [
    {
      name: "linkedin",
      Link: "https://www.linkedin.com/in/princeam/",
      Logo: AiFillLinkedin,
    },
  {
    name: "github",
    Link: "https://github.com/prince-hope1975",
    Logo: AiFillGithub,
  },
  {
      name: "mail",
      Link: "mailto:amachreeprince7@gmail.com",
      Logo: AiFillMail,
    },
    {
      name: "twitter",
      Link: "https://twitter.com/Prince_RedEyes",
      Logo: AiOutlineTwitter,
    },
];
export default links