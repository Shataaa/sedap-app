import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import "./tailwind.css";
import UserForm from "./Userform";
import HitungGajiForm from "./HitungGajiForm";
import Container from "./Container";

createRoot(document.getElementById("root")).render(
  <div>
    <TailwindCSS />

    <UserForm />

    <Container>
      <HitungGajiForm />
    </Container>
  </div>
);
