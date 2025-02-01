import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";


function Header() {

    return (
        <div className="flex flex-col w-screen">

            <Card
                className="w-full flex flex-col justify-center items-center text-center bg-gray-500 text-4xl text-white">
                <CardHeader className="flex flex-col items-center">
                    <CardTitle>Splitsy</CardTitle>
                    <CardDescription className="text-white">Keeping your tabs in order.</CardDescription>
                </CardHeader>
            </Card>

        </div>
    )

}


export default Header