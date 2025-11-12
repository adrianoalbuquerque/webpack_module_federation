const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development', // Modo de desenvolvimento
  entry: './src/index.js', // Entrada principal
  output: {
    filename: '[name].js', // Nome dos arquivos gerados
    path: path.resolve(__dirname, './dist'), // Diretório de saída
    // publicPath: 'http://localhost:9003/', // Caminho público para os arquivos
    publicPath: process.env.NODE_ENV === 'production'
      ? 'http://home-webpack.s3-website-sa-east-1.amazonaws.com/' // URL no S3
      : 'http://localhost:9003/', // URL local
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'), // Define onde os arquivos estáticos estão
    },
    port: 9003, // Porta do servidor
    historyApiFallback: true, // Habilita o fallback para aplicações SPA
    hot: true, // Habilita Hot Module Replacement
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'], // Extensões resolvidas automaticamente
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Para arquivos .js ou .jsx
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-react')], // Preset do Babel para React
        },
      },
      {
        test: /\.css$/, // Para arquivos .css
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // Nome do arquivo HTML gerado
      template: './public/index.html', // Arquivo base para o HTML
      title: 'App', // Título da aplicação
    }),
    new ModuleFederationPlugin({
      name: 'HomeApp', // Nome do contêiner
      filename: 'remoteEntry.js',
      exposes: {
        './HomeApp': './src/Home',
      }
    })
  ]
};
