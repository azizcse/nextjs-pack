"use client"
import {
    Container, Heading, Text, Box, SimpleGrid, Card, CardBody,
    Divider, CardFooter, HStack, CardHeader, Flex, Button, Avatar, Spacer,useToast
} from "@chakra-ui/react";
import {useState, useEffect} from "react";
import {EditIcon, ViewIcon} from "@chakra-ui/icons";
import ApiService from "../network/ApiService"

export default function Dashboard() {
    const [items, setItems] = useState([])
    const toast = useToast();
    useEffect(() => {
        let mounted = true;
        async function fetchData(){
            try {
                console.log("Start fetching data");
                const data = await ApiService.get('/users');
                data.map((item)=>{
                    console.log('Axios Data:', item.id);
                });
                const response = await fetch('http://localhost:3000/tasks');
                const newData = await response.json();
                setItems(newData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
        return () => {
            mounted = false;
        };
    }, []);

    return (
        <SimpleGrid spacing={10} minChildWidth={300}>
            {
                items && items.map(task => (
                    <Card key={task.id} borderTop="8px" borderColor="purple.400" bg="white">
                        <CardHeader color="gray.700">
                            <Flex gap={5}>
                                <Avatar name={task.author} src={task.img}/>
                                <Box>
                                    <Heading as="h3" size="sm">{task.title}</Heading>
                                    <Text>by {task.author}</Text>
                                </Box>
                            </Flex>
                        </CardHeader>

                        <CardBody color="gray.500">
                            <Text>{task.description}</Text>
                        </CardBody>

                        <Divider borderColor="gray.200"/>

                        <CardFooter>
                            <HStack>
                                <Button _hover={{bg: 'purple.400'}} variant="outline"
                                        leftIcon={<ViewIcon/>}>Watch</Button>
                                <Spacer/>
                                <Button _hover={{bg: 'purple.400'}}
                                        leftIcon={<EditIcon/>} border='1px'
                                        borderColor='purple.500'>Comment</Button>
                            </HStack>
                        </CardFooter>
                    </Card>
                ))
            }
        </SimpleGrid>
    )
}