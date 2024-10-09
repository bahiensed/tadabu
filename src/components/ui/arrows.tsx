import Image from "next/image";
import arrows from "@/assets/images/arrows.png";

function Arrows() {
  return (
    <div className="flex flex-col items-start">
      <Image src={arrows} alt="Clickable areas" useMap="#image-map" />
      <map name="image-map">
        <area
          shape="rect"
          coords="60,80,250,100" // Check these values for accuracy
          href="/stats"
          alt="Stats"
        />
        <area
          shape="rect"
          coords="80,90,250,180" // Ensure these values are correct
          href="/"
          alt="Home"
        />
        <area
          shape="rect"
          coords="80,90,250,270" // Verify these area coordinates
          href="/profile"
          alt="Profile"
        />
      </map>
    </div>
  );
}

export default Arrows;
