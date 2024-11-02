import Link from 'next/link'

function HeaderBanner() {
    return (
        <div className="bg-black text-white text-xs p-1">
            <div className="flex ps-32 gap-3 pt-1">
                <Link href='/regional-settings'>REGIONAL SETTINGS</Link>
                <span>|</span>
                <Link href='/login-register'>LOGIN&REGISTER</Link>
            </div>
        </div>
    )
}

export default HeaderBanner