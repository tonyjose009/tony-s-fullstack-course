
const SecondComp = () => {
    return (
        <p>Sending from Second Component from Hello Component (Component inside another component)</p>
    )
}


const Friends = () => {
    const friends = [
        { name: "Betty", age: 36 },
        { name: "Johit", age: 6 }
    ];
    return (
        // <p>{friends.map((friend) => (
        //     <div>
        //
        //     </div>
        // ))}</p>
        <div>
            Printing my friends details here as follows: <br />
            {friends.map((friend) => (
                <p>Name: {friend.name} || Age: {friend.age}</p>
            ))}
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            greeting app created by Tony Jose
        </div>
    )
}


const Hello = () => {
    const date = new Date()
    const actualAge = 10
    return (
        <div>I'm printing on behalf of "Hello" component. <br/>
            Today is {date.toDateString()} <br />
            And the actual age is {actualAge+30+10} <br />
            <SecondComp />
            <Footer />
            <Friends />
        </div>

    )
}



export default Hello
