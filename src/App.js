import './App.css';
import Inner from './Components/BodyContent/Inner';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ToDoList from "./Components/toDoList"; 
function App() {
  return (
    <div className="Myapp">
      {/* <Header /> */}
      <ToDoList />
      {/* <Inner />
      <Footer /> */}
    </div>
  );
}

export default App;
