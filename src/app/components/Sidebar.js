"use client"
import {List, ListItem, Link} from "@chakra-ui/react"
import {CalendarIcon} from "@chakra-ui/icons";


export default function Sidebar() {
    return (
        <List color={"white"} fontSize="1.2em" spacing={4}>
            <ListItem>
                <Link href="/profile">
                    <CalendarIcon mr="10px"/>Profile
                </Link>
            </ListItem>
            <ListItem>
                New tasks
            </ListItem>

        </List>
    )
}