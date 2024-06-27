import imgSrc from "../../imgs/pexels-steshkawillems-2792043.jpg";

const Connectus = () => {
  return (
    <main class="flex items-center justify-between w-full space-y-2">
      <div class="flex-col space-y-5 w-3/6">
        <h2 class="text-4xl font-bold">Connect Us</h2>
        <h4 class="text-gray-500 text-xs">
          Subheading for description or instructions
        </h4>

        <form className="flex-col  h-80 space-y-10">
          <div className="flex space-x-2">
            <div className="labelandinput">
              <label htmlFor="firstName">First name</label>
              <input type="text" name="firstName" placeholder="Mohammad" />
            </div>
            <div className="labelandinput">
              <label htmlFor="lastName">Last name</label>
              <input type="text" name="LastName" placeholder="Mohammadi" />
            </div>
          </div>

          <div className="labelandinput flex ">
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" placeholder="email@gmail.com" />
          </div>

          <div className="labelandinput">
            <label htmlFor="message">Your message</label>
            <textarea
              className="h-32"
              type="text"
              name="message"
              placeholder="Enter your question or message"
            />
          </div>

          <div className="mainFlexItems w-full">
            <button className="w-full bg-black rounded-md text-white p-3 font-bold ">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div class="w-2/5 h-full">
        <img
          class="w-8/12 h-full rounded-md shadow-lg"
          src={imgSrc}
          alt="eiffel tower"
        />
      </div>
    </main>
  );
};

export default Connectus;
