import { Link, Route } from "react-router-dom"
import Test from './Test'

export default function About() {
  return (
    <div>
      <h1> About page </h1>
      <Link to="/about/test"> Test About page </Link>
      <Route path="/about/test" component={Test} />
      <Route path="/about/test" component={Test} />
    </div>
  )
}
