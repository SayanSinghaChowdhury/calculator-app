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

	const [selectOporator, setselectOporator] = useState("");

	const calculationManegenent = () => {
		const numOne = parseInt(inputOne);
		const numTwo = parseInt(inputTwo);

		switch (selectOporator) {
			case "Add":
				setInputTotal((numOne + numTwo).toString());
				setInputOne("");

				setInputTwo("");

				setselectOporator("");
				break;
			case "Subtract":
				setInputTotal((numOne - numTwo).toString());
				setInputOne("");

				setInputTwo("");

				setselectOporator("");
				break;
			case "multiply":
				setInputTotal((numOne * numTwo).toString());
				setInputOne("");

				setInputTwo("");

				setselectOporator("");
				break;
			case "Divide":
				setInputTotal((numOne / numTwo).toString());
				setInputOne("");

				setInputTwo("");

				setselectOporator("");
				break;

			default:
				break;
		}
	};

	const clear = () => {
		setInputOne("");

		setInputTwo("");

		setselectOporator("");

		setInputTotal("");
	};

	return (
		<>
			{/* ADVANCE UI  */}
			<CardContent className="grid grid-cols-3 place-items-center gap-4">
				<Input
					type="number"
					className="col-span-1"
					value={inputOne}
					placeholder="Number 1"
					onChange={({ target }) => setInputOne(target.value)}
				/>
				{/* SELECT PROCESS */}
				<Select
					onValueChange={(target) => setselectOporator(target)}
					value={selectOporator}>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Operator" />
					</SelectTrigger>

					<SelectContent onClick={calculationManegenent}>
						<SelectItem value="Add">Add + </SelectItem>
						<SelectItem value="Subtract">Subtract - </SelectItem>
						<SelectItem value="multiply">multiply X </SelectItem>
						<SelectItem value="Divide">Divide / </SelectItem>
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
					className="col-span-1 w-full cursor-pointer">
					Calculate
				</Button>
				<Button
					onClick={clear}
					disabled={inputTotal.length <= 0}
					className="col-span-3 w-full cursor-pointer"
					variant={"destructive"}>
					Reset
				</Button>
			</CardContent>
		</>
	);
};

export default AdvanceCalculator;
