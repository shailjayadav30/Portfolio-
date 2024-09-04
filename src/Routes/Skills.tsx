import BtnSkills from "../Components/BtnSkills";

const Skills = () => {
  return (
    <>
      <div
        id="skill"
        className="flex h-screen mt-[22rem] md:mt-0 w-full flex-col justify-center items-center   p-4"
      >
        <h1 className="text-4xl font-bold text-slate-900 text-center mb-4">
          Skills
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          My Technical Skills
        </p>
        <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
          <BtnSkills text="JavaScript" />
          <BtnSkills text="TypeScript" />
          <BtnSkills text="React" />
          <BtnSkills text="Node.js" />
          <BtnSkills text="Express.js" />
          <BtnSkills text="MongoDB" />
          <BtnSkills text="Java" />
          <BtnSkills text="HTML" />
          <BtnSkills text="CSS" />
        </div>
      </div>
    </>
  );
};

export default Skills;
