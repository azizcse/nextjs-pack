"use client"
import {Grid, GridItem} from "@chakra-ui/react"
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {useDispatch, useSelector} from "react-redux";

export default function CommonLayout({children}) {
    const layoutType = useSelector((data) => data.usersData.layoutType)
    console.log("Trigger layout type: " + layoutType);
    return (
        <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
            <GridItem
                as="aside"
                colSpan={{base: 6, lg: 2, xl: 1}}
                bg="purple.400"
                minHeight={{lg: '100vh'}}
                p="30px"
            >
                <Sidebar/>
            </GridItem>
            <GridItem
                as="main"
                colSpan={{base: 6, lg: 4, xl: 5}}
                p="40px"
            >
                <Navbar/>
                {children}
            </GridItem>
        </Grid>
    )
}