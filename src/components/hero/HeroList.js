import getHeroesByPublisher from "../../selectors/getHeroesByPublisher";
import HeroCard from "./HeroCard";

const HeroList = ( { publisher } ) => {

    const heroes = getHeroesByPublisher( publisher )

    return (
            <div className="row row-cols-1 row-cols-md-3 g-4">
                    { heroes.map( heroe => (
                        <HeroCard
                            key={ heroe.id }
                            { ...heroe }
                        />
                    ))}
            </div>
    )
}

export default HeroList