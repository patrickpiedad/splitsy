// import {Button} from "@/components/ui/button.tsx";
// import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
// import OpenTab from "@/OpenTab.tsx";
//
//
// function AllTabs() {
//
//     function handleOpenATabClick () {
//         <OpenTab />
//     }
//
//     return (
//         <main className="flex flex-col w-screen">
//
//             <Card
//                 className="w-full flex flex-col justify-center items-center text-center bg-gray-500 text-4xl text-white">
//                 <CardHeader className="flex flex-col items-center">
//                     <CardTitle>Tabs</CardTitle>
//                     <CardDescription className="text-white">Here are your open tabs.</CardDescription>
//                 </CardHeader>
//
//                 <CardContent>
//                     <Button onClick={handleOpenATabClick}>Open a Tab</Button>
//
//                     {/*insert individual tabs component here*/}
//                 </CardContent>
//
//             </Card>
//
//         </main>
//     )
//
// }
//
//
// export default AllTabs

import { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import OpenTab from "@/OpenTab.tsx";

function AllTabs() {
    const [tabs, setTabs] = useState<number[]>([]);

    function handleOpenATabClick() {
        setTabs([...tabs, tabs.length + 1]); // Add a new tab ID
    }

    return (
        <main className="flex flex-col w-screen">
            <Card className="w-full flex flex-col justify-center items-center text-center bg-gray-500 text-4xl text-white">
                <CardHeader className="flex flex-col items-center">
                    <CardTitle>Tabs</CardTitle>
                    <CardDescription className="text-white">Here are your open tabs.</CardDescription>
                </CardHeader>

                <CardContent>
                    <Button onClick={handleOpenATabClick}>Open a Tab</Button>

                    {/* Render individual OpenTab components dynamically */}
                    <div className="mt-4">
                        {tabs.map((tab) => (
                            <OpenTab key={tab} />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </main>
    );
}

export default AllTabs;
