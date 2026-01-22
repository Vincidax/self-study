import useBearStore from "../stores/bearStores";

const BearBox = () => {
  // const bears = useBearStore((state) => state.bears);
  // const increasePopulation = useBearStore((state) => state.increasePopulation);
  // const removeAllBears = useBearStore((state) => state.removeAllBears);
  const { bears, increasePopulation, removeAllBears } = useBearStore();
  return (
    <div className="box">
      <h1>BearBox</h1>
      <p>bears: {bears}</p>
      <div>
        <button onClick={increasePopulation}>add bear</button>
        <button onClick={removeAllBears}>remove bear</button>
      </div>
    </div>
  );
};

export default BearBox;
