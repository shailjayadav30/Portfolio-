interface btnprops {
  text: string;
}
const Button = ({ text }: btnprops) => {
  return (
    <button className="bg-[#7A08FA] w-auto p-3 h-auto rounded font-semibold text-white">
      {text}
    </button>
  );
};

export default Button;
