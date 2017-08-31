module.exports = (function() {
    const build = function(view, model) {
        return view.split(/\{\{|\}\}/).map((x, index) => index % 2 === 1 && model[x] ? model[x] : x).join('');
    }

    const parseModel = function(viewModel) {
        let result = [];
        for (let key in viewModel) {
            result[key] = viewModel[key].values.map(x =>
                '' + viewModel[key].before + x +
                (viewModel[key].between ? viewModel[key].between + x : '') +
                viewModel[key].after).join('');
        }
        return result;
    }

    return {
        build: function(view, model) {
            return build(view, parseModel(model));
        }
    }
})();