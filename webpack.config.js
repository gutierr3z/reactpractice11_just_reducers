const path = require('path');

module.exports = {
 context: path.join(__dirname, 'src'),
 entry: [
   './app.js',
 ],
 //  watch: true,
 plugins: [
  // new webpack.DefinePlugin({
  //   'process.env': {
  //     'NODE_ENV': JSON.stringify('production')
  //   }
  // }),
  // // new webpack.optimize.DedupePlugin(), //dedupe similar code 
  // new webpack.optimize.UglifyJsPlugin(), //minify everything
  // new webpack.optimize.AggressiveMergingPlugin()//Merge chunks
 ],
 output: {
   path: path.join(__dirname, 'www'),
   filename: 'bundle.js'
 },
 module: {
   rules: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       use: [
         'babel-loader',
       ],
     },
   ],
 },
 resolve: {
   modules: [
     path.join(__dirname, 'node_modules'),
   ],
 },
};