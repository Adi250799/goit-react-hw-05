import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';  // Import PropTypes

const MovieList = ({ films }) => {
    const location = useLocation();

    return (
        <div>
            <ul>
                {films.map((item) => (
                    <li key={item.id}>
                        <Link to={`/movies/${item.id}`} state={{ from: location }}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Walidacja propsów
MovieList.propTypes = {
    films: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,  // id musi być liczbą
            title: PropTypes.string.isRequired // title musi być ciągiem znaków
        })
    ).isRequired // films jest wymagane
};

export default MovieList;
