import BasicCalculator from "@/components/BasicCalculator";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "calculator-app",
	description: "Basic Calcularor of Calcularor app",
};

const page = () => {
	return (
		<section className="grid h-[95dvh] place-items-center">
			<Card className="">
				<CardHeader className="">
					<CardTitle className="text-center text-2xl font-semibold">
						Basic Calculator
					</CardTitle>
				</CardHeader>

				<BasicCalculator />
			</Card>
		</section>
	);
};

export default page;
