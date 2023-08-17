import "./App.css";
import CustomizedAccordions from "./components/Sandwich";

const title = "Sandwich";
const description =
  "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomizedAccordions title={title} description={description} />
      </header>
    </div>
  );
}

export default App;
