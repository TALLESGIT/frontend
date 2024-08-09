import Link from "next/link";
import Logo from "./Logo";

export default function Cabecalho() {
	return (
		<header className="flex items-center bg-black/70 self-stretch">
			<nav className=" flex items-center justify-between container">
				<Logo />
				<div>
					<Link className="text-white" href="/entrar">Entrar</Link>
				</div>
			</nav>
		</header>
	);
}
