import { FaUser, FaInfo, FaShieldAlt, FaMicrophone } from "react-icons/fa";

const BoxesDesc = () => {
  return (
    <div className="flex flex-wrap items-start w-full">
      <div className="boxHomePage">
        <div>
          <FaUser />
          <h3>Subheading</h3>
        </div>
        <p>
          Body text for whatever you’d like to say. Add main takeaway points,
          quotes, anecdotes, or even a very very short story.{" "}
        </p>
      </div>
      <div className="boxHomePage">
        <div>
          <FaInfo />
          <h3>Subheading</h3>
        </div>
        <p>
          Body text for whatever you’d like to say. Add main takeaway points,
          quotes, anecdotes, or even a very very short story.{" "}
        </p>
      </div>
      <div className="boxHomePage">
        <div>
          <FaMicrophone />
          <h3>Subheading</h3>
        </div>
        <p>
          Body text for whatever you’d like to say. Add main takeaway points,
          quotes, anecdotes, or even a very very short story.{" "}
        </p>
      </div>
      <div className="boxHomePage">
        <div>
          <FaShieldAlt />
          <h3>Subheading</h3>
        </div>
        <p>
          Body text for whatever you’d like to say. Add main takeaway points,
          quotes, anecdotes, or even a very very short story.{" "}
        </p>
      </div>
    </div>
  );
};

export default BoxesDesc;
