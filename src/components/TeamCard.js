import React, { useState } from "react";
const TeamCard = ({ description, limit }) => {
  const [showAll, setShowAll] = useState(false);
  return (
    <>
      {description?.length > limit ? (
        <div>
          {showAll ? (
            <div>
              {description}
              <br />
              <button
                onClick={() => setShowAll(false)}
                className="text-blue-200"
              >
                بستن
              </button>
            </div>
          ) : (
            <div>
              {description.substring(0, limit).concat("...")}
              <br />
              <button
                onClick={() => setShowAll(true)}
                className="text-blue-200"
              >
                بیشتر
              </button>
            </div>
          )}
        </div>
      ) : (
        description
      )}
    </>
  );
};
export default TeamCard;
