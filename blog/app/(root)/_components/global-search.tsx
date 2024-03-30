import React from 'react'
import {Drawer, DrawerContent, DrawerTrigger} from "@/components/ui/drawer";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {popularCategories, popularTags} from "@/constants";
import {Badge} from "@/components/ui/badge";

function GlobalSearch() {
	return (
		<Drawer>
			<DrawerTrigger>
				{''}
				<div
					className={"gap-1 hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors flex items-center"}>
					<span className={"hidden md:flex"}>Search</span>
					<Search/>
				</div>
			</DrawerTrigger>
			<DrawerContent>
				<div className={'container max-w-6xl mx-auto py-12'}>
					<Input className={'bg-secondary'} placeholder={'Type to Search ...'}/>

					{/*    Category*/}
					<div className={'flex flex-col space-y-2 mt-4'}>
						<p className={'font-creteRound text-2xl'}>See posts by categories</p>
						<div className={'flex flex-wrap gap-2'}>
							{popularCategories.map(item => (
								<Badge key={item.slug}>{item.name}</Badge>
							))}
						</div>
					</div>
					{/*	Tags*/}
					<div className={'flex flex-col space-y-2 mt-4'}>
						<p className={'font-creteRound text-2xl'}>See posts by tags</p>
						<div className={'flex flex-wrap gap-2'}>
							{popularTags.map(item => (
								<Badge key={item.slug}>{item.name}</Badge>
							))}
						</div>
					</div>
				</div>
			</DrawerContent>
		</Drawer>

	)
}

export default GlobalSearch