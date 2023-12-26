"use client"
import {useSelector, useDispatch} from "react-redux";
import {removeUser} from "../redux/slice"

export default function DisplayUsers() {
    const userData = useSelector((data) => data.usersData.users)
    const dispatch = useDispatch();
    console.log(userData);
    return (
        <div className="display-user">
            <h3>Users List</h3>
            {
                userData.map((item) => (<div key={item.id}>
                    <span>
                         {item.name}
                    </span>
                    <button onClick={() => dispatch(removeUser(item.id))}>Remove</button>
                </div>))
            }
        </div>)
}