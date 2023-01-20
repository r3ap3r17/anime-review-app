import NavBar from "../Navbar/NavBar";

function Layout(props) {
    return (
        <>
            <NavBar handleLogout={ props.handleLogout } />
            { props.children }
        </>
    );
}

export default Layout;