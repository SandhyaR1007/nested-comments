import { Comments } from "./components/Comments";
import { data } from "./utils/data";

const App = () => {
  return (
    <div>
      <h3>Nested Comments App</h3>
      <Comments comments={data} />
    </div>
  );
};

export default App;
