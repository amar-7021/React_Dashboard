import { useState } from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
    const [formData, setFormData] = useState({
        userName: "", 
        password: ""
    })

    const navigate = useNavigate()

    const _handleChange = (e) => {
        const {name, value} = e.target
        setFormData((prev) => ({...prev, [name]: value.trim()}))
    }

    const _handleSubmit = (e) => {
        e.preventDefault()
        console.log("formData: ", formData)
        localStorage.setItem("token", formData.userName)
        navigate("/", { replace: true })
        setFormData({
            userName: "",
            password: ""
        })
    }

    return (
        <div>
            <form onSubmit={_handleSubmit}>
               <input 
                type="text"
                name="userName"
                placeholder="Enter User Name"
                value={formData.userName}
                onChange={_handleChange}
                />
               <input 
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={_handleChange}
                />
               <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
