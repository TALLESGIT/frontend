import NossosProfissionais from "@/components/profissional/NossosProfissionais";
import NossosServicos from "@/components/servico/NossosServicos";

export default function Landing() {
	return (
		<div className="flex flex-col gap-10 container">
			<h1 className="text-6xl text-slate-50">Landing Page</h1>
			<NossosServicos />
			<NossosProfissionais />
		</div>
	);
}
