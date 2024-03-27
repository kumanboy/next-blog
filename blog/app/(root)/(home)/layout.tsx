import {ChildProps} from "@/types";
import Navbar from "@/app/(root)/_components/navbar";
import Footer from "@/app/(root)/_components/Footer";

function Layout({children}: ChildProps) {
	return (
		<main>
			<Navbar/>
			<div className={'container'}>{children}</div>
			<Footer/>
		</main>)
}

export default Layout