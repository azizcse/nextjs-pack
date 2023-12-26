"use client"
import {useState} from "react"
import {useDispatch} from "react-redux";
import {addUser} from "../redux/slice";

export default function AddUsers() {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const userDispatcher = () => {
        dispatch(addUser(name))
    }
    return (
        <div className="add-user">
            <h3>Users List</h3>
            <input type="text"
                   className="add-user-input"
                   onChange={(e) => setName(e.target.value)}
                   placeholder="Add new user"/>
            <button className="add-user-btn" onClick={userDispatcher}>Add User</button>
        </div>)
}