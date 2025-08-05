import React from 'react'
function Hookdemo(){

    const[counter,setCounter]=React.useState(0)
    const[msg,setmsg]=React.useState("")
    const incrementData = () => {
        if(counter>=5){
            setmsg("sorry value is >=5")
        }
        else{
            setmsg("")
            setCounter(counter + 1)    
        }
    }
    const decrementData = () => {
        if(counter<=0){
            setmsg("sorry value is <=0")
        }
        else{
            setmsg("")
            setCounter(counter - 1)    
        }
    }
    return(
        <>
            <h1>welcome to hookdemo</h1>
            <h1> counter value is {counter}</h1>
            <input type="button" value="+" onClick={incrementData} />
            <input type="button" value="-" onClick={decrementData} />
            <input type="button" value="X" onClick={()=>setCounter(0)}/>
            {msg}
        </>
    )

}

export default Hookdemo