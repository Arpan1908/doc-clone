import Togglecolor from './Tooglecolor';
import Views from './Views';
import {Grid,GridItem,Tabs} from '@chakra-ui/react'
import Sidebar from './Home/Sidebar';
import {useState} from 'react';
import Chat from "./Home/Chat";

import { createContext } from 'react';

export const FriendContext = createContext();


function Home() {
  const [list, setList] = useState([]);

  return (
  <FriendContext.Provider value={{ list, setList }}>
      <Grid templateColumns="repeat(10, 1fr)" h="100vh" as={Tabs}>
        <GridItem colSpan="3" borderRight="1px solid gray">
          <Sidebar />
        </GridItem>
        <GridItem colSpan="7">
          <Chat />
        </GridItem>
      </Grid>
    </FriendContext.Provider>
  );
}

export default Home;