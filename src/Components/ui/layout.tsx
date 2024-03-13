import Footer from "./footer1";

const Layout = ({ children }) => {
  return (
    <div>
      <main style={{ marginBottom: "40px" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;