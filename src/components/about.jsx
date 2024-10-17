import Setting from "../assets/icons/settings.svg";

export default function About() {
  return (
    <div className='w-full max-w-screen-xl mx-auto h-screen'>
    <div className="flex justify-center items-center gap-10 h-full">
     <h1 className='uppercase text-3xl font-bold text-black text-center'>Site under development</h1>
     <img src={Setting} alt="setting" className="w-40 h-40"/>
    </div>
  </div>
  )
}
