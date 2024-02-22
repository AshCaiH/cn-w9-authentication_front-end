export const MemberCard = (props) => {
    const rowType = (props.index % 2 == 0 ? "member-grid-cell row-odd" : "member-grid-cell row-even");

    return (
        <>
            <div className={rowType}>{props.user.id}</div>
            <div className={rowType}>{props.user.username}</div>
            <div className={rowType}>{props.user.email}</div>
        </>
    )
}

export default MemberCard;