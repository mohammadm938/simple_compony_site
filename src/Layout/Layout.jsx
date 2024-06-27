import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const Layout = ({ children, siteName }) => {
  return (
    <div class="mainFlexItems w-full ">
      <div class="p-10 pt-0 w-full mainFlexItems flex-col">
        <div class="p-10 pt-0 w-3/4 mainFlexItems flex-col justify-between h-screen">
          <Header siteName={siteName} />
          <div class="mb-auto w-full">{children}</div>
          <Footer siteName={siteName} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
