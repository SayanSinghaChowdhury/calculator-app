import AdvanceCalculator from "@/components/AdvanceCalculator";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Advance-app",
	description: "Basic Calcularor of Calcularor app",
};

const page = () => {
	return (
		<section className="grid h-[95dvh] place-items-center">
			<Card>
				<CardHeader className="text-center text-2xl font-semibold">
					<CardTitle>Advance Calculator</CardTitle>
				</CardHeader>
				<AdvanceCalculator />
			</Card>
		</section>
	);
};

export default page;
