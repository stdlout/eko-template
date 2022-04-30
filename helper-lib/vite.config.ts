import { defineConfig } from 'vite';
import path from "path";
import solidPlugin from 'vite-plugin-solid';
import dts from "vite-plugin-dts";
import pkg from "./package.json";

export default defineConfig({
    plugins: [
        solidPlugin(),
        dts({
            tsConfigFilePath: "tsconfig.build.json",
            insertTypesEntry: true,
            noEmitOnError: true,
            skipDiagnostics: false,
            logDiagnostics: true,
        })],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            formats: ["es"],
            // formats: ["es", "cjs"],
            fileName: format => (format === "es" ? "index.mjs" : "index.cjs"),
        },
        rollupOptions: {
            external: [
                ...Object.keys(pkg.dependencies),
                ...Object.keys(pkg.peerDependencies),
                "solid-js/web",
                "solid-js/store",
            ],
        },
    }
});