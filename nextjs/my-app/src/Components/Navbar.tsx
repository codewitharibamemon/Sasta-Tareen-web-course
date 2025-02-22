import Link from "next/link";


export default function Navbar(){
    return(
        <div className="bg-red-500">
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/about'}>About</Link></li>
                <li><Link href={'/blog'}>Blog</Link></li>
                <li><Link href={'/dashboard'}>Dashboard</Link></li>
            </ul>
        </div>
    )
}