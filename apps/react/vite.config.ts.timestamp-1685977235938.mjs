// vite.config.ts
import { defineConfig } from "file:///Volumes/workzone/personal/play-canvas/node_modules/.pnpm/registry.npmmirror.com+vite@4.1.4_4l5pdn5ozbjpiwj3fcgseihr44/node_modules/vite/dist/node/index.js";
import react from "file:///Volumes/workzone/personal/play-canvas/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-react@3.1.0_vite@4.1.4/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import typescript from "file:///Volumes/workzone/personal/play-canvas/node_modules/.pnpm/registry.npmmirror.com+@rollup+plugin-typescript@11.0.0_y2wxofkj373fhto5ciw6eygozi/node_modules/@rollup/plugin-typescript/dist/es/index.js";
var __vite_injected_original_dirname = "/Volumes/workzone/personal/play-canvas/apps/react";
var vite_config_default = defineConfig((mode) => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "src")
      }
    },
    build: {
      lib: {
        entry: path.resolve(__vite_injected_original_dirname, "./index.ts"),
        name: "meplay",
        fileName: (format) => `meplay.${format}.js`
      },
      rollupOptions: {
        external: ["react"],
        output: {
          globals: {
            react: "react"
          }
        },
        plugins: [
          typescript({
            target: "es2015",
            // 这里指定编译到的版本，
            rootDir: path.resolve(__vite_injected_original_dirname, "src"),
            declaration: true,
            declarationDir: path.resolve(__vite_injected_original_dirname, "dist"),
            exclude: path.resolve(__vite_injected_original_dirname, "node_modules/**"),
            allowSyntheticDefaultImports: true
          })
        ]
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVm9sdW1lcy93b3Jrem9uZS9wZXJzb25hbC9wbGF5LWNhbnZhcy9hcHBzL3JlYWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVm9sdW1lcy93b3Jrem9uZS9wZXJzb25hbC9wbGF5LWNhbnZhcy9hcHBzL3JlYWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Wb2x1bWVzL3dvcmt6b25lL3BlcnNvbmFsL3BsYXktY2FudmFzL2FwcHMvcmVhY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB0eXBlc2NyaXB0IGZyb20gJ0Byb2xsdXAvcGx1Z2luLXR5cGVzY3JpcHQnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKChtb2RlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcGx1Z2luczogW3JlYWN0KCldLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICBsaWI6IHtcbiAgICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL2luZGV4LnRzJyksXG4gICAgICAgIG5hbWU6ICdtZXBsYXknLFxuICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYG1lcGxheS4ke2Zvcm1hdH0uanNgLFxuICAgICAgfSxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgZXh0ZXJuYWw6IFsncmVhY3QnXSxcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgICAgcmVhY3Q6ICdyZWFjdCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgIHR5cGVzY3JpcHQoe1xuICAgICAgICAgICAgdGFyZ2V0OiAnZXMyMDE1JywgLy8gXHU4RkQ5XHU5MUNDXHU2MzA3XHU1QjlBXHU3RjE2XHU4QkQxXHU1MjMwXHU3Njg0XHU3MjQ4XHU2NzJDXHVGRjBDXG4gICAgICAgICAgICByb290RGlyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXG4gICAgICAgICAgICBkZWNsYXJhdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uRGlyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnZGlzdCcpLFxuICAgICAgICAgICAgZXhjbHVkZTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ25vZGVfbW9kdWxlcy8qKicpLFxuICAgICAgICAgICAgYWxsb3dTeW50aGV0aWNEZWZhdWx0SW1wb3J0czogdHJ1ZSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxVSxTQUFTLG9CQUFvQjtBQUNsVyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sZ0JBQWdCO0FBSHZCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYSxDQUFDLFNBQVM7QUFDcEMsU0FBTztBQUFBLElBQ0wsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLElBQ2pCLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxNQUNwQztBQUFBLElBQ0Y7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLEtBQUs7QUFBQSxRQUNILE9BQU8sS0FBSyxRQUFRLGtDQUFXLFlBQVk7QUFBQSxRQUMzQyxNQUFNO0FBQUEsUUFDTixVQUFVLENBQUMsV0FBVyxVQUFVO0FBQUEsTUFDbEM7QUFBQSxNQUNBLGVBQWU7QUFBQSxRQUNiLFVBQVUsQ0FBQyxPQUFPO0FBQUEsUUFDbEIsUUFBUTtBQUFBLFVBQ04sU0FBUztBQUFBLFlBQ1AsT0FBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDUCxXQUFXO0FBQUEsWUFDVCxRQUFRO0FBQUE7QUFBQSxZQUNSLFNBQVMsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxZQUN0QyxhQUFhO0FBQUEsWUFDYixnQkFBZ0IsS0FBSyxRQUFRLGtDQUFXLE1BQU07QUFBQSxZQUM5QyxTQUFTLEtBQUssUUFBUSxrQ0FBVyxpQkFBaUI7QUFBQSxZQUNsRCw4QkFBOEI7QUFBQSxVQUNoQyxDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
