import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <div style={{minHeight:"700px"}}>{children}</div>
            <Footer/>
        </div>
    );
};

export default Layout;