import React from "react";

function stringEllipsed(snippet, limit = 25) {
  return (
    <span>
      {snippet.slice(0, limit)}
      {snippet.length > limit ? "..." : ""}
    </span>
  );
}

export default stringEllipsed;
