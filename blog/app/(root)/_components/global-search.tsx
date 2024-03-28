import React from 'react'
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger} from "@/components/ui/drawer";

function GlobalSearch() {
	return (
        <Drawer>
            <DrawerTrigger>Open</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>

    )
}

export default GlobalSearch