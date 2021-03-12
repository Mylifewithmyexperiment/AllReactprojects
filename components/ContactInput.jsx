import React, { useState } from 'react';
import { db } from '../Firebase/Firebase';

const heading = {
    fontSize: '3rem',
}
 
function ContactInput() {

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(e) {
        var date = (new Date);  
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;  
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        
       
        e.preventDefault();
        db.collection('RajeevContact').add({
            Name : name,
            Number: number,
            Email : email,
            Time :  strTime
        })
            .then(() => {
                alert("message has been responded");
            })
            .catch(err => {
                alert(err.message);
        })
        setName('');
        setNumber('');
        setEmail('');
    }
    return (
        <>
            <center >
                <form>
                    <h1 style={heading}>Demo Contact US from with Firebase</h1>
                    <label> Name : </label>
                    <input type="text" required placeholder="Enter your Name "
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                
                    <label> Number : </label>
                    <input type="text" required placeholder="Enter your Number "
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                
                    <label> Email : </label>
                    <input type="text" required placeholder="Enter your Email "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                   

                    <button  onClick={handleSubmit} type="submit">Submit</button>
                </form>
            </center>
        </>
    );
}

export default ContactInput;
 