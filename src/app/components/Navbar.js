"use client"
import {Flex, Heading, Box, Text, Button, Spacer, HStack, Avatar, useToast, AvatarBadge} from "@chakra-ui/react"
import {UnlockIcon} from "@chakra-ui/icons";

export default function Navbar() {
    const showToast = useToast();
    return (
        <Flex as="nav" p="10px" alignItems="center" justifyContent={"space-between"} mb="60px">
            <Heading as="h1">Pocket Admin</Heading>
            <HStack spacing="10px">
                <Avatar name="Aziz" src="/img/mario.png">
                    <AvatarBadge boxSize='1.25em' borderColor='papayawhip' bg='tomato'><Text fontSize="xs"
                                                                                             color="white">3</Text></AvatarBadge>
                </Avatar>
                <Text>pocket.cashe@gmil.com</Text>
                <Button colorScheme="purple" onClick={() => showToast({
                    title: 'Logged out.',
                    description: "Successfully logged out",
                    duration: 1000,
                    isClosable: true,
                    position: 'top',
                    status: 'success',
                    icon: <UnlockIcon/>,
                })}>Logout</Button>
            </HStack>
        </Flex>
    )
}