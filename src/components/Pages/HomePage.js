import Layout from "../Layout/Layout";
import ContentWrapper from "../Sections/ContentWrapper/ContentWrapper";
import MovieCard from "../UI/MovieCard/MovieCard";

const movies = [
    {
        title: "Lord of The Rings",
        image: "example.jpg",
        rating: 4
    },
    {
        title: "Game of Thrones",
        image: "example.jpg",
        rating: 3
    },
    {
        title: "Batman 3",
        image: "example.jpg",
        rating: 1
    },
    {
        title: "The Last of Us",
        image: "example.jpg",
        rating: 5
    },
    {
        title: "The Boys",
        image: "example.jpg",
        rating: 3
    },
    {
        title: "Gladiator",
        image: "example.jpg",
        rating: 2
    },
    {
        title: "Law & Order: Special Victims Unit",
        image: "example.jpg",
        rating: 5
    },
    {
        title: "Tom Clancy's Jack Ryan",
        image: "example.jpg",
        rating: 5
    },
    {
        title: "The Peripheral",
        image: "example.jpg",
        rating: 2
    },
    {
        title: "Fear the Walking Dead",
        image: "example.jpg",
        rating: 3
    },
    {
        title: "The Vampire Diaries",
        image: "example.jpg",
        rating: 3
    },
    {
        title: "Jurassic Park",
        image: "example.jpg",
        rating: 4
    }
]

function HomePage({ handleLogout }) {
    return (
        <Layout handleLogout={ handleLogout }>
            <ContentWrapper style={ { marginTop: "9rem", marginBottom: "9rem" } }>
                {
                    movies.map((movie) =>
                        <MovieCard movie={ movie } key={ movie.title } />
                    ) }
            </ContentWrapper>
        </Layout>
    );
}

export default HomePage;