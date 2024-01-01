import Image from 'next/image'
import AddUsers from "./components/AddUser";
import DisplayUsers from "./components/DisplayUsers";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import {Grid, GridItem} from "@chakra-ui/react"
import Sidebar from "./components/Sidebar";

export default function Home() {
    return (
        <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
            {/* sidebar */}
            <GridItem
                as="aside"
                colSpan={{base: 6, lg: 2, xl: 1}}
                bg="purple.400"
                minHeight={{lg: '100vh'}}
                p="30px"
            >
                <Sidebar/>
            </GridItem>

            {/* main content & navbar */}
            <GridItem
                as="main"
                colSpan={{base: 6, lg: 4, xl: 5}}
                p="40px"
            >
                <Navbar/>
                <Dashboard/>
            </GridItem>
        </Grid>
    )
}
