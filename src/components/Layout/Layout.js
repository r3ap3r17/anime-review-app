import NavBar from "../Navbar/NavBar";


function Layout(props) {
    return (
        <>
            { props.token ? <NavBar handleLogout={ props.handleLogout } /> : null }
            { props.children }
        </>
    );
}

export default Layout;