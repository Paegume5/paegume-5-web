import Body from "./layouts/Body";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paegume 5 - Projects",
  description: "Paegume 5 projects",
};

const ProjectsPage = () => {
  return (
    <div>
      <Body />
    </div>
  );
};

export default ProjectsPage;
