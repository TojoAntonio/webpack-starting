const commonConfig = require("./build-utils/webpack.common");
const webpackMerge = require("webpack-merge");

const addons = (addonsArg) => {
  let addons = []
      .concat.apply([], [addonsArg]) // Normalize array of addons (flatten)
      .filter(Boolean);             // If addons is undefined, filter is out

  return addons.map((addonsName) => require(`./build-utils/addons/webpack.${addonsName}.js`));
};

module.exports = (env) => {
  if(!env) {
    throw new Error("You must pass an --env flag into build for webpack to work!");
  }
  
  console.log(env);

  const envConfig = require(`./build-utils/webpack.${env.env}.js`);
  const mergedConfig = webpackMerge(commonConfig, envConfig, ...addons(env.addons));

  console.log(mergedConfig);

  return mergedConfig;

}