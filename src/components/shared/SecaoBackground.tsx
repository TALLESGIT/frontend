import Image from "next/image";

export interface SecaoBackgoundProps {
	children: React.ReactNode;
	imagem: string;
}

export default function SecaoBackgound(props: SecaoBackgoundProps) {
	return (
		<div className="relative">
			<Image
				src={props.imagem}
				alt="Imagem de Fundo"
				fill
				className="object-cover -z-50"
			/>
			<div className="bg-black/65 sm:bg-gradient-to-r from-black/50 via-black/55 to-black/80">
				<div className="container py-10">{props.children}</div>
			</div>
		</div>
	);
}
