import { INavItemProps } from "./item";
import { ReactComponent as Dashboard } from "../../../assets/img/dashboard.svg";
import { ReactComponent as Vocabulary } from "../../../assets/img/vocabulary.svg";
import { ReactComponent as Lesson } from "../../../assets/img/lesson.svg";

export const dataItem = (path: string): INavItemProps[] => [
  {
    icon: <Dashboard color="#f1f1f1" />,
    text: "Dashboard",
    to: "/",
    isActive: path === "/",
  },

  {
    icon: <Lesson color="#f1f1f1" />,
    text: "Lesson",
    to: "/lesson/list",
    isActive: path.includes("lesson"),
  },

  {
    icon: <Vocabulary color="#f1f1f1" />,
    text: "Vocabulary",
    to: "/vocabulary",
    isActive: path.includes("vocabulary"),
  },
];
