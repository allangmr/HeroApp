import { HeroList } from '../heroes/HeroList';

export const DcScreen = () => {
    const publisher = 'DC Comics';
    return (
        <div>
            <h1 className="title-agency text-center">{publisher}</h1>
            <HeroList publisher={publisher} />
        </div>
    )
}
