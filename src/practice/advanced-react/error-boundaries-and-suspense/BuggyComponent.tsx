const BuggyComponent = () => {
    throw new Error("Something Went Wrong")
    return (
        <div>Buggy Component</div>
    )
}

export default BuggyComponent