import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => (
  <div className="container mx-auto overflow-hidden">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
