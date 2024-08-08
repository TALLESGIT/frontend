import profissionais from "@/data/constants/profissionais";
import TituloSecao from "../shared/TituloSecao";
import ItemProfissional from "./itemProfissional";

export default function NossosProfissionais() {
	return (
		<div className="flex flex-col gap-y-16">
			<TituloSecao
				tag="Time"
				principal="Nossos Brutos"
				secundario="Cabelo afiado, barba de lenhador e mãos de motoqueiro, tudo ao som de rock pesado!"
			/>
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
				{profissionais.map((profissional) => (
					<ItemProfissional key={profissional.id} profissional={profissional} />
				))}
			</div>
		</div>
	);
}
