function Items(props){
    return(
        <>
          <div className="mx-auto w-72 my-9 text-center">
            <h1 className="font-bold">{props.name}</h1>
            <p className="text-slate-500 italic">{props.des}</p>
            <a className="underline" href={props.link} target="_blank">{props.link}</a>
        </div>
        </>
    )
}

export default Items;