import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function CV() {
    return (
        <>
            {/* <div className="flex hover:text-5xl hover:w-1/2 bg-white justify-around w-96 mx-auto my-9  items-center text-2xl">
        <i className="fa-brands fa-whatsapp"></i>

         <h1 >0319-8323781</h1>
         </div>
        <div className="flex hover:text-5xl hover:w-1/2 bg-white justify-around w-96 mx-auto my-9  items-center text-2xl">
        <i class="fa-solid fa-envelope"></i>
         <h1 >x99aliahmed@gmail.com</h1>
         </div> */}

            <div className="flex mx-auto items-center w-3/4 my-9 bg-red-100 rounded-lg  text-center justify-around">
                <div className="flex-col">
                    <h1 className="font-bold text-xl my-2 ">Media</h1>
                    <hr className="border-white border-2" />
                    <h1 className="italic my-2 text-xl font-medium"><i className="fa-brands fa-whatsapp"></i></h1>
                    <h1 className="italic my-2 text-xl font-medium"><i class="fa-solid fa-envelope"></i></h1>


                </div>
                <div className="flex-col">
                    <h1 className="font-bold text-xl my-2">Info</h1>
                    <hr className="border-white border-2" />
                    <h1 className="italic my-2 font-medium">03198323781</h1>
                    <h1 className="italic my-2 font-medium">x99aliahmed@gmail.com</h1>

                </div>

            </div>

        </>

    )
}

export default CV;