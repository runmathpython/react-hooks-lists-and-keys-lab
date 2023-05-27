import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkItems = links.map((item) => {
    let str = "#" + item;
    return <a key={item} href={str}>{item}</a>
  });

  return <nav>{linkItems}</nav>;
}

export default NavBar;
