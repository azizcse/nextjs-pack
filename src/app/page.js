"use client"
import Image from 'next/image'
import AddUsers from "./components/AddUser";
import DisplayUsers from "./components/DisplayUsers";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import {Grid, GridItem} from "@chakra-ui/react"
import Sidebar from "./components/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, incrementByAmount} from "./redux/counterSlice";

export default function Home() {
    const {count} = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <>
            {/*<Dashboard/>*/}
            <h1>The count is: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</button>
        </>
        /*<>
            <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
                {/!* sidebar *!/}
                <GridItem
                    as="aside"
                    colSpan={{base: 6, lg: 2, xl: 1}}
                    bg="purple.400"
                    minHeight={{lg: '100vh'}}
                    p="30px"
                >
                    <Sidebar/>
                </GridItem>

                {/!* main content & navbar *!/}
                <GridItem
                    as="main"
                    colSpan={{base: 6, lg: 4, xl: 5}}
                    p="40px"
                >
                    <Navbar/>
                    <Dashboard/>
                </GridItem>
            </Grid>
        </>*/

    )
}
