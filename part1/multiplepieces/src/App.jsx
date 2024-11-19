import {useState} from "react";


const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }
    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}


const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = () => {
    // const [clicks, setClicks] = useState({left: 0, right: 0});
    //
    // const handleLeftClick = () =>  setClicks({ ...clicks, left: clicks.left + 1  })
    // const handleRightClick = () =>  setClicks({ ...clicks, right: clicks.right + 1  });

    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [allClicks, setAllClicks] = useState([]);
    const [total, setTotal] = useState(0);


    const handleLeftClick = () => {
        // console.log('before updating left', left);
        const leftUpdated = left+1
        setLeft(leftUpdated);
        // console.log('after updating left', leftUpdated);
        setAllClicks(allClicks.concat('L'))

        setTotal(leftUpdated+right)
    }

    const handleRightClick = () => {
        const rightUpdated = right+1;
        setRight(rightUpdated);
        setAllClicks(allClicks.concat('R'))
        setTotal(left+rightUpdated)
    }


    return (
        <div>
            {left}
            <Button handleClick={handleLeftClick} text="left"></Button>
            <Button handleClick={handleRightClick} text="right">right</Button>
            {right}
            <History allClicks={allClicks} />
            <p>Total= {total}</p>
        </div>
    )
}

export default App;