import { BiSolidSend, BiLinkAlt  } from "react-icons/bi";

export default function RetrieveLink(props) {
    return(
        <div className="max-w-lg shrink-0">
            <form className="flex relative" onSubmit={props.handleSubmit}>
                <div className="form-control w-full">
                    <input 
                        type="url" 
                        placeholder="Enter a link"
                        className="input input-bordered bg-transparent border-white focus:border-white rounded-full z-10" 
                        required 
                        value={props.link}
                        onChange={props.handleLinkInputChange}
                    />
                    {props.hasText || <BiLinkAlt className="absolute ml-[6.5rem] mt-4 text-[#9ca3af] z-0"/>}
                </div>
                <div className="form-control absolute right-0">
                    <button className="btn btn-primary bg-white border-white hover:bg-[#b2b2b2] hover:border-[#b2b2b2] rounded-full z-20">
                        <BiSolidSend className="size-4"/>
                    </button>
                </div>
            </form>
        </div>
    );
}