const Navbar = () => {
  return (
    <nav class="mainFlexItems">
      <ul class="mainFlexItems space-x-10 font-bold">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/about">About us</a>
        </li>
        <li>
          <a href="/connect">Connect us</a>
        </li>

        <a className="mainFlexItems w-24" href="/signup">
          <button class="w-full bg-black p-2 rounded-md text-white transition-all hover:transition-all hover:shadow-xl">
            Sign Up
          </button>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
