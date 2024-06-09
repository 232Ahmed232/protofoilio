import Items from "../Items/Items";

function Frontend() {
    return (
        <>
            <div className="flex mx-auto w-3/4 my-9 bg-red-100 rounded-lg   text-center justify-around">
                <div className="flex-col">
                    <h1 className="font-bold text-xl my-2 ">Name</h1>
                    <hr className="border-white border-2" />
                    <h1 className="italic my-2 font-medium">Weber</h1>
                    

                </div>
                <div className="flex-col">
                    <h1 className="font-bold text-xl my-2">Description</h1>
                    <hr className="border-white border-2" />
                    <h1 className="italic my-2 font-medium">Downloading Images with Quotes</h1>

                </div>
                <div className="flex-col">
                    <h1 className="font-bold text-xl my-2">Link</h1>
                    <hr className="border-white border-2" />
                    <a href="https://65b7c4361e675b0ed67ef1d4--stunning-longma-293ead.netlify.app/" target="_blank" className="italic underline my-2 font-medium">Weber</a>

                </div>
            </div>

        </>
    )
}

export default Frontend;