import * as React from "react";
import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer"
import "../styles/styles.scss"
// markup
const IndexPage = () => {
  return (
    <div id="font">
      <NavBar />

        <div>
          I am in the body
        </div>
      <Footer />
    </div>
  )
}

export default IndexPage;
