import { Button } from "./shadcnui/button";
import { CardContent } from "./shadcnui/card";
import { Input } from "./shadcnui/input";

const BasicCalculator = () => {
	return (
		<>
			<CardContent className="grid grid-cols-4 gap-6">
				<Input
					className="col-span-2"
					placeholder="Number 1 "
				/>
				<Input
					className="col-span-2"
					placeholder="Number 2"
				/>

				<Input className="col-span-4" />

				<Button className="cursor-pointer">Add + </Button>
				<Button className="cursor-pointer">Subtract - </Button>
				<Button className="cursor-pointer">multiply X </Button>
				<Button className="cursor-pointer">Divide / </Button>

				<Button
					variant={"destructive"}
					disabled
					className="col-span-4 cursor-pointer">
					Reset
				</Button>
			</CardContent>
		</>
	);
};

export default BasicCalculator;
