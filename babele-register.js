Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
		Babele.get().register({
			module: 'castle-Falkerstein',
			lang: 'pt-BR',
			dir: 'compendium'
		}); 
	}
});
