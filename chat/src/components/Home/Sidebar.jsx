import React, { useContext } from 'react'
import { HStack, VStack,Heading,Input,Button,Divider, TabList,Tab,Text, useDisclosure} from '@chakra-ui/react'
import {ChatButton, ChatIcon} from '@chakra-ui/icons'
import { FriendContext } from '../Home'
import Modall from './Modal'

const Sidebar = () => {
    const {list, setList} = useContext(FriendContext);
    const {onOpen,isOpen,onClose} = useDisclosure();
  return (
    <>
    <VStack py="1.5rem">
        <HStack justify="space-evenly">
            <Heading size="md">
                Chats
            </Heading>
            <Button variant="outline" colorScheme='teal' onClick={onOpen}>
                <ChatIcon />
            </Button>
            
        </HStack>
        <Divider />
        <HStack spacing="3">
        <Input variant='filled' placeholder='Search or start a new chat' width="400px" colorScheme='teal' />
        </HStack>
        <VStack as={TabList}>
        {Array.isArray(list) &&
          list.map((friend) => (
            <HStack as={Tab} key={friend.id}>
              <Text>{friend.username}</Text>
            </HStack>
          ))}
      </VStack>
    </VStack>
    <Modall isOpen={isOpen} onClose={onClose}/>
    </>
  )
}

export default Sidebar