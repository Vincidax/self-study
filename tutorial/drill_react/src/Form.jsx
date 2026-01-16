import React from "react";
import Button from "./Button.jsx";

export default function Form({ isLoading, onClickSubmit }) {
  return (
    <form>
      <Button isLoading={isLoading} onClickSubmit={onClickSubmit} />
    </form>
  );
}
