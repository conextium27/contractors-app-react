"use client"

import { links } from './data'
import './stylesNavbar.css'
import { usePathname } from "../../../node_modules/next/navigation";
import Link from '../../../node_modules/next/link';

const Navbar = () => {
	const pathName = usePathname()

	return <nav>
		<div className="flex px-[32px] py-[16px]">
			<div className="flex-1">
				<img src="/images/header_button.svg" className='logo' alt='logo' />
			</div>
			<div className="">
				<img src="/images/header_search.svg" className='logo' alt='logo' />
			</div>
		</div>
		<div className="flex flex-1" >
			<ul className="flex gap-[24px] item-center  mx-8" >
				{links.map((link, i) => {
					const { url, text } = link
					return (
						<li
							key={i}
							className='py-[10px] text-[#A3A3A3] text-sm'
							style={{
								color: pathName===url ? '#1B1B18' : '#A3A3A3',
								borderBottom: pathName===url ? 'solid 2px #1B1B18' : '',
							}}
						>
							<Link href={url}>{text}</Link>
						</li>
					)
				})}
			</ul>
		</div>
	</nav>
}

export default Navbar
