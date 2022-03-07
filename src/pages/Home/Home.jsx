import "bootstrap/dist/css/bootstrap.min.css"
import SLogin from "../../spotify/Login"
import Dashboard from "../../spotify/Dashboard"

const code = new URLSearchParams(window.location.search).get("code")

function Home() {
    console.log("CODIGO DE URL"+code);
    return code!==null ? <Dashboard code={code} /> : <SLogin />
}
export default Home;