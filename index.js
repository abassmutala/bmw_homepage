const Links = [
  {
    name: "Find your BMW",
    href: "",
  },
  {
    name: "Purchase & lease",
    href: "",
  },
  {
    name: "Electric cars",
    href: "",
  },
  {
    name: "Services & accessories",
    href: "",
  },
  {
    name: "More BMW",
    href: "",
  },
];

const navLinks = document.getElementsByClassName("nav__links");
// for (let index = 0; index < Links.length; index++) {
//   const link = Links[index];
//   let navLink = document.createElement("a");
//   navLink.href = link.href;
//   navLink.innerHTML = "span";
//   document.body.appendChild(navLink)
// }
Links.map((l) => navLink.innerText = l);
