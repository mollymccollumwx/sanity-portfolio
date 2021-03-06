import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import image from "../galaxy.jpg";

const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  });
  return (
    <main className="relative">
        <img src={image} alt="background" className="absolute w-full"/>
        <div className="p-10 lg:pt-48 container mx-auto relative">
            <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
                <img />
                <div>
                    <h1>
                    </h1>
                    <div>BLOCK CONTENT</div>
                </div>
            </section>
        </div>
    </main>
  );
};

export default About;
