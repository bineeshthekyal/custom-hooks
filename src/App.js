
import useFetchData from './componets/customHooks/useFetchData';
import './App.css';


// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/photos


function App() {

const [usersData]=useFetchData(
  " https://jsonplaceholder.typicode.com/users"

);
const [userPhoto] = useFetchData(

  "https://jsonplaceholder.typicode.com/photos"

);
console.log(usersData);
console.log(userPhoto);
  return (
    <div className="App">
     <h1>custom hook</h1>

     {usersData ? <h4>{usersData[0]?.name}</h4> :null}
     {userPhoto ?<img height={200} src={userPhoto[0]?.url} />: null}
    </div>
  );
}

export default App;
