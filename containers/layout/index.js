import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="mt-20">
      {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
