import NavBar from "../Navbar/NavBar";

function HomePage({ handleLogout }) {
    return (
        <NavBar handleLogout={ handleLogout } />
    );
}

export default HomePage;