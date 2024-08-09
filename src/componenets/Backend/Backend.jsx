import Items from "../Items/Items";


function Backend(){
    return(
        <>
 <>
            <div className="flex mx-auto w-3/4 my-9 bg-red-100 rounded-lg  items-center text-center justify-around">
                <div className="flex-col">
                    <h1 className="font-bold text-xl my-2 ">Name</h1>
                    <hr className="border-white border-2" />
                    <h1 className="italic my-2 font-medium">Feeder</h1>
                    

                </div>
                <div className="flex-col">
                    <h1 className="font-bold text-xl my-2">Description</h1>
                    <hr className="border-white border-2" />
                    <h1 className="italic my-2 font-medium">For Collecting foods from resturant for needy people</h1>

                </div>
                <div className="flex-col">
                    <h1 className="font-bold text-xl my-2">Link</h1>
                    <hr className="border-white border-2" />
                    <a href="https://feederback.vercel.app/login" target="_blank" className="italic underline  font-medium">Feeder</a>

                </div>
            </div>

        </>        </>
    )
}

export default Backend;