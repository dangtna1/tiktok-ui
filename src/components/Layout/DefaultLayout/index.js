import Header from "~/components/Layout/components/Header";
import Sidebar from "~/components/Layout/components/Sidebar";

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;