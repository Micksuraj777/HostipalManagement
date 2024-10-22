import User from "../assets/icons/user.png";
import Password from "../assets/icons/password.png";
import Doc from "../assets/images/doctor.avif";
import { Button } from "./Button";
import Input from "./input";

export default function LoginIn() {
  return (
    <div className='w-full max-w-screen-2xl mx-auto h-[90vh]'>
      <div className='flex justify-center items-center h-full'>
        <div className='flex flex-col gap-5'>
          <div className='flex gap-3'>
            <img src={User} alt='setting' className='w-8 h-9' />
            <Input type='text' placeholder='Username'  />
          </div>
          <div className='flex gap-3'>
            <img src={Password} alt='setting' className='w-8 h-8' />
            <Input type='password' placeholder='Password'  />
          </div>
          <Button href="/" bgColor="#9083D5" className="text-white">Login</Button>
        </div>
        <div>
        <img src={Doc} alt='setting' className='object-cover w-[200px]' />
        </div>
      </div>
  </div>
  )
}