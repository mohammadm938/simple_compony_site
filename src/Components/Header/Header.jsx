import Navbar from "../Navbar/Navbar";

const Header = ({ siteName }) => {
  return (
    <header class="mainFlexItems w-full h-24 justify-between">
      <div class="font-bold">
        <h4>{siteName}</h4>
      </div>

      <Navbar />
    </header>
  );
};

export default Header;
