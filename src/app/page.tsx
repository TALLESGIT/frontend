import NossosProfissionais from "@/components/profissional/NossosProfissionais";
import NossosServicos from "@/components/servico/NossosServicos";
import SecaoBackgound from "@/components/shared/SecaoBackground";

export default function Landing() {
	return (
		<div className="flex flex-col gap-10">
			<h1 className="text-6xl text-slate-50">Landing Page</h1>
			<SecaoBackgound imagem="/banners/servicos.webp">
				<NossosServicos />
			</SecaoBackgound>
			<SecaoBackgound imagem="/banners/profissionais.webp">
				<NossosProfissionais />
			</SecaoBackgound>
		</div>
	);
}
