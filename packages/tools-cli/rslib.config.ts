import { defineConfig } from "@rslib/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSourceBuild } from "@rsbuild/plugin-source-build";

export default defineConfig({
  lib: [
    {
      format: "esm",
    },
  ],
  plugins: [pluginReact(), pluginSourceBuild()],
});
