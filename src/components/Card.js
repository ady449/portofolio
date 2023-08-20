import * as React from 'react';


export default function SimpleCard({color, title, comp,tags, desc}) {
  
  return (
    <div className={`${color} w-full h-full rounded-2xl p-4 flex flex-col justify-between`}>
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
              className={`font-medium ${tag.color} py-0.5 px-1 bg-slate-500 rounded-md shadow-lg`}
            >
              {tag.name}
            </p>
          ))}
        </div>
      </div>
  );
}