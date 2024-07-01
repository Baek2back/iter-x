import { defineConfig } from "tsup";

export default defineConfig({
	format: ["esm"],
	target: "es6",
	entry: ["src/index.ts"],
	splitting: true,
	sourcemap: true,
	clean: true,
	dts: true,
	treeshake: true,
	metafile: true,
});
