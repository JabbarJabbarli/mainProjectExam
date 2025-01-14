import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  return (
    <section className="flex-1">
      {details.map((item) => (
        <div className="flex flex-col ">
          <h1 className="text-neutral-900 text-[23px] mb-[24px] font-semibold">
            {item.title}
          </h1>
          <p className="text-neutral-500 font-normal text-[15px] leading-loose">
            {item.subtitle}
          </p>
          <ul className="mt-[56px] list-disc pl-5 flex flex-col gap-3">
            {item.info.map((info) => (
              <li>{info}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Details;