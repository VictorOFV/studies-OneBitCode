import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Main() {
    return (
        <>
            <Header />
            <hr />
            <main>
                <Outlet />
            </main>
            <hr />
            <Footer />
        </>
    )
}

export default Main