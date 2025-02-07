Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
		Babele.get().register({
			module: 'castle-Falkerstein-pt-br',
			lang: 'pt-BR',
			dir: 'compendium'
		}); 
	}
});
