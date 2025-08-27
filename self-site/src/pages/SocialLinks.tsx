import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import SteamLogo from '../resources/steam.png'
import TGLogo from '../resources/telegram.png'
import TwitchLogo from '../resources/twitch.png'

const SocialLinks = () => {

    /*---Сделать круглые иконки для ссылок + подстветка---*/

    return (
        <div>
            <Header />
            <div className="links-div">
                <ul className="links-list">
                    <li className="links-li">
                        <img src={TGLogo} className="links-images" />
                        <a target="_blank" href="https://t.me/depressionsbestfriend" className="links-text">TELEGRAM</a>
                    </li>
                    <li className="links-li">
                        <img src={TwitchLogo} className="links-images" />
                        <a target="_blank" href="https://www.twitch.tv/shihiromori" className="links-text">TWITCH</a>
                    </li>
                    <li className="links-li">
                        <img src={SteamLogo} className="links-images" />
                        <a target="_blank" href="https://steamcommunity.com/id/shihiromori/" className="links-text">STEAM</a>
                    </li>
                    <li className="links-text2">
                        shihiromori@mail.ru
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default SocialLinks