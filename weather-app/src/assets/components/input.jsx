import { useRef } from "react";
import {AsyncPaginate} from "react-select-async-paginate";

function InputField({onAdd}) {

    const inputElement = useRef();

    const getInput = () => {
        if (inputElement.current.value != "") {
        const inputField = inputElement.current;
        onAdd(inputField.value); 
    }
    }



    return (
        <div className="mt-10">
            <input ref={inputElement} type="text" placeholder="City name" className="pl-2 rounded-lg"/>
            
            <button className="ml-2 text-white" onClick={getInput}>Search</button>
        </div>
    )

}




export default InputField