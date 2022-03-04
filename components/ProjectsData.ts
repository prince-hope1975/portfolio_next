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
const Data:Array<Data> = [
  {
    title: "Portfolio Tracker",
    links: [  
      {
        Logo: AiOutlineEye,
        link: "https://google.com",
      },
      {
        Logo: AiOutlineBranches,
        link: "https:amazon.com",
      },
    ],
    tools: ["Next", "Node", "Thirdweb"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla explicabo dolorum accusantium? Nostrum dignissimos odio dolores, harum corporis ab cum laudantium, laborum consectetur accusantium distinctio velit quam, sequi provident?",
  },
  {
    title: "Portfolio Tracker",
    links: [
      {
        Logo: AiOutlineEye,
        link: "https://google.com",
      },
      {
        Logo: AiOutlineBranches,
        link: "https:amazon.com",
      },
    ],
    tools: ["Next", "Node", "Thirdweb"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla explicabo dolorum accusantium? Nostrum dignissimos odio dolores, harum corporis ab cum laudantium, laborum consectetur accusantium distinctio velit quam, sequi provident?",
  },
];
export default Data;
