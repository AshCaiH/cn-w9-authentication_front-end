export const MemberCard = (props) => {
    return (
        <>
            <div>{props.user.id}</div>
            <div>{props.user.username}</div>
            <div>{props.user.email}</div>
        </>
    )
}

export default MemberCard;