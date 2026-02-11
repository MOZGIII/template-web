import { defineConfig } from "@rslib/core";
import { pluginSourceBuild } from "@rsbuild/plugin-source-build";

export default defineConfig({
  lib: [
    {
      format: "esm",
    },
  ],
  plugins: [pluginSourceBuild()],
});
