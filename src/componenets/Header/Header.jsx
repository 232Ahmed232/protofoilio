import bg from "../../images/bg.jpg"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Link } from "react-router-dom";
import me from "../../images/me.jpeg"
import Snowfall from 'react-snowfall'
import music from "../../images/audio.m4a"
import Slideshow from "../Slideshow/Slideshow";

function Header() {

    const [text] = useTypewriter({
        words: ["Web-Devloper", "Web-Architecture", "Web-Designer"],
        loop: {},
        typeSpeed: 150,
        deleteSpeed: 100
    })
    const [para] = useTypewriter({
        words: ["As a MERN stack developer, I specialize in crafting dynamic and robust web applications that leverage the power of MongoDB, Express.js, React.js, and Node.js. With a deep understanding of both frontend and backend technologies, I excel at architecting scalable, responsive, and feature-rich applications that meet the unique needs of clients and users alike."],
        loop: 1,
        typeSpeed: 150,
        deleteSpeed: 100
    })
    return (
        <>
            <div style={{ backgroundImage: `url(${bg})` }} className="relative h-screen bg-cover bg-center " >
                <div className='py-64  flex justify-around '>
                    <Snowfall />
                    <div className='w-1/3 text-center '>
                        <h1 className='text-slate-400 sm:text-sm  lg:text-3xl shadow-xl m-4 font-black autotype'>Hello ! I am <span className="text-red-300">{text}</span> <Cursor cursorStyle="<" /> </h1>
                        <p className='text-slate-300 font-bold shadow-xl sm:text-sm lg:text-xl'>{para}</p>
                        <button className='bg-blue-200 sm:hidden lg:inline p-4 m-4 w-1/2 rounded-2xl font-bold italic hover:bg-black hover:text-white'>
                            My projects are Listed Below
                        </button>
                    </div>
                    {/* <img src={me}  alt="" /> */}
                    <Slideshow />
                </div>
                <audio src={music} autoPlay loop controls className="absolute  right-0 bottom-2 "></audio>
            </div>
        
        </>
    )
}

export default Header