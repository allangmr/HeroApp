import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';
import { heroImages } from '../../helpers/heroImages'
// import batman from '../../assets/img/dc-batman.jpg' - importar recurso estatico

export const HeroScreen = ({ history }) => {
    const { heroId } = useParams();
    const hero = useMemo(() => getHeroById(heroId), [heroId])
    //const hero = getHeroById(heroId);
    const handleReturn = () => {
        if (history.length < 2) {
            history.push('/');
        } else {
            history.goBack();
        }
    }
    if (!hero) {
        return <Redirect to="/" />
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;
    return (
        <div className="row hero-screen">
            <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12 d-flex justify-content-center">
                <picture>
                    <source
                        // srcSet={`../assets/img/${heroId}.jpg`} desde /public/img
                        type="image/jpg" />
                    <img
                        // src={`../assets/img/${heroId}.jpg`} desde /public/img
                        // src={batman} img estatica con import
                        src={heroImages(`./${heroId}.jpg`).default}
                        className="img-fluid rounded animate__animated animate__fadeInLeft"
                        alt={superhero}
                    />
                </picture>
            </div>
            <div className="col-lg-8 col-md-8 col-xs-12 col-sm-12 py-5 animate__animated animate__fadeInRight">
                <h2>{superhero}</h2>
                <ul className="list-group list-group-flush my-5">
                    <li className="list-group-item"> <b>Alter ego:</b> {alter_ego}</li>
                    <li className="list-group-item"> <b>Publisher:</b> {publisher}</li>
                    <li className="list-group-item"> <b>First Appearence:</b> {first_appearance}</li>
                </ul>
                <h5>Characters </h5>
                <p>{characters}</p>
                <button className="btn btn-danger" onClick={handleReturn}>
                    <span className="card-text text-white"> Return</span>
                </button>
            </div>
        </div>
    )
}
