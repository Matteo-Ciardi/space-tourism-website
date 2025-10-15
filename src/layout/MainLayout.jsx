import { Outlet } from "react-router-dom";
import MainNavbarDesktop from "../components/MainNavbarDesktop";

const MainLayout = () => {
    return (
        <>
            <header>
                <MainNavbarDesktop />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>

            </footer>
        </>
    )
}

export default MainLayout