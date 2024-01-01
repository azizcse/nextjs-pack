"use client"
import {
    Container, Heading, Text, Box, SimpleGrid, Card, CardBody,
    Divider, CardFooter, HStack, CardHeader, Flex, Button, Avatar
} from "@chakra-ui/react";
import {useState, useEffect} from "react";
import {EditIcon, ViewIcon} from "@chakra-ui/icons";
import axios from 'axios';
import {getAllTask} from "../services/TaskService";

export default function Dashboard() {
    const [items, setItems] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Start fetching data");
                const res = await getAllTask();
                console.log("Using axios :" + res.data);

                const response = await fetch('http://localhost:3000/tasks');
                const newData = await response.json();
                setItems(newData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
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
                                <Button variant="ghost" leftIcon={<ViewIcon/>}>Watch</Button>
                                <Button variant="ghost" leftIcon={<EditIcon/>}>Comment</Button>
                            </HStack>
                        </CardFooter>
                    </Card>
                ))
            }
        </SimpleGrid>
    )
}