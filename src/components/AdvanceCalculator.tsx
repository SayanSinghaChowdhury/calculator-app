"use client";

import { useState } from "react";
import { Button } from "./shadcnui/button";
import { CardContent } from "./shadcnui/card";
import { Input } from "./shadcnui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./shadcnui/select";

const AdvanceCalculator = () => {
	const [inputOne, setInputOne] = useState("");

	const [inputTwo, setInputTwo] = useState("");

	const [inputTotal, setInputTotal] = useState("");

	const [selectOporator, setSelectOporator] = useState("");

	{
		/* SELECT  value use on switch case : */
	}

	const calculationManegenent = () => {
		/* TYPE CONVERTING FOR CONVERT STRING TO NUBER : */
		const numOne = parseInt(inputOne);
		const numTwo = parseInt(inputTwo);
		// USE toString() for converting to number to string
		switch (selectOporator) {
			case "add":
				setInputTotal((numOne + numTwo).toString());

				break;
			case "subtract":
				setInputTotal((numOne - numTwo).toString());

				break;
			case "multiply":
				setInputTotal((numOne * numTwo).toString());

				break;
			case "divide":
				setInputTotal((numOne / numTwo).toString());

				break;
		}
		setInputOne("");

		setInputTwo("");

		setSelectOporator("");
	};

	const clear = () => {
		setInputOne("");

		setInputTwo("");

		setSelectOporator("");

		setInputTotal("");
	};

	return (
		<CardContent className="grid grid-cols-3 place-items-center gap-5">
			<Input
				type="number"
				className="col-span-1"
				value={inputOne}
				placeholder="Number 1"
				onChange={({ target }) => setInputOne(target.value)}
			/>
			{/* SELECT PROCESS */}
			<Select
				onValueChange={(target) => setSelectOporator(target)}
				value={selectOporator}>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Operator" />
				</SelectTrigger>

				<SelectContent>
					<SelectItem value="add"> + </SelectItem>
					<SelectItem value="subtract"> - </SelectItem>
					<SelectItem value="multiply"> X </SelectItem>
					<SelectItem value="divide"> / </SelectItem>
				</SelectContent>
			</Select>

			<Input
				type="number"
				className="col-span-1"
				value={inputTwo}
				placeholder="Number 2"
				onChange={({ target }) => setInputTwo(target.value)}
			/>
			<Input
				className="l col-span-2"
				placeholder="Toatal"
				value={inputTotal}
				disabled={inputTotal.length <= 0}
				onChange={({ target }) => setInputTotal(target.value)}
			/>
			<Button
				onClick={calculationManegenent}
				disabled={inputOne === "" || inputTwo === ""}
				className="col-span-1 w-full cursor-pointer">
				Calculate
			</Button>
			<Button
				onClick={clear}
				disabled={inputOne === "" && inputTwo === "" && inputTotal === ""}
				className="col-span-3 w-full cursor-pointer"
				variant={"destructive"}>
				Reset
			</Button>
		</CardContent>
	);
};

export default AdvanceCalculator;
