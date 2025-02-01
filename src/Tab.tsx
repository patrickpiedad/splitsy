import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";


function Tab() {

    const tabName = "Toskana";

    const expenses = [
        {
            id: 1,
            name: "Car Rental",
            price: 400.00
        },
    ]

    return (
        <main className="flex flex-col w-screen">

            <Card
                className="w-screen flex flex-col justify-center items-center text-center bg-gray-500">
                <CardHeader className="flex flex-col items-center">
                    <CardTitle className="text-4xl text-white">{tabName}</CardTitle>
                </CardHeader>

                <CardContent>

                    <Table className="w-[400px] text-white text-xl">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="!text-white text-left">Expense</TableHead>
                                <TableHead className="!text-white text-right">Price</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {expenses.map((expense) => (
                                <TableRow key={expense.id}>
                                    <TableCell className="text-left">{expense.name}</TableCell>
                                    <TableCell className="text-right">{expense.price}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>


                </CardContent>

            </Card>

        </main>
    )

}


export default Tab