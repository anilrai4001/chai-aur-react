import "./App.css";
import Card from "./components/Card";

function App() {
  const arr = ["macbook", "apple", "laptop"];

  return (
    <div className="flex flex-col bg-yellow-400 items-center p-5">
      <h1 className="bg-red-400  text-white rounded-xl px-6 py-4">
        Tailwind test
      </h1>
      <div className="flex">
        <Card name="M1 pro" tags={arr} />
        <Card  />
      </div>
    </div>
  );
}

export default App;
