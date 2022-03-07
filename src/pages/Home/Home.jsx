import "bootstrap/dist/css/bootstrap.min.css"
import SLogin from "../../spotify/Login"
import Dashboard from "../../spotify/Dashboard"

const code = new URLSearchParams(window.location.search).get("code")

function Home() {
    
    return  <SLogin />
}
export default Home;