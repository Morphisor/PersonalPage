import { faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Social() {
    return (
        <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
            <a className="link" href="https://twitter.com/Morphisor00">
                <FontAwesomeIcon className="h-6 fill-current text-gray-600 hover:text-green-700" icon={faTwitter} />
            </a>
            <a className="link" href="https://github.com/Morphisor">
                <FontAwesomeIcon className="h-6 fill-current text-gray-600 hover:text-green-700" icon={faGithub} />
            </a>
            <a className="link" href="https://www.instagram.com/augusto.gallitri/">
                <FontAwesomeIcon className="h-6 fill-current text-gray-600 hover:text-green-700" icon={faInstagram} />
            </a>
        </div>
    )
}