import Loginpict from "../assets/login.png"
import Input from "../layout/Input";
import Gradient from "../assets/gradient.png"


function Login (){
    return(
        <>
         <div className="columns-2 justify-items-center">
            <div className="">
                <img src={Loginpict} alt="" />
                {/* <img src={Gradient} alt="" /> */}

            </div>
            <div className="w-[55rem] ml-4 items-center">
                <h1 className="text-lg font-bold">Login</h1>
                <div className="mt-10 py-10">
                    <Input label={"Email"} placeholder={"example : azizah@gmail.com"} />
                    <Input label={"Password"} placeholder={"Masukkan password"} />
                </div>
              


            </div>
    


        </div>
        </>
       
    )
}

export default Login;