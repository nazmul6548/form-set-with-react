import { useState } from "react";


function Statefullform() {
    const [name,setName] = useState("tttt");
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [error,setError] = useState("");


    const onfirebutton = e => {
        e.preventDefault();
        // console.log(e.target.text.value);
        // console.log(e.target.email.value);
        // console.log('tata bye bye');
        if (password.length <6) {
            setError('password must be at least 6 characters or longer');
        }else {
            setError('')
        }
        console.log(name,email,password);
    }
    const texthandle = e => {
       setName(e.target.value)
    }
    const emailhandle = e => {
        setEmail(e.target.value)
    }
    const passhandle  = e => {
        setPassword(e.target.value)
        
    }


  return (
    <div>
          <form onSubmit={onfirebutton}>
            <input onChange={texthandle} value={name} type="text" name="text" id="" placeholder="name"/>
            <br />
            <input onChange={emailhandle} type="email" name="email" id="" placeholder="email"/>
            <br />
            <input onChange={passhandle} type="password" name="password" id="" placeholder=""/>
            <br />
            <input type="submit" value="submit" />
            {
                error && <p>{error}</p>
            }
        </form>
    </div>
  )
}

export default Statefullform