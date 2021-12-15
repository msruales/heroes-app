import {Navbar} from "../components/ui/Navbar";
import {Route, Routes} from "react-router-dom";
import MarvelScreen from "../components/marvel/MarvelScreen";
import DScreen from "../components/dc/DScreen";
import SearchScreen from "../components/search/SearchScreen";
import HeroScreen from "../components/hero/HeroScreen";



const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="/" element={ <MarvelScreen/> } />
                    <Route path="hero/:heroeId" element={ <HeroScreen/> } />
                    <Route path="marvel" element={ <MarvelScreen/> } />
                    <Route path="dc" element={ <DScreen/> } />
                    <Route path="search" element={ <SearchScreen/> } />
                </Routes>
            </div>


        </>
    )
}
export default DashboardRoutes