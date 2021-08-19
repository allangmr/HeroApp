import { Link } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages'
import './Hero.css'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <>
            <div className="card col-lg-4 col-sm-12 col-xs-12 ">
                <img src={heroImages(`./${id}.jpg`).default} className="card-img-top" alt={superhero} />
                <div className="card-body">
                    <h4 className="card-title text-white">{superhero}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{publisher}</h6>
                    <p className="card-text text-white">{alter_ego}</p>
                    {
                        (alter_ego !== characters)
                        && <p className="card-text text-white">{characters}</p>
                    }

                    <p>
                        <small className="card-text text-white">{first_appearance}</small>
                    </p>
                    <Link to={`./hero/${id}`}>
                        <button className="btn btn-warning">
                            <span className="card-text"> Read More...</span>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
