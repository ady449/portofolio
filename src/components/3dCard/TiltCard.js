import Tilt from "react-parallax-tilt";
import SimpleCard from "../Card";
export default function work({color, title, desc, tags, comp }) {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-[#0b212d]  rounded-2xl max-w-[362px]  h-full bg-gradient-to-r from-green-700 to-pink-800 p-[1px]"
    >
      <SimpleCard color={color} title={title} desc={desc} tags={tags} comp={comp}/>
    </Tilt>
  );
}
