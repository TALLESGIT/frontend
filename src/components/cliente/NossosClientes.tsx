import clientes from "@/data/constants/clientes";
import { LayoutGrid } from "../Ui/layout-grid";
import TituloSecao from "../shared/TituloSecao";
import ItemCliente from "./ItemCliente";

export default function NossosClientes() {
	const classes = [
		"md:col-span-2",
		"col-span-1",
		"col-Span-1",
		"md:col-span-2",
	];
	const cards = clientes.map((cliente, i) => {
		return {
			id: cliente.id,
			content: (
				<ItemCliente nome={cliente.nome} testemunho={cliente.testemunho} />
			),
			thumbnail: cliente.imagemURL,
			className: classes[i],
		};
	});
	return (
		<div className="flex flex-col gap-y-16">
			<TituloSecao
				tag="Clientes"
				principal="Quem Manda Aqui"
				secundario="Nossos clientes são os chefes! Aqui, eles mandam, desmandam e ainda saem com estilo de rockstar!"
			/>
			<div className="h-[900px] w-full">
				<LayoutGrid cards={cards} />
			</div>
		</div>
	);
}
