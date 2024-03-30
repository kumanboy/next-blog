import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Menu} from "lucide-react";
import Link from "next/link";
import React from "react";
import {Separator} from "@/components/ui/separator";
import {navLinks} from "@/constants";
import {cn} from "@/lib/utils";

const Mobile = () => {
	const pathName = usePathname()

	return (
		<Sheet>
			<SheetTrigger asChild className={'flex md:hidden'}>
				<Button size={'icon'} variant={'ghost'}>
					<Menu/>
				</Button>
			</SheetTrigger>
			<SheetContent side={'left'}>
				{/*Logo*/}
				<Link href={"/"}>
					<h1 className={"text-4xl font-creteRound"}>Blog</h1>
				</Link>
				<Separator className={'my-3'}>
					<div className={'flex flex-col space-y-3'}>
						{navLinks.map(nav => (
							<Link
								href={nav.route}
								key={nav.route}
								className={cn("hover:bg-blue-400/20 py-2 px-3 cursor-pointer rounded-sm transition-colors flex items-center gap-2",
									pathName === nav.route && 'text-blue-400'
								)}
							>
								<nav.icon className={'w-5 h-5'}/>
								{nav.name}
							</Link>
						))}
					</div>
				</Separator>
			</SheetContent>
		</Sheet>
	)
}

export default Mobile