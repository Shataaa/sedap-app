import { createRoot } from "react-dom/client";
import Artikeldetail from "../assets/latihan/Artikeldetail";
import HelloWorld from "./HelloWorld";
import Container from "./container";

import './custom.css';




createRoot(document.getElementById("root")).render(
  <Container>
    <HelloWorld />
    < Artikeldetail/>
  </Container>
);
