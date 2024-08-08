import servicos from "@/data/constants/servicos";
import TituloSecao from "../shared/TituloSecao";
import ItemServico from "./ItemServico";

export default function NossosServicos() {
	return (
		<div className="flex flex-col gap-y-16">
			<TituloSecao
				tag="Serviços"
				principal="Do Classico ao Rock"
				secundario="Só os mais brabos estão aqui! Temos o orgulho de ter o time mais qualificado do Brasil!"
			/>
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
				{servicos.map((servico) => (
					<ItemServico key={servico.id} servico={servico} />
				))}
			</div>
		</div>
	);
}
