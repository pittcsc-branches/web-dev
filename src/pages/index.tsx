import Layout from "../components/Layout";
import SEO from "../components/SEO";
import tw from "twin.macro";

const Home = (): JSX.Element => {
	return (
		<Layout>
			<SEO />
			<main tw="text-white text-center bg-gradient-to-r px-4 from-primary to-blue-700 flex justify-center items-center flex-col space-y-8 w-full h-screen">
				<h1
					css={[
						tw`font-extralight text-3xl md:text-5xl lg:text-7xl`,
					]}
				>
					Pitt CSC Web-Dev Branch{" "}
					<span tw="inline-block transform transition hover:scale-110">
						👩‍💻
					</span>
				</h1>
				<div
					css={[
						tw`bg-secondary-200 w-full max-w-6xl p-8 rounded-2xl text-black`,
					]}
				>
					<div tw="flex flex-col space-y-8 justify-center items-center flex-wrap md:space-x-4 md:space-y-0 md:flex-row md:justify-center">
						<a
							href="https://pittcs.wiki/skills/getting-started-with-x/web-dev/"
							rel="noreferrer noopener"
							target="_blank"
						>
							<div
								className="group"
								tw="w-full md:w-64 xl:w-80 text-center space-y-2"
							>
								<img
									src="https://i.ibb.co/LgnJ94t/cs-wiki.png"
									alt="Pitt CS Wiki Web Dev Getting Started"
									tw="z-10 relative rounded shadow-md"
								/>
								<p tw="md:opacity-0 transform md:pointer-events-none relative z-0 transition md:-translate-y-10 group-hocus:(opacity-100 pointer-events-auto translate-y-0)">
									Pitt CS Wiki Web-Dev Guide
								</p>
							</div>
						</a>
						<a
							href="https://dev.to/"
							rel="noreferrer noopener"
							target="_blank"
						>
							<div
								className="group"
								tw="w-full md:w-64 xl:w-80 text-center space-y-2"
							>
								<img
									src="https://i.ibb.co/WVJJNWF/dev-community.png"
									alt="Dev Community"
									tw="z-10 relative rounded shadow-md"
								/>
								<p tw="md:opacity-0 transform md:pointer-events-none relative z-0 transition md:-translate-y-10 group-hocus:(opacity-100 pointer-events-auto translate-y-0)">
									DEV Community
								</p>
							</div>
						</a>
						<a
							href="https://css-tricks.com/"
							rel="noreferrer noopener"
							target="_blank"
						>
							<div
								className="group"
								tw="w-full md:w-64 xl:w-80 text-center space-y-2"
							>
								<img
									src="https://i.ibb.co/fdF6Q0B/css-tricks.png"
									alt="CSS Tricks"
									tw="z-10 relative rounded shadow-md"
								/>
								<p tw="md:opacity-0 transform md:pointer-events-none relative z-0 transition md:-translate-y-10 group-hocus:(opacity-100 pointer-events-auto translate-y-0)">
									CSS-Tricks
								</p>
							</div>
						</a>
					</div>
				</div>
			</main>
		</Layout>
	);
};
export default Home;
