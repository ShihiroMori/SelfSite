import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Photo from '../resources/Photo.jpeg'

const AboutMe = () => {

    return (
        <div>
            <Header />

            <div className="about-me-div">
                <img src={Photo} className="about-me-photo" />
                <h1 className="about-me-h">ShihiroMori</h1>
                <p className="about-me-p">Some random guy from Siberia.<br /> Nothing special, nothing cool.<br /> No thoughts, head empty.</p>
            </div>

            <Footer />
        </div>
    )
}

export default AboutMe