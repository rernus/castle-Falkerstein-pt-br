Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
		Babele.get().register({
			module: 'castle-falkerstein',
			lang: 'pt-BR',
			dir: 'compendium'
		}); 
	}
});
