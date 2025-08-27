import Footer from "../components/Footer/Footer"

const MainPage = () => {

    return (
        <div>
            <div className="mainpage-div">
                <ul className="mainpage-list">
                    <li className="mainpage-list-text"><a href="/AboutMe" className="mainpage-links">ABOUT ME</a></li>
                    <li className="mainpage-list-text"><a href="/Tops" className="mainpage-links">MY TOPS</a></li>
                    <li className="mainpage-list-text"><a href="/SocialLinks" className="mainpage-links">LINKS</a></li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default MainPage