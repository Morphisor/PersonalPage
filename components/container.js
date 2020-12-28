import Profile from './profile';
import Avatar from './avatar';
import { useThemeContext } from './theme-provider';

export default function Container() {
    const [ currentTheme, setTheme ] = useThemeContext();

    const onThemeChange = e => {
        const nextTheme = currentTheme.name == 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
    }

    return(
        <div className={'font-sans antialiased leading-normal tracking-wider bg-cover ' + currentTheme.textClass} style={{ backgroundImage: "url('"+ process.env.basePath + "/background.jpg')" }}>
            <div className="max-w-4xl flex items-center h-screen flex-wrap mx-auto lg:my-0">

                <Profile />
                <Avatar />

                <div className="absolute top-0 right-0 h-12 w-18 p-4">
                    <button onClick={onThemeChange} className="focus:outline-none">{currentTheme.icon}</button>
                </div>

            </div>
        </div>
    )
}