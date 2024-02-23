import React, { useEffect, useState } from 'react'
import { AiOutlineLoading } from "react-icons/ai";

import "./member-list.css";
import MemberCard from './member-card';
import { getRequest } from "../../../common/requests";

const MemberList = (props) => {
    const [members, setMembers] = useState("loading");

    useEffect(() => {

        const fetchData = async () => {
            const headers = {authorization: "Bearer " + props.user.loginToken}
            const response = await getRequest("http://localhost:5001/users", headers);

            setMembers(response.user)
        }

        fetchData();
    }, [props.user]);

    try {
        if (members == "loading") {
            return (
                <div>
                    <AiOutlineLoading className="icon loading-icon"/>
                </div>
            )
        } else {
            return (
                <div className="member-list">
                    <div className="grid-header">ID</div>
                    <div className="grid-header">Username</div>
                    <div className="grid-header">Email</div>
                    { members.map((item, index) => {
                        return <MemberCard key={item.id} index={index} user={item}/>
                    })}
                </div>
            )
        }
    } catch {
        return (
            <div className="error-message">Invalid session token. Please log out and try again.</div>
        )
    }
}

export default MemberList
