import './App.css';
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function App() {

  return (
    <div className={'wrapper'}>
      <div className={'up_wrapper'}>

          <Users/>

      <Posts/>
      </div>
      <Comments/>
    </div>
  );
}
export default App;
