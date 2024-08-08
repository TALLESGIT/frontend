import {
	IconStar,
	IconStarFilled,
	IconStarHalfFilled,
} from "@tabler/icons-react";

export interface AvaliacaoProps {
	nota: number;
	quantidade: number;
}

export default function Avaliacao(props: AvaliacaoProps) {
	const { nota, quantidade } = props;
	const estrelas = Array.from({ length: 5 }, (_, i) => {
		const valor = i + 1;
		if (nota >= valor) {
			return <IconStarFilled key={valor} size={18} />;
		}
		if (nota + 1 > valor) {
			return <IconStarHalfFilled key={valor} size={18} />;
		}
		return <IconStar key={valor} size={18} />;
	});

	return (
		<div className="flex items-center gap-2">
			<div className="flex text-yellow-400 ">{estrelas}</div>
			<span className="text-xl text-zinc-400">({quantidade})</span>
		</div>
	);
}
