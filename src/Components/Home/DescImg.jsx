const DescImg = ({ styleReverce, imgSrc }) => {
  return (
    <div
      className={`${styleReverce} flex items-center justify-between w-full `}
    >
      <div className="flex-col space-y-3 w-1/3 ">
        <h2 className="text-4xl font-bold">Heading</h2>
        <p>A subheading for this section, as long or as short as you like</p>
        <button className="text-sm bg-black text-white p-2 rounded-md w-1/5 ">
          Button
        </button>
      </div>

      <div className="flex items-end w-5/12 ">
        <img className="w-full" src={imgSrc} alt={imgSrc} />
      </div>
    </div>
  );
};

export default DescImg;
