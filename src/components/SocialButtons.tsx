import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function SocialButtons() {
    return ( 
        <div className="flex gap-2 items-center">
            <Link target="_blank"  title="LinkedIn" className="text-4xl hover:text-zinc-700 !duration-[0s]" href="https://linkedin.com/in/jatkindev">
                <FontAwesomeIcon className="!duration-[0s] " icon={faLinkedin}></FontAwesomeIcon>
            </Link>
            <Link title="E-mail" className="text-4xl hover:text-zinc-700 !duration-[0s]" href="mailto:jatkindev@gmail.com">
                <FontAwesomeIcon className="!duration-[0s] " icon={faEnvelope}></FontAwesomeIcon>
            </Link>
        </div>
     );
}

export default SocialButtons;