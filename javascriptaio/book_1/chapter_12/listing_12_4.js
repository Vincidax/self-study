const stateButton = document.getElementById("oregonButton");
stateButton.addEventListener("click", () =>
  import("./listing_12_3.js").then((OregonInfo) => {
    alert(`${OregonInfo.stateName}'s state bird is ${OregonInfo.stateBird}.`);
  })
);
