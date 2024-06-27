import DescImg from "./DescImg";
import imgSrcRight from "../../imgs/ronio-r.png";
import imgSrcLeft from "../../imgs/ronio-l.png";
import BoxesDesc from "./BoxesDesc";

const Home = () => {
  return (
    <div className="mainFlexItems flex-col space-y-24 pt-9 pb-12 w-full ">
      <div className=" mainFlexItems flex-col space-y-8">
        <h2 className="text-4xl font-extrabold">Landing page title</h2>
        <p className="text-gray-500">
          And a subheading describing your site, too
        </p>
        <div className="mainFlexItems w-full">
          <button className="text-white bg-black rounded-md p-2 w-1/4 text-sm">
            Button
          </button>
        </div>
      </div>

      <DescImg styleReverce={""} imgSrc={imgSrcRight} />
      <DescImg styleReverce={"flex-row-reverse"} imgSrc={imgSrcLeft} />

      <BoxesDesc />

      <div className=" mainFlexItems flex-col space-y-8 pt-10 pb-20">
        <h2 className="text-4xl font-bold">Heading</h2>
        <p className="text-gray-500">
          And a subheading describing your site, too
        </p>
        <div className="mainFlexItems w-full">
          <button className="text-white bg-black rounded-md p-2 w-1/4 text-sm">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
