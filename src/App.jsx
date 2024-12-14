import {ThemeProvider} from "@/components/theme-provider";
import {Toaster} from "@/components/ui/toaster.jsx";

import MainNav from "@/components/shared/main-nav";
import Footer from "@/components/shared/footer";
import {Outlet} from "react-router-dom";


function App() {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <MainNav/>
            <Outlet/>
            <Footer/>
            <Toaster/>
        </ThemeProvider>
    );
}

export default App;
