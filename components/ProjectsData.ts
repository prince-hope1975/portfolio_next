import { AiOutlineEye, AiOutlineBranches } from "react-icons/ai";
import { IconType } from "react-icons/lib";
interface Data  {
    title: string;
    links: {
        Logo: IconType;
        link: string;
    }[];
    tools: string[];
    description: string;
}
const Data: Array<Data> = [
  {
    title: "Youth DAO",
    links: [
      {
        Logo: AiOutlineEye,
        link: "https://youthdao.netlify.app/",
      },
      {
        Logo: AiOutlineBranches,
        link: "https://github.com/prince-hope1975/DAO",
      },
    ],
    tools: ["React.js", "Node", "Thirdweb", "Ethers"],
    description:
      "Fully functional DAO that enables members to vote, make proposals etc. \n It features a host of features like Tokens for DAO members and many more",
  },
  {
    title: "Retro.mp3",
    links: [
      {
        Logo: AiOutlineEye,
        link: "https://retromp3.live",
      },
      {
        Logo: AiOutlineBranches,
        link: "https://github.com/prince-hope1975/Retro.Mp3",
      },
    ],
    tools: ["HTML", "CSS", "Javascript"],
    description:
      "An online music player/radio where I, Jojo and Prince share our favorite playlists and songs",
  },
  {
    title: "Proposals Website",
    links: [
      {
        Logo: AiOutlineEye,
        link: "https://proposals-website.vercel.app/",
      },
      {
        Logo: AiOutlineBranches,
        link: "https://github.com/prince-hope1975/Proposals_Website",
      },
    ],
    tools: ["Next", "PursStake API", "Node"],
    description:
      "A way to make DAO Proposals by Submitting a transaction to the Blockchain, it Supports major wallets",
  },
];
export default Data;
