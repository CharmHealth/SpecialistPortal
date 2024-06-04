import React from "react";
import PageContent from "./Paragraphs";
import Header from "./HeroComponent";
import Footer from "../Elements/Footer";
import Blobs from "./blobProcess";
localStorage.clear();
export default function HomePage() {

    return (
        <div class="flex flex-col h-screen justify-between">
        <header>
          <Header/>
        </header>

        <main>
          <div class="items-center bg-domino-gray place-items-center">
          <Blobs/>
          <br></br>
          <br></br>
          </div> 
         <PageContent/>
        </main>
        <footer class="h-3">
          <Footer/>
        </footer>
      </div>
  

    );
}