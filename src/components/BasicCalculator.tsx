"use client";

import { useState } from "react";
import { Button } from "./shadcnui/button";
import { CardContent } from "./shadcnui/card";
import { Input } from "./shadcnui/input";

const BasicCalculator = () => {
	const [inputOne, setInputOne] = useState("");
	const [inputTwo, setInputTwo] = useState("");
	const [inputTotal, setInputTotal] = useState("");

	const applyPlus = () => {
		const numOne = parseInt(inputOne);
		const numTwo = parseInt(inputTwo);
		const add = numOne + numTwo;

		setInputTotal(add.toString());
		setInputOne("");
		setInputTwo("");
	};

	const applyMinus = () => {
		const numOne = parseInt(inputOne);
		const numTwo = parseInt(inputTwo);

		const minus = numOne - numTwo;

		setInputTotal(minus.toString());
		setInputOne("");
		setInputTwo("");
	};

	const applyMultiply = () => {
		const numOne = parseInt(inputOne);
		const numTwo = parseInt(inputTwo);
		const multiply = numOne * numTwo;

		setInputTotal(multiply.toString());
		setInputOne("");
		setInputTwo("");
	};

	const applyDivide = () => {
		const numOne = parseInt(inputOne);
		const numTwo = parseInt(inputTwo);

		const divide = numOne / numTwo;

		setInputTotal(divide.toString());

		setInputOne("");
		setInputTwo("");
	};

	const applyReset = () => {
		setInputOne("");
		setInputTwo("");
		setInputTotal("");
	};

	return (
		<>
			{/* connect with tags */}

			<CardContent className="grid grid-cols-4 gap-6">
				<Input
					type="number"
					className="col-span-2"
					value={inputOne}
					placeholder="Number 1 "
					onChange={({ target }) => setInputOne(target.value)}
				/>

				<Input
					type="number"
					className="col-span-2"
					value={inputTwo}
					placeholder="Number 2"
					onChange={({ target }) => setInputTwo(target.value)}
				/>

				<Input
					className="col-span-4"
					value={inputTotal}
					onChange={({ target }) => setInputTotal(target.value)}
					disabled={inputTotal.length <= 0}
				/>

				<Button
					disabled={inputOne === "" || inputTwo === ""}
					className="cursor-pointer"
					onClick={applyPlus}>
					Add +
				</Button>

				<Button
					disabled={inputOne === "" || inputTwo === ""}
					className="cursor-pointer"
					onClick={applyMinus}>
					Subtract -
				</Button>

				<Button
					disabled={inputOne === "" || inputTwo === ""}
					className="cursor-pointer"
					onClick={applyMultiply}>
					Multiply X
				</Button>

				<Button
					disabled={inputOne === "" || inputTwo === ""}
					className="cursor-pointer"
					onClick={applyDivide}>
					Divide /
				</Button>

				<Button
					variant={"destructive"}
					onClick={applyReset}
					disabled={inputTotal.length <= 0}
					className="col-span-4 cursor-pointer">
					Reset
				</Button>
			</CardContent>
		</>
	);
};

export default BasicCalculator;
