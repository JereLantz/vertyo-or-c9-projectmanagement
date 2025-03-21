export default function Input({textArea,label, ...props}){
    return(
        <p>
        <label>{label}</label>
        {textArea ? <textArea {...props}/> : <input {...props}/>}
        </p>
    )
}
