import SectionTitle from "../Components/SectionTitle";
import ProjectCards from "../Components/ProjectCards";

const Projects = () => {
  return (
    <div id="projects" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full min-h-[1400px] xl:w-[85%] sm:w-[90%] relative mt-40 flex flex-col items-center justify-center pb-36">
        <div className="w-full h-[180%] ml-[14%] mt-[-10%] mb-[-10%]">
          <SectionTitle title="PROJECTS" subtitle="What I have done so far" />
        </div>
        <div className="w-full h-full flex justify-center">
          <div className="w-full">
            <ProjectCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;