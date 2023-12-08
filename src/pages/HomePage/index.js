import react from "react"
import Header from "../../components/Common/Header"
import MainComponent from "../../components/LandingPage/MainComponent"


function HomePage(){
    return(
        <div className="home-container">
            <Header />
            <MainComponent/>
            {/* <Footer /> */}
            
        </div>
    )
}

export default HomePage