import { Link } from 'react-router-dom'
import NotFound from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage.js'
const Error = () => {
  return (
 <Wrapper className='full-page'>
 <div>
 <img src={NotFound} alt="NOT-FOUND"></img>
 <h3>Ohh! Page Not Found</h3>
 <p>Sorry! We are unable to find the page you're looking for</p>
 <Link to="/">Back to home</Link>
 </div>
    
 </Wrapper>
  )
}

export default Error