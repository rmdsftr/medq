import Loginpict from "../assets/login.png";
import Gradient from "../assets/gradient.png";
import Input from "../layout/Input";
import Button from "../layout/Button";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex w-[1000px] h-[600px] shadow-lg rounded-2xl overflow-hidden ml-60">
        <div className="relative w-1/2 flex items-center justify-center bg-white">
          <img
            src={Gradient}
            alt="background"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <img src={Loginpict} alt="login" className="relative z-10 max-w-[80%]" />
        </div>

        <div className="w-1/2 flex flex-col justify-center px-10 bg-white">
          <h1 className="text-4xl font-bold text-center text-blue-500 mb-8">Register</h1>
          <div className="space-y-4">
            <Input label={"Nama Lengkap"} placeholder={"Masukkan nama lengkap"} />
            <Input label={"Tanggal Lahir"} placeholder={"Masukkan tanggal lahir"} />
            <Input label={"Email"} placeholder={"Masukkan email"} />
            <Input label={"Password"} placeholder={"Masukkan password"} />
          </div>
          <div className="mt-8 flex justify-center">
            <Button label="Register" variant="biru" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
