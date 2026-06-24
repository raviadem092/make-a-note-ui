import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./MainLayout.css";

const MainLayout = () => {
    return (
        <div className="app-layout">
            <Sidebar />

            <main className="main-content">
                <Header />

                <section className="page-content">
                    <Outlet />
                </section>
            </main>
        </div>
    );
};

export default MainLayout;