module.exports = (function() {
    const build = function(view, model) {
        return view.split(/\{\{|\}\}/)
            .map((x, index) => index % 2 === 1 && model[x] ? model[x] : x)
            .join('');
    }

    const parseModel = function(viewModel) {
        let result = [];
        for (let key in viewModel) {
            result[key] = viewModel[key].values
                .map(x => '' +
                    (viewModel[key].before ? viewModel[key].before : '') +
                    x +
                    (viewModel[key].between ? viewModel[key].between.map(y => y + x).join('') : '') +
                    (viewModel[key].after ? viewModel[key].after : ''))
                .join('\n')
                .trim();
        }
        return result;
    }

    const parseContent = function(viewModel) {
        return viewModel['page content'].values.map(x =>
                '' +
                (viewModel['page content'].before ? viewModel['page content'].before : '') +
                x +
                (viewModel['page content'].between ? viewModel['page content'].between.map(y => y + x).join('') : '') +
                (viewModel['page content'].after ? viewModel['page content'].after : ''))
            .join('\n').trim();
    }

    return {
        build: function(view, model) {
            return build(view, parseModel(model));
        },
        parseContent: parseContent
    }

})();