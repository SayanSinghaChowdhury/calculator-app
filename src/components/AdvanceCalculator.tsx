import { SelectGroup } from "@radix-ui/react-select";
import { Button } from "./shadcnui/button";
import { CardContent } from "./shadcnui/card";
import { Input } from "./shadcnui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "./shadcnui/select";

const AdvanceCalculator = () => {
	return (
		<>
			{/* ADVANCE UI  */}
			<CardContent className="grid grid-cols-3 place-items-center gap-4">
				<Input
					className="col-span-1"
					placeholder="Number 1"
				/>
				{/* SELECT PROCESS */}
				<Select>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Operator" />
					</SelectTrigger>

					<SelectContent>
						<SelectGroup>
							<SelectLabel>Operators</SelectLabel>
							<SelectItem value="Add + ">Add + </SelectItem>
							<SelectItem value="Subtract - ">Subtract - </SelectItem>
							<SelectItem value="multiply X  ">multiply X </SelectItem>
							<SelectItem value="Divide / ">Divide / </SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
				<Input
					className="col-span-1"
					placeholder="Number 2"
				/>
				<Input
					className="l col-span-2"
					placeholder="Toatal"
				/>
				<Button className="col-span-1 w-full cursor-pointer">Calculate</Button>
				<Button
					className="col-span-2 w-full cursor-pointer"
					disabled
					variant={"destructive"}>
					Reset
				</Button>
			</CardContent>
		</>
	);
};

export default AdvanceCalculator;
