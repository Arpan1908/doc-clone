import Togglecolor from './components/Tooglecolor';
import Views from './components/Views';
import UserContext from './components/Context';



function App() {
  return (
    <UserContext>
    <Views />
    <Togglecolor />
    
    </UserContext>
    

  );
}

export default App;
