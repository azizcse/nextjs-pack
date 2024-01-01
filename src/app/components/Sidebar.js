import {List, ListItem} from "@chakra-ui/react"


export default function Sidebar() {
    return (
        <List color={"white"} fontSize="1.2em" spacing={4}>
            <ListItem>
                    Dashboard
            </ListItem>
            <ListItem>
                  New tasks
            </ListItem>

        </List>
    )
}