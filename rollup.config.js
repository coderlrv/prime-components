import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import json from '@rollup/plugin-json';

const bundle = (config) => ({
  ...config,
  input: "src/index.ts",
  external: (id) => !/^[./]/.test(id),
})

export default [
  bundle({
    plugins: [esbuild(),json()],
    output: [
      {
        dir: "./dist",
        //file: `./dist/${name}.js`,
        format: "es",
        exports: "named",
        preserveModules: true, // Keep directory structure and files
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      dir: "./dist",
      format: "es",
      exports: "named",
      //file: `./dist/${name}.d.ts`,
      preserveModules: true, // Keep directory structure and files
    },
  })
];