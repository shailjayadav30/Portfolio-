import Button from "./Button";

interface Expe {
  id: number;
  year: number;
  title: string;
  title2: string;
}

const Experience = () => {
  const experience: Expe[] = [
    {
      id: 1,
      year: 0,
      title: "Years",
      title2: "experience",
    },
    {
      id: 2,
      year: 5,
      title: "Completed",
      title2: "Projects",
    },

    {
      id: 3,
      year: 0,
      title: "Companies",
      title2: "worked",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center mt-8 mb-8 gap-8">
      {experience.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
          <h1 className="text-gray-600 text-2xl">{item.year}+</h1>
          <p className="text-gray-900 text-sm">{item.title}</p>
          <p className="text-sm text-gray-900">{item.title2}</p>
        </div>
      ))}
      <a href="https://docs.google.com/document/d/1GeKoh-uhrnjiY5OVuQavd-SBLzhUBMAr/edit?usp=drive_link&ouid=115010348523230951524&rtpof=true&sd=true" className="mt-4">
        <Button text="Resume" />
      </a>
    </div>
  );
};
  
export default Experience;
