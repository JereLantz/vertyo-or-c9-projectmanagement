import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({onAdd, onCancel}){
    const modal = useRef()

    const title = useRef()
    const desc = useRef()
    const dueDate = useRef()

    function handleSave(){
        const enteredTitle = title.current.value
        const enteredDesc = desc.current.value
        const enteredDueData = dueDate.current.value

        if(enteredTitle.trim() === "" || enteredDesc.trim() ===""||enteredDueData.trim() ===""){
            modal.current.open()
            return
        }

        onAdd({
            title: enteredTitle,
            description: enteredDesc,
            dueDate: enteredDueData
        })
    }

    return(
        <>
        <Modal ref={modal} buttonText="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">Looks like you forgot to enter a value.</p>
        <p className="text-stone-600 mb-4">Please make sure you provide valid value for every input field.</p>
        </Modal>

        <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
        <li>
        <button onClick={onCancel} className="text-stone-800 hover:text-stone-950" >
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
        </>
    )
}
