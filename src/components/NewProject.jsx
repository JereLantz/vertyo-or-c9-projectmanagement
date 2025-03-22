import { useRef } from "react";

import Input from "./Input";

export default function NewProject({onAdd}){
    const title = useRef()
    const desc = useRef()
    const dueDate = useRef()

    function handleSave(){
        const enteredTitle = title.current.value
        const enteredDesc = desc.current.value
        const enteredDueData = dueDate.current.value

        // Validation

        onAdd({
            title: enteredTitle,
            description: enteredDesc,
            dueDate: enteredDueData
        })
    }

    return(
        <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
        <li>
        <button className="text-stone-800 hover:text-stone-950" >
        Cancel
        </button>
        </li>

        <li>
        <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
        onClick={handleSave}>
        Save
        </button>
        </li>
        </menu>

        <div>
        <Input ref={title} label="Title"/>
        <Input ref={desc} label="Description" textArea />
        <Input type="date" ref={dueDate} label="Due Date"/>
        </div>

        </div>
    )
}
