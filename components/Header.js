import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
	HeartIcon,
	HomeIcon,
	MenuIcon,
	PaperAirplaneIcon,
	PlusCircleIcon,
	SearchIcon,
	UserGroupIcon,
	XIcon,
} from "@heroicons/react/outline";

function Header() {
	const showMenuClass = "";
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div>
			<div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
				<div className="relative hidden lg:inline-grid w-24 cursor-pointer">
					<Image
						src="https://links.papareact.com/ocw"
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<div className="relative lg:hidden w-10 flex-shrink-0 cursor-pointer">
					<Image
						src="https://links.papareact.com/jjm"
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<div className="max-w-xs">
					<div className="mt-1 relative p-3 rounded-m">
						<div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
							<SearchIcon className="w-5 text-gray-400" />
						</div>
						<input
							className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
							type="text"
							placeholder="Search"
						/>
					</div>
				</div>

				<div className="flex items-center justify-end space-x-4">
					<HomeIcon className="navBtn" />
					<PaperAirplaneIcon className="navBtn" />
					<PlusCircleIcon className="navBtn" />
					<UserGroupIcon className="navBtn" />
					<HeartIcon className="navBtn" />
					<img
						className="h-10 w-10 rounded-full cursor-pointer hidden md:inline-grid"
						src="https://media.allure.com/photos/5ebeba16caec100008bd324d/1:1/w_2119,h_2119,c_limit/hayley%20williams%20hair%20january%202010.jpgV"
						alt="profile pic"
					/>
					<MenuIcon
						className={`h-6 md:hidden cursor-pointer ${
							showMenu && "hidden"
						}`}
						onClick={() => setShowMenu(!showMenu)}
					/>
					<XIcon
						className={`h-6 md:hidden cursor-pointer ${
							!showMenu && "hidden"
						}`}
						onClick={() => setShowMenu(!showMenu)}
					/>
				</div>
			</div>

			<div
				className={`fixed right-0 p-5 shadow-2xl bg-gray-50 h-full w-6/12 flex justify-center rounded-md transition-all ease-out duration-700 ${
					showMenu ? "opacity-100" : "opacity-0 invisible"
				}`}
			>
				<div>
					<div className="bg-red-400 w-full">
							<img
								className="h-10 w-10 rounded-full cursor-pointer mt-5 text-center"
								src="https://media.allure.com/photos/5ebeba16caec100008bd324d/1:1/w_2119,h_2119,c_limit/hayley%20williams%20hair%20january%202010.jpgV"
								alt="profile pic"
							/>
							<p>Hailey williams</p>
					</div>
					<div>
						<ul className="space-y-5 mt-5">
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>
								<Link href="/profile">
									<a>Profile</a>
								</Link>
							</li>
							<li>
								<Link href="/profile">
									<a>Messages</a>
								</Link>
							</li>
							<li>
								<Link href="/profile">
									<a>Notifications</a>
								</Link>
							</li>
							<li>
								<Link href="/">
									<a className="text-red-500">Log out</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
