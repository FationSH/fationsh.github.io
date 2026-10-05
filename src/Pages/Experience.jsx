import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import { experience } from "../Constants/constants";

const Experience = () => {
  return (
    <div id="experience" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle title="EXPERIENCE" subtitle="My story" />
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row">
          <div className="w-full md:w-[100%] md:h-full flex items-left mt-10">
            <LazyMotion features={domAnimation} strict>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                style={{ fontFamily: "Poppins, sans-serif" }}
                className="text-grayscale-50 p-6 text-left flex flex-col gap-6"
              >
                <span className="text-primary-400" style={{fontSize: 28}}>{experience.text[0]}</span>
                <span className="text-primary-400">{experience.text[1]}</span>
                <span><p className="text-primary-400" style={{display: 'inline'}}>{experience.text[2].split(':')[0]}</p> {experience.text[2].split(':')[1]}</span>
                <span>{experience.text[3]}</span>
                <span className="text-primary-400">{experience.text[4]}</span>
                <span>
                  <p className="text-primary-400" style={{display: 'inline'}}>{experience.text[5].split(':')[0]}</p>
                  {experience.text[5].split(':')[1]}
                  <p className="text-primary-400" style={{fontSize: 14}}>{experience.text[5].split(':')[2]}</p>
                  <p className="text-primary-400" style={{fontSize: 14}}>{experience.text[5].split(':')[3]}</p>
                </span>
                <span>
                  <p className="text-primary-400" style={{display: 'inline'}}>{experience.text[6].split(':')[0]}</p>
                  {experience.text[6].split(':')[1]}
                  <p className="text-primary-400" style={{fontSize: 14}}>{experience.text[6].split(':')[2]}</p>
                </span>
                <span>
                  <p className="text-primary-400" style={{display: 'inline'}}>{experience.text[7].split(':')[0]}</p>
                  {experience.text[7].split(':')[1]}
                  <p className="text-primary-400" style={{fontSize: 14}}>{experience.text[7].split(':')[2]}</p>
                </span>
                <span>
                  <p className="text-primary-400" style={{display: 'inline'}}>{experience.text[8].split(':')[0]}</p>
                  {experience.text[8].split(':')[1]}
                  <p className="text-primary-400" style={{fontSize: 14}}>{experience.text[8].split(':')[2]}</p>
                </span>
                <span>
                  <p className="text-primary-400" style={{display: 'inline'}}>{experience.text[9].split(':')[0]}</p>
                  {experience.text[9].split(':')[1]}
                  <p className="text-primary-400" style={{fontSize: 14}}>{experience.text[9].split(':')[2]}</p>
                </span>
                <span className="text-primary-400" style={{fontSize: 28}}>{experience.text[10]}</span>
                <span><p className="text-primary-400" style={{display: 'inline'}}>{experience.text[11].split(':')[0]}</p> : {experience.text[11].split(':')[1]}</span>
                <span><p className="text-primary-400" style={{display: 'inline'}}>{experience.text[12].split(':')[0]}</p> : {experience.text[12].split(':')[1]}</span>
                <span><p className="text-primary-400" style={{display: 'inline'}}>{experience.text[13].split(':')[0]}</p> : {experience.text[13].split(':')[1]}</span>
                <span className="text-primary-400" style={{fontSize: 28}}>{experience.text[14]}</span>
                <span><a href={experience.text[16]} target="_blank" title="Go to page"><u>{experience.text[15]}</u></a></span>
                <span><p className="text-primary-400" style={{display: 'inline'}}>{experience.text[17].split(':')[0]}</p> : 
                <a href={experience.text[18]} target="_blank" title="Go to page"><u>{experience.text[17].split(':')[1]}</u></a></span>
              </m.p>
            </LazyMotion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
