import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";

import packageJson from './package.json' assert { type: 'json' };
const name = packageJson.main.replace(/\.js$/, '');

const bundle = (config) => ({
  ...config,
  input: "src/index.ts",
  external: (id) => !/^[./]/.test(id),
})

export default [
  bundle({
    plugins: [esbuild()],
    output: [
      {
        file: `./dist/${name}.js`,
        format: "es",
        exports: "named",
        preserveModules: true, // Keep directory structure and files
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      format: "es",
      exports: "named",
      file: `./dist/${name}.d.ts`,
      preserveModules: true, // Keep directory structure and files
    },
  })
];