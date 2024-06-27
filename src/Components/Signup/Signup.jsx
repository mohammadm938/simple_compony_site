import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <div className="mainFlexItems flex-col w-full h-96">
      <h2 className="font-extrabold text-2xl">Create an account</h2>
      <h4 className="mt-2 mb-4">Enter our email to sign up for this app</h4>
      <input
        className="p-2 pl-4 border border-gray-400 rounded-md w-2/6 mb-4"
        type="email"
        name="email"
        id="email"
        placeholder="email@gmail.com"
      />

      <button className="w-2/6 text-white bg-black p-2 rounded-md mb-2 mt-2">
        Sign up with email
      </button>

      <p className="text-gray-600 mt-2 mb-2 text-sm">or continue with</p>

      <button className="p-2  relative w-2/6  rounded-md bg-gray-200 mb-2 mt-2">
        <span className="absolute left-2 top-3 text-lg ">
          <FcGoogle />
        </span>
        Google
      </button>

      <div className="mainFlexItems w-full">
        <p className="mt-4 w-2/6 text-gray-500 pl-6">
          By clicking continue, you agree to our{" "}
          <b className="text-black">Terms of Service</b> and{" "}
          <b className="text-black">Privacy Policy</b>
        </p>
      </div>
    </div>
  );
};

export default Signup;
