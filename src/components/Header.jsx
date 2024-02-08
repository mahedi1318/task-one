
import Logo from "../assets/lws-logo-en.svg"

export default function Header() {
  return (
    <>
    <nav class="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
		<div class="container mx-auto flex items-center justify-between gap-x-6">			
			<a href="/">
				<img class="h-[45px]" src={Logo} alt="Lws" />
			</a>			
		</div>
	</nav>    
    </>
  )
}
