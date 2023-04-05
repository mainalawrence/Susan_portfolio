import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Content writer",
          "Search Engine Optimization(SEO) specialist",
          "Keyword Researcher",
          "Product/Book Review",
          "Product Description",
          "Proof reading ",
          "Editing "
          
        
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

