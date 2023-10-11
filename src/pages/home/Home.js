import Navbar from "../../components/navbar/Navbar.js"
import "./home.css"
import Headers from "../../components/header/Header.js"
import Featured from "../../components/featured/Featured.js"
import PropertyList from "../../components/propertyList/propertyList.js"
import FeaturedProperty from "../../components/featuredProperty/featuredProperty.js"
import MailList from "../../components/mailList/mailList.js"
import Footer from "../../components/footer/footer.js"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Headers/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Hotel Which Love Guest</h1>
        <FeaturedProperty/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
