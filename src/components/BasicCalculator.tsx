"use client";

import { useState } from "react";
import { Button } from "./shadcnui/button";
import { CardContent } from "./shadcnui/card";
import { Input } from "./shadcnui/input";

const BasicCalculator = () => {
	const [inputOne, setInputOne] = useState("");
	const [inputTwo, setInputTwo] = useState("");
	const [inputTotal, setInputTotal] = useState("");

	const applyPlus = () => {};

	const applyMinus = () => {};

	const applyMultiply = () => {};

	const applyDivide = () => {};

	const applyReset = () => {};

	return (
		<>
			<CardContent className="grid grid-cols-4 gap-6">
				<Input
					className="col-span-2"
					placeholder="Number 1 "
					onChange={({ target }) => setInputOne(target.value)}
				/>
				<Input
					className="col-span-2"
					placeholder="Number 2"
					onChange={({ target }) => setInputTwo(target.value)}
				/>

				<Input
					className="col-span-4"
					onChange={({ target }) => setInputTotal(target.value)}
				/>

				<Button
					className="cursor-pointer"
					onClick={applyPlus}>
					Add +
				</Button>
				<Button
					className="cursor-pointer"
					onClick={applyMinus}>
					Subtract -
				</Button>
				<Button
					className="cursor-pointer"
					onClick={applyMultiply}>
					multiply X
				</Button>
				<Button
					className="cursor-pointer"
					onClick={applyDivide}>
					Divide /
				</Button>

				<Button
					variant={"destructive"}
					onClick={applyReset}
					disabled
					className="col-span-4 cursor-pointer">
					Reset
				</Button>
			</CardContent>
		</>
	);
};

export default BasicCalculator;
