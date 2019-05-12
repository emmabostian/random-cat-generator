import React from "react";

const A = ({ children, ...props }) => (
  <a target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
);

const Footer = () => (
  <footer className="footer">
    <span>
      made using <A href="https://thecatapi.com/">thecatapi.com</A>
    </span>
    <pre style={{ display: "inline" }}>{"  //  "}</pre>
    <span>
      view source on{" "}
      <A href="https://github.com/emmawedekind/random-cat-generator">github</A>
    </span>
  </footer>
);

export default Footer;
