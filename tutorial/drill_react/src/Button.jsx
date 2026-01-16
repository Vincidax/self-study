import React from "react";

export default function Button({ isLoading, onClickSubmit }) {
  return (
    <button onClick={onClickSubmit} disabled={isLoading}>
      {isLoading ? "Loading" : "Submit"}
    </button>
  );
}
