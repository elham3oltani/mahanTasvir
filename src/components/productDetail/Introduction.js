import React from "react";
import TeamCard from "../TeamCard";
const Introduction = ({ des }) => {
  return (
    <div
      name="introduction"
      className="flex flex-col text-right items-end h-auto mx-4 my-4"
    >
      <div className="my-8 mr-2">
        <h1 className="text-right text-[22px] font-bold mr-1">معرفی</h1>
        <p className="border-b-2 border-orange-600 w-44 relative"></p>
      </div>
      <div className="text-right">
        {des
          ? des.map((desc) => (
              <TeamCard key={desc.id} description={desc.body} limit={300} />
            ))
          : null}

        <p className="text-lg text-justify"></p>
      </div>
    </div>
  );
};

export default Introduction;
