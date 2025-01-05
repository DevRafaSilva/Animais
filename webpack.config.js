const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production', // Modo produção ativa a minificação automaticamente
  entry: './code/script/script.js', // Arquivo de entrada
  output: {
    filename: 'bundle.min.js', // Nome do arquivo minificado
    path: __dirname + '/dist', // Pasta de saída
  },
  optimization: {
    minimize: true, // Ativa a minificação
    minimizer: [new TerserPlugin()], // Usa Terser para minificar
  },
};
