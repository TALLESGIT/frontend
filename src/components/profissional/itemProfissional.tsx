import type Profissional from "@/core/profissional/Profissionla";
import {
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandX,
	IconBrandYoutube,
} from "@tabler/icons-react";
import Image from "next/image";
import Avaliacao from "../shared/Avaliacao";

export interface ItemProfissional {
	profissional: Profissional;
}

export default function ItemProfissional(props: ItemProfissional) {
	const { profissional } = props;
	return (
		<div className="flex flex-col rounded-xl bg-zinc-800 overflow-hidden">
			<div className="relative h-72 w-full">
				<Image
					src={profissional.imagemURL}
					fill
					alt={profissional.nome}
					className="object-cover object-top"
				/>
			</div>

			<div className="flex flex-col p-4 gap-5">
				<span className="text-2xl font-black text-slate-50">
					{profissional.nome}
				</span>
				<span className="text-sm text-zinc-400">{profissional.descricao}</span>

				<Avaliacao
					nota={profissional.avaliacao}
					quantidade={profissional.quantidadedeAvaliacoes}
				/>

				<div className="flex gap-3 text-zinc-300 ">
					<IconBrandYoutube stroke={1} />
					<IconBrandInstagram stroke={1} />
					<IconBrandX stroke={1} />
					<IconBrandLinkedin stroke={1} />
				</div>
			</div>
		</div>
	);
}
