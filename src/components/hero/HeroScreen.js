import {useParams, Navigate } from "react-router-dom";
import getHeroesById from "../../selectors/getHeroesById";
const HeroScreen = () => {

    const { heroeId } = useParams()


    const heroe = getHeroesById( heroeId )

    console.log(heroe)


    if ( !heroe ) {
        return <Navigate to="/" />
    }

    return(
        <div>
            <h1>HERO</h1>

        </div>
    )
}
export default HeroScreen