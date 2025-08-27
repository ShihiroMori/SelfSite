import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

const Tops = () => {

    return (
        <div>
            <Header />
            <div className="tops-div">
                <ul className="tops-list">
                    <li className="tops-li" style={{textAlign:'center'}}>TOP 5 MUSIC BANDS:</li>
                    <li className="tops-li"><br/>1. STARSET</li>
                    <li className="tops-li">2. SMASH INTO PIECES</li>
                    <li className="tops-li">3. ASKING ALEXANDRIA</li>
                    <li className="tops-li">4. HOLLYWOOD UNDEAD</li>
                    <li className="tops-li">5. THREE DAYS GRACE</li>
                </ul>
                <ul className="tops-list">
                    <li className="tops-li" style={{textAlign:'center'}}>TOP 5 GAMES:</li>
                    <li className="tops-li"><br/>1. MASS EFFECT</li>
                    <li className="tops-li">2. EXPEDITION 33</li>
                    <li className="tops-li">3. TALES OF ARISE</li>
                    <li className="tops-li">4. NIER: AUTOMATA</li>
                    <li className="tops-li">5. BALDUR'S GATE 3</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Tops