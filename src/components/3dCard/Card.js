import Tilt from "react-parallax-tilt";
export default function work({ title, desc, tags, comp }) {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-[#0b212d]  rounded-2xl max-w-[362px]  h-full bg-gradient-to-r from-green-700 to-pink-800 p-[1px]"
    >
      <div className="bg-[#0b212d] w-full h-full rounded-2xl p-4 flex flex-col justify-between">
        <div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{title}</h3>
            <h4 className="mt-2 text-bold text-[16px]">{comp}</h4>
            <p className="mt-2 text-secondary text-[14px]">{desc}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-[14px]">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`font-medium text-${tag.color} py-0.5 px-1 bg-slate-800 rounded-sm shadow`}
            >
              {tag.name}
            </p>
          ))}
        </div>
      </div>
    </Tilt>
  );
}
