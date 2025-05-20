import Login from "../assets/login.png"
import Gradient from "../assets/gradient.png"

import Input from "../layout/Input";

function Register ()
{
    return(
        <>
        <div className="flex columns-2">
            <div className="">
                <div className="relative">
                    <img src={Gradient} alt="background" />
                </div>
                <div className="absolute items-center z-10 ">
                <img src={Login} alt="login" className="z-0" />

                </div>
                
            </div>
            <div className=" jusitfy-center w-[500px] items-center content-center">
                <p className="font-bold text-5xl mb-10">Registerr</p>
                <Input label={"Nama Lengkap"} placeholder={"Masukkan nama lengkap"}/>
                <Input label={"Tanggal Lahir"} placeholder={"Masukkan tanggal lahir"}/>
                <Input label={"Email"} placeholder={"Masukkan email"}/>
                <Input label={"Password"} placeholder={"Masukkan password"}/>




            </div>

        </div>
        </>
    )
}

export default Register;