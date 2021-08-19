import { useLocation } from 'react-router-dom';
import queryString from 'query-string'
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../hooks/useForm';
import { getHeroByName } from '../../selectors/getHeroByName';
import { useMemo } from 'react';

export const SearchScreen = ({ history }) => {
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const [formValues, handleInputChange] = useForm({
        searchText: q
    });
    const { searchText } = formValues;
    // const heroesFiltered = getHeroByName(searchText);
    const heroesFiltered = useMemo(() => getHeroByName(q), [q]);
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }
    return (
        <div>
            <h1 className="title-agency text-center">Search</h1>

            <div className="row">
                <div className="col-sm-3">
                    <h4>Search Form</h4>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Find your hero"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button type="submit" className="btn btn-lg btn-outline-primary w-100 my-3">
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-sm-9">
                    <h4>Results</h4>
                    <hr />
                    {
                        (q === '')
                        &&
                        <div className="alert alert-danger">
                            Search a hero
                        </div>
                    }
                    {
                        (q !== '' && heroesFiltered.length === 0)
                        &&
                        <div className="alert alert-danger">
                            There is no a hero with {q}
                        </div>
                    }
                    <div className="card-columns row animate__animated animate__fadeIn">
                        {
                            heroesFiltered.map(hero => (
                                <HeroCard key={hero.id} {...hero} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
