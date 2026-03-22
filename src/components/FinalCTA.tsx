const FinalCTA = () => {
	return (
		<section className="py-40 px-6 md:px-12 text-center">
			<div className="max-w-3xl mx-auto">
				{/* Headline */}
				<h2 className="font-headline text-5xl md:text-6xl text-white mb-8 font-bold">
					Start Listening Without Compromise.
				</h2>

				{/* Primary CTA and Subtitle */}
				<div className="flex flex-col items-center gap-4 mb-12">
					<button className="pulse-gradient neon-glow text-on-primary-fixed px-12 py-6 rounded-full text-xl font-bold hover:brightness-110 active:scale-95 transition-all">
						Download Now
					</button>
					<p className="text-on-surface-variant text-sm">Available on GitHub Releases</p>
				</div>

				{/* Social Proof */}
				<div className="flex items-center justify-center gap-8">
					{/* Open Source */}
					<div className="flex items-center gap-2 text-on-surface-variant">
						<span className="material-symbols-outlined text-secondary-fixed-dim">verified</span>
						<span className="font-medium text-white">Open Source</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FinalCTA;