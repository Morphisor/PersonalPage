import getAssetUrl from "./cdn-manager";

export default function Avatar() {
    return (
        <div className="w-full lg:w-3/12">
            <img src={getAssetUrl('/avatar.png')} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
        </div>
    )
}