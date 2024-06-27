import {
  FaTelegramPlane,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = ({ siteName }) => {
  return (
    <footer class="flex items-center justify-between w-full">
      <div class="flex-col space-y-24">
        <h3 class="text-black text-lg">{siteName}</h3>
        <div class="mainFlexItems space-x-8 text-xl text-gray-500">
          <FaTelegramPlane class="hover:cursor-pointer hover:text-black transition-all hover:transition-all hover:shadow-lg fa fa-instagram" />
          <FaInstagram class="hover:cursor-pointer hover:text-black transition-all hover:transition-all hover:shadow-lg fa fa-telegram" />
          <FaTwitter class="hover:cursor-pointer hover:text-black transition-all hover:transition-all hover:shadow-lg fa fa-twitter" />
          <FaGithub class="hover:cursor-pointer hover:text-black transition-all hover:transition-all hover:shadow-lg fa fa-github" />
        </div>
      </div>

      <div class="mainFlexItems space-x-12 text-md w-2/4">
        <ul class="flex-col space-y-5 w-1/4">
          <h3 class="font-bold">Topic</h3>
          <li>Page</li>
          <li>Page</li>
          <li>Page</li>
        </ul>
        <ul class="flex-col space-y-5 w-1/4">
          <h3 class="font-bold">Topic</h3>
          <li>Page</li>
          <li>Page</li>
          <li>Page</li>
        </ul>
        <ul class="flex-col space-y-5 w-1/4">
          <h3 class="font-bold">Topic</h3>
          <li>Page</li>
          <li>Page</li>
          <li>Page</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
