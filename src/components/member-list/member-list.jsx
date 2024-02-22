import React, { useEffect, useState } from 'react'
import { getRequest } from "../../common/requests";
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
            { members.map((item) => {
                return <MemberCard key={item.id} username={item.username}/>
            })}
        </div>
    )
}

export default MemberList
