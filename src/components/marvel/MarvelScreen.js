import { HeroList } from '../heroes/HeroList';

export const MarvelScreen = () => {
    const publisher = 'Marvel Comics';
    return (
        <div>
            <h1 className="title-agency text-center">Marvel</h1>
            <HeroList publisher={publisher} />
        </div>
    )
}
