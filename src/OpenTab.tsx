import {Card, CardDescription, CardTitle, CardHeader, CardFooter, CardContent} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"

function OpenTab() {

    return (
        <main className="flex justify-center items-center">

            <Card className="flex flex-col w-[500px] justify-center items-center text-center">
                <CardHeader>
                    <CardTitle>Open a Tab</CardTitle>
                    <CardDescription>Open a tab to track your expenses.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="tabName">Tab Name</Label>
                                <Input id="tabName" placeholder="Drinks at Puzzles"/>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="Category">Category</Label>
                                <Select>
                                    <SelectTrigger id="Category">
                                        <SelectValue placeholder="Select"/>
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="Home">Home</SelectItem>
                                        <SelectItem value="Trip">Trip</SelectItem>
                                        <SelectItem value="couple">Couple</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Confirm</Button>
                </CardFooter>
            </Card>

        </main>

    )
}

export default OpenTab