import { NavLink } from "react-router-dom";
// import { useContext } from "react";
// import AuthContextProvider from "../../contexts/AuthContextProvider";

const RegistrationPage = () => {
    const HandelRegistration = (e) =>{
        // const { createUser } = useContext(AuthContextProvider);
        
        e.preventDefault();
        // console.log(e);
        const name = e.target.name.value;
        const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email, password, name);
        const user = {name, email};
        // console.log(user);
        
        fetch('http://localhost:5000/data',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user) 
        })
            .then(res => res.json())
            .then(data =>{
                e.target.reset();
                if (data) {
                    alert('registration complite')
                }
                // console.log(data);
            });

        // createUser(email, password)
        // .then((result) =>{
        //     console.log(result.user)
        // })
        // .catch((error)=>{
        //     console.log(error.message);
        // })
    }

    return (
        <div className="mx-auto">
            <form className="grid gap-4 w-fit mx-auto my-12 px-32 py-14 border bg-purple-900 text-white "onSubmit={HandelRegistration}>
                <h1 className="text-3xl text-center font-bold mb-6">Registration</h1>
                <input className="border-2 rounded-md bordered-white bg-purple-900 px-2 py-1" type="text" name="name" placeholder="User Name..." required />
                <input className="border-2 rounded-md bordered-white bg-purple-900 px-2 py-1" type="email" name="email" placeholder="Email..."required />
                <input className="border-2 rounded-md bordered-white bg-purple-900 px-2 py-1" type="password" name="password" placeholder="password"required />
                <div className="flex gap-3">
                    <input type="checkbox" name="terms"id="terms" />
                    <p htmlFor="terms">Accept our <a href="">terms and condation</a></p>
                </div>
                <input className="w-fit border-2 rounded-md bordered-white bg-purple-900 px-4 py-1 mt-4 mx-auto" type="submit" value={"Register"} />
                <p>Have an account? <NavLink className={'hover:text-black '} to={'/login'} >Log In!</NavLink></p>
            </form>
        </div>
    );
};

export default RegistrationPage;