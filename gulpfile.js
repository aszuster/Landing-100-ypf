const {src, dest, watch} = require ('gulp');
const compileSass = require('gulp-sass')(require('sass'));

compileSass.compiler = require('node-sass');

const bundleSass = () => {
	return src('./src/**/*.scss')
	.pipe(compileSass().on('error', compileSass.logError))
	.pipe(dest('./dist/css/'));
}

const devWatch = () => {
	watch('./src/**/*.scss', bundleSass);
}

exports.bundleSass = bundleSass;
exports.devWatch = devWatch;