import NossosClientes from "@/components/cliente/NossosClientes";
import Slogan from "@/components/landing/Slogan";
import NossosProfissionais from "@/components/profissional/NossosProfissionais";
import NossosServicos from "@/components/servico/NossosServicos";
import Rodape from "@/components/shared/Rodape";
import SecaoBackgound from "@/components/shared/SecaoBackground";

export default function Landing() {
	return (
		<div className="flex flex-col gap-10">
			<Slogan />
			<SecaoBackgound imagem="/banners/servicos.webp">
				<NossosServicos />
			</SecaoBackgound>
			<SecaoBackgound imagem="/banners/profissionais.webp">
				<NossosProfissionais />
			</SecaoBackgound>
			<SecaoBackgound imagem="/banners/clientes.webp">
				<NossosClientes />
			</SecaoBackgound>
			<Rodape />
		</div>
	);
}
