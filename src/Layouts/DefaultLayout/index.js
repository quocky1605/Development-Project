import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};
export default DefaultLayout;
