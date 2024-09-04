interface props {
  text: string;
}
const BtnSkills: React.FC<props> = ({ text }) => {
  return (
    <div>
      <button className="bg-[#7A08FA] text-white p-4 rounded-lg  hover:bg-blue-600">
        {text}
      </button>
    </div>
  );
};

export default BtnSkills;
