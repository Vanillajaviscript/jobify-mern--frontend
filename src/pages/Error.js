import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg"
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <Wrapper className="full-page">
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh! page not found!</h3>
          <p>We cannot seem to find what you're looking for</p>
          <Link to="/">Back home</Link>
        </div>
    </Wrapper>
  )
}
export default Error