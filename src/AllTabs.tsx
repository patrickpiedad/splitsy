import {Button} from "@/components/ui/button.tsx";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";


function AllTabs() {

    return (
        <main className="flex flex-col w-screen">

            <Card
                className="w-full flex flex-col justify-center items-center text-center bg-gray-500 text-4xl text-white">
                <CardHeader className="flex flex-col items-center">
                    <CardTitle>Tabs</CardTitle>
                    <CardDescription className="text-white">Here are your open tabs.</CardDescription>
                </CardHeader>

                <CardContent>
                    <Button>Open a Tab</Button>

                    {/*insert individual tabs component here*/}
                </CardContent>

            </Card>

        </main>
    )

}


export default AllTabs