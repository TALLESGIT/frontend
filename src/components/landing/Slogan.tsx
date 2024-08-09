import Image from "next/image";
import Link from "next/link";
import Cabecalho from "../shared/Cabecalho";

export default function Slogan() {
	return (
		<div className="relative h-[500px] sm:h-[700px]">
			<Image
				src="/banners/principal.webp"
				alt="barbearia"
				fill
				className="object-cover"
			/>
			<div className="flex flex-col items-center absolute top-0 left-0 w-full h-full bg-black/65 ">
				<Cabecalho />
				<div className="flex flex-col justify-center items-center flex-1 gap-5">
					<h1 className="flex flex-col items-center gap-2">
						<span className="text-zinc-200 sm:text-3xl md:text-4xl lg:text-5xl font-thin">
							Transformações
						</span>
						<span className="text-5 sm:text-8xl md:text-7xl lg:text-8xl font-black text-gradient">
							Lendárias
						</span>
					</h1>
					<p className="text-zinc-400 text-base sm:text-lg font-extralight">
						🤘 Seu estilo é nosso rock! 🤘
					</p>
					<Link
						href="/agendamento"
						className="
                        bg-gradient-to-r from-green-500 to-green-600 text-white font-serif
                        text-base md:text-lg px-4 py-2 rounded-sm hover:from-green-600 hover:to-green-700
                    "
					>
						Agendar Agora
					</Link>
				</div>
			</div>
		</div>
	);
}
