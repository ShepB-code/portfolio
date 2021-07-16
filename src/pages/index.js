import * as React from "react";
import { NavBar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer"
import "../styles/styles.scss"

import {BodyWrapper, IntroWrapper, ImgWrapper, TextWrapper, QuoteWrapper, BoldSub } from "../styles/indexStyles"
import dev from "../illustrations/dev.svg"
// markup
const IndexPage = () => {
  return (
    <div id="font">
      <NavBar />
      <BodyWrapper>
        <IntroWrapper>
          
          <ImgWrapper>
            <img alt="dev" src={dev} />
          </ImgWrapper>

          <TextWrapper>
            <h1>
              Hello, my name is Shepard.
            </h1>
            <BoldSub>
              I am an aspiring software developer.
            </BoldSub>
           </TextWrapper>
       </IntroWrapper>
       
       <QuoteWrapper>
         “All we have to decide is what to do with the time that is given us.” - Gandalf the Grey
       </QuoteWrapper>
      </BodyWrapper>

      <Footer />
    </div>
  )
}

export default IndexPage;
