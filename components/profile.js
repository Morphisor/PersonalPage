import Social from './social';
import { useThemeContext } from './theme-provider';
import { faBriefcase, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getAssetUrl from './cdn-manager';

export default function Profile() {
    const [ currentTheme ] = useThemeContext();

    return (
        <div className={'w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl opacity-75 mx-6 lg:mx-0 ' + currentTheme.backgroundClass}>
            <div className="p-4 md:p-12 text-center lg:text-left">
                <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style={{ backgroundImage: "url(" + getAssetUrl('/avatar.png') + ")" }}></div>

                <h1 className="text-3xl font-bold pt-8 lg:pt-0">Augusto Gallitri</h1>
                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                    <FontAwesomeIcon className="h-4 fill-current text-green-700 pr-4" icon={faBriefcase} />
                    Developer @doIT
                </p>
                <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                    <FontAwesomeIcon className="h-4 fill-current text-green-700 pr-4" icon={faGlobe} />
                    Castelraimondo (MC) Italy
                </p>
                <p className="pt-8 text-sm">Life's simple, you make choices and you don't look back. <em>(Han)</em></p>

                <Social />

            </div>

        </div>
    )
}