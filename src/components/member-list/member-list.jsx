import React, { useEffect, useState } from 'react'
import { getRequest } from "../../common/requests";
import "./member-list.css";
import MemberCard from './member-card';

const MemberList = (props) => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        //setRawCatData([]); // Prevent an infinite number of cats loading whenever the page rerenders.

        const fetchData = async () => {
            const response = await getRequest("http://localhost:5001/users");

            setMembers(response.user)
        }

        fetchData();
    }, []);

    useEffect(() => {
        console.log(members);
    }, [members]);

    return (
        <div className="member-list">
            <div>ID</div>
            <div>Username</div>
            <div>Email</div>
            { members.map((item) => {
                return <MemberCard key={item.id} user={item}/>
            })}
        </div>
    )
}

export default MemberList
