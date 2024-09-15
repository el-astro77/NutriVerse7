import { BiSolidSend, BiSolidMessageDetail  } from "react-icons/bi";

export default function SubmitPrompt(props) {
    return(
        <div className="max-w-lg shrink-0">
            <form className="flex relative" onSubmit={props.handleSubmit}>
                <div className="form-control w-full">
                    <textarea  
                        placeholder="What's your concern?"
                        className="input input-bordered bg-transparent border-white focus:border-white h-32 pt-[0.60rem] z-10" 
                        required 
                        value={props.prompt}
                        onChange={props.handlePromptInputChange}
                    ></textarea>
                    {props.hasText || <BiSolidMessageDetail className="absolute ml-[11.5rem] mt-4 text-[#9ca3af] z-0"/>}
                </div>
                <div className="form-control absolute right-0 top-0">
                    <button className="btn btn-primary bg-white border-white hover:bg-[#b2b2b2] hover:border-[#b2b2b2]  z-20">
                        <BiSolidSend className="size-4"/>
                    </button>
                </div>
            </form>
        </div>
    )
}