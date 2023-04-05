import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi,<span className="purple"> I am Susan </span> a content writer, content creator and a SEO specialist. 
            <br />
            <br />
            <p>As a content writer and SEO specialist, I understand how to conduct research, organize and structure
content.</p> 
 <p>More to that, I also have the knowledge to use a tone that resonates with the audience or readers, and
that way, I can write in formats such as blog posts, articles, websites copy, and social media posts among
others.</p>
<p>To add to the above, I also have solid understanding of SEO principles and strategies such as, conducting
keyword research, optimizing content for specific keywords, and using metadata to improve search
engine visibility.</p>
<p>Additionally, I am also familiar with on-page optimization techniques, such as optimizing headlines,
meta descriptions, and internal linking.</p>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books 
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Creative stories
            </li>
               <li className="about-activity">
              <ImPointRight />Journaling
            </li>
               <li className="about-activity">
              <ImPointRight /> Blogging
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentoring Other People
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If your reality begins with dreams, Your dreams will become your reality."{" "}
          </p>
          <footer className="blockquote-footer">Susan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
