import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function SocialButtons() {
    return ( 
        <div className="flex">
            <Link className="text-4xl hover:text-zinc-400 duration-[0s]" href="https://linkedin.com/in/jatkindev">
                <FontAwesomeIcon className="duration-[0s] text-white" icon={faLinkedin}></FontAwesomeIcon>
            </Link>
        </div>
     );
}

export default SocialButtons;