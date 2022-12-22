import "./HomePage.css";

function HomePage({ handleToken }) {
    return (
        <button type="button" id="logout-btn" onClick={ handleToken } >
            Log Out
        </button>
    );
}

export default HomePage;