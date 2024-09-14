import FloatingShape from "./FloatingShape";

const GridBackground = ({ children }) => {
	return (
		<div className="w-full text-white relative min-h-screen">
			<div className="absolute pointer-events-none inset-0 bg-gradient-to-br from-[#2E073F] via-[#7A1CAC] to-indigo-600 "></div>
			<FloatingShape
				color="bg-pink-500"
				size="w-64 h-64"
				top="-5%"
				left="10%"
				delay={0}
			/>
			<FloatingShape
				color="bg-black"
				size="w-48 h-48"
				top="60%"
				left="70%"
				delay={2}
			/>
			<FloatingShape
				color="bg-fuchsia-500"
				size="w-32 h-32"
				top="40%"
				left="-5%"
				delay={2}
			/>
			{children}
		</div>
	);
};
export default GridBackground;
