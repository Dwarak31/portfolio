
// eslint-disable-next-line react/prop-types
export const Singleinfo = ({ text, Image }) => {
  return (
    <div className="flex gap-4 items-center justify-start">
      <Image className="text-3xl " />
      <p>{text}</p>
    </div>
  );
};
