
   
import { useState } from 'react'
import { Redirect ,useHistory} from "react-router-dom";
import './login.css'
function App(props) {
	const history=useHistory();
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	
	
	async function loginUser(event) {
    console.log("Thanks for submitting the form!");
		event.preventDefault()

		const response = await fetch('http://localhost:3000/admin-users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			// window.location.href = '/Dashboard'
			 history.push("/Dashboard")
		} else {

			alert('Please check your username and password')
		}
	}
 
	return (
		<div>
		
			<h1 id="headerTitle">Login</h1>
		
			<form onSubmit={loginUser} id="loginform">
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
					className='rowinput'
				/>
				<br /><br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
					className='rowinput'
				/>
				<br /><br />
				<input type="submit" value="Login"  className='rowbutton'/>
			</form>
		</div>
	)
}


export default App