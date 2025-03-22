export default function Input({ref, textArea,label, ...props}){
    const inputStyles = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
    return(
        <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
        {textArea ?(
            <textarea ref={ref} className={inputStyles} {...props}/>
        ):(<input ref={ref} className={inputStyles} {...props}/>)}
        </p>
    )
}
