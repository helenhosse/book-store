import React from "react";
import NavBar from "./NavBar";
import Logo from "../images/owlsch.png";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <h1 className="title-logo">
        A Novel Idea
        <img src= {Logo} />
      </h1>
      <p>We like big books and we cannot lie!</p>
      <h2 className="subtitle">About</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Eget sit amet tellus
        cras adipiscing enim eu. Viverra adipiscing at in tellus. Nulla pharetra
        diam sit amet. Facilisis mauris sit amet massa vitae. Non odio euismod
        lacinia at quis risus sed. Tellus rutrum tellus pellentesque eu
        tincidunt tortor aliquam nulla. Risus commodo viverra maecenas accumsan
        lacus vel. Donec ultrices tincidunt arcu non sodales neque sodales.
        Dignissim enim sit amet venenatis urna cursus eget nunc.
        <br>
          Sit amet aliquam id diam maecenas ultricies. A scelerisque purus
          semper eget duis at tellus at urna. Et tortor consequat id porta.
          Elementum curabitur vitae nunc sed velit dignissim sodales ut. Commodo
          viverra maecenas accumsan lacus vel facilisis volutpat. Dictum at
          tempor commodo ullamcorper a lacus vestibulum. Nibh nisl condimentum
          id venenatis a condimentum vitae sapien pellentesque. Auctor augue
          mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur
          adipiscing elit duis. Montes nascetur ridiculus mus mauris vitae
          ultricies.
        </br>
        <br>
          Tristique senectus et netus et. Nam aliquam sem et tortor consequat id
          porta. Lacus sed turpis tincidunt id aliquet. Egestas egestas
          fringilla phasellus faucibus scelerisque eleifend donec pretium
          vulputate. Tortor at risus viverra adipiscing at in tellus. Amet
          mattis vulputate enim nulla aliquet porttitor lacus luctus. Vel orci
          porta non pulvinar. Elit at imperdiet dui accumsan sit. Eget gravida
          cum sociis natoque penatibus. Pellentesque elit ullamcorper dignissim
          cras tincidunt lobortis feugiat. Praesent elementum facilisis leo vel.
          Aliquam purus sit amet luctus venenatis. Vel eros donec ac odio tempor
          orci. Quisque egestas diam in arcu cursus. Vel pretium lectus quam id
          leo in. Nam aliquam sem et tortor consequat id porta. Cursus euismod
          quis viverra nibh cras pulvinar mattis. Quam nulla porttitor massa id
          neque aliquam vestibulum. Aliquam sem fringilla ut morbi tincidunt
          augue. Consequat mauris nunc congue nisi vitae suscipit.
        </br>
      </p>
    </div>
  );
};

export default HomePage;
