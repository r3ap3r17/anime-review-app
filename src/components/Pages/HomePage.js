import ContentWrapper from "../Sections/ContentWrapper/ContentWrapper";
import HeaderSection from "../Sections/HeaderSection/HeaderSection";
import AnimeCard from "../UI/AnimeCard/AnimeCard";

const ANIMES = [
    {
        title: "Hellsing Ultimate",
        genre: "Horror, Action",
        image: "https://images3.alphacoders.com/112/1129270.png",
        rating: 4.4
    },
    {
        title: "Lord of The Rings",
        genre: "Fantasy, Adventure, Sci-Fi",
        image: "example.jpg",
        rating: 4.4
    },
    {
        title: "Game of Thrones",
        genre: "Fantasy, Action",
        image: "example.jpg",
        rating: 3
    },
    {
        title: "Batman 3",
        genre: "Action",
        image: "example.jpg",
        rating: 1.7
    },
    {
        title: "The Last of Us",
        genre: "Action, Adventure",
        image: "example.jpg",
        rating: 5
    },
    {
        title: "The Boys",
        genre: "Action, Comedy",
        image: "example.jpg",
        rating: 3.5
    },
    {
        title: "Gladiator",
        genre: "Action, Historical",
        image: "example.jpg",
        rating: 2.7
    },
    {
        title: "Law & Order: Special Victims Unit",
        genre: "Drama, Mystery",
        image: "example.jpg",
        rating: 5
    },
    {
        title: "Tom Clancy's Jack Ryan",
        genre: "Thriller",
        image: "example.jpg",
        rating: 4.8
    },
    {
        title: "The Peripheral",
        genre: "Thriller, Sci-Fi",
        image: "example.jpg",
        rating: 2.3
    },
    {
        title: "Fear the Walking Dead",
        genre: "Horror, Drama",
        image: "example.jpg",
        rating: 3.5
    },
    {
        title: "The Vampire Diaries",
        genre: "Horror, Drama, Mystery",
        image: "example.jpg",
        rating: 3
    },
    {
        title: "Jurassic Park",
        genre: "Action, Sci-Fi",
        image: "example.jpg",
        rating: 4.6
    }
];

function HomePage({ handleLogout }) {
    return (
        <>
            <HeaderSection animes={ ANIMES } handleLogout={ handleLogout } />
            <ContentWrapper style={ { marginBottom: "9rem" } }>
                {
                    ANIMES.map((anime) =>
                        <AnimeCard anime={ anime } key={ anime.title } />
                    ) }

                {/* FILTER MOVIES BY GENRE EXAMPLE
                    {
                        movies.filter(movie => movie.genre.includes('Action')).map((movie) =>
                            <MovieCard movie={ movie } key={ movie.title } />
                        ) } */}

            </ContentWrapper>
        </>
    );
}

export default HomePage;