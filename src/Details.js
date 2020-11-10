import React from "react";

const Details = (props) => {
  return (
    <pre>
      <codd>{JSON.stringify(props, null, 4)}</codd>
    </pre>
  );
};

export default Details;
