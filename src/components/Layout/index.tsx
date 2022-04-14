import { Meta } from "./Meta";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <Meta />
    {children}
    <Footer />
  </>
);
