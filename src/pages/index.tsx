import Layout from "../components/Layout";
import SEO from "../components/SEO";
import tw from "twin.macro";
("twin.macro");
import { motion } from "framer-motion";
import CSWiki from "../images/cs_wiki.png";
import Dev from "../images/dev_community.png";
import CSSTricks from "../images/css_tricks.png";

const Home = (): JSX.Element => {
	return (
		<Layout>
			<SEO />
			<main tw="text-white text-center bg-gradient-to-r px-4 from-primary to-blue-700 flex justify-center items-center flex-col space-y-8 w-full h-screen">
				<motion.h1
					initial={{ y: 50, opacity: 0 }}
					animate={{
						y: 0,
						opacity: 1,
						transition: {
							duration: 0.8,
							delay: 0.2,
							type: "tween",
							ease: "circOut",
						},
					}}
				>
					Pitt CSC Web-Dev Branch{" "}
					<span tw="inline-block transform transition hover:scale-110">
						👩‍💻
					</span>
				</motion.h1>
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{
						y: 0,
						opacity: 1,
						transition: {
							duration: 0.8,
							delay: 0.4,
							type: "tween",
							ease: "circOut",
						},
					}}
				>
					<div tw="flex flex-col space-y-8 justify-center items-center md:space-y-0 md:flex-row md:justify-between">
						<a
							href="https://dev.to/"
							rel="noreferrer noopener"
							target="_blank"
						>
							<div
								className="group"
								tw="w-full md:w-80 text-center space-y-2"
							>
								<img
									src={CSWiki}
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
								tw="w-full md:w-80 text-center space-y-2"
							>
								<img
									src={Dev}
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
								tw="w-full md:w-80 text-center space-y-2"
							>
								<img
									src={CSSTricks}
									alt="CSS Tricks"
									tw="z-10 relative rounded shadow-md"
								/>
								<p tw="md:opacity-0 transform md:pointer-events-none relative z-0 transition md:-translate-y-10 group-hocus:(opacity-100 pointer-events-auto translate-y-0)">
									CSS-Tricks
								</p>
							</div>
						</a>
					</div>
				</motion.div>
			</main>
		</Layout>
	);
};
export default Home;
