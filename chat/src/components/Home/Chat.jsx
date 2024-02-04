import { Text, VStack } from "@chakra-ui/layout";
import { TabPanel, TabPanels } from "@chakra-ui/tabs";
import { useContext } from "react";
import { FriendContext } from "../Home";

const Chat = () => {
  const {list} = useContext(FriendContext)
  return list.length > 0 ? (
    
    <VStack>
      <TabPanels>
        <TabPanel>friend one</TabPanel>
        <TabPanel>friend two</TabPanel>
      </TabPanels>
    </VStack>
  ) :(
    <VStack
      justify="center"
      pt="5rem"
      w="100%"
      textAlign="center"
      fontSize="lg" >
      <TabPanels>
        <Text>No friend :( Click add friend to start chatting</Text>
      </TabPanels>
    </VStack>
  
  );
};

export default Chat;