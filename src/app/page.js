import Image from 'next/image'
import AddUsers from "./components/AddUser";
import DisplayUsers from "./components/DisplayUsers";


export default function Home() {
    return (
        <main>
            <AddUsers/>
            <DisplayUsers/>
        </main>
    )
}
