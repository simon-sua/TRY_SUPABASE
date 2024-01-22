// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///E:/projects/frontend/pure/TRY_SUPABASE/node_modules/.pnpm/vite@5.0.12_@types+node@18.19.8/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/projects/frontend/pure/TRY_SUPABASE/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@5.0.12_vue@3.4.15/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import UnoCSS from "file:///E:/projects/frontend/pure/TRY_SUPABASE/node_modules/.pnpm/unocss@0.58.3_postcss@8.4.33_vite@5.0.12/node_modules/unocss/dist/vite.mjs";
import vueJsx from "file:///E:/projects/frontend/pure/TRY_SUPABASE/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.0.12_vue@3.4.15/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import components from "file:///E:/projects/frontend/pure/TRY_SUPABASE/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.15/node_modules/unplugin-vue-components/dist/vite.js";
import autoImport from "file:///E:/projects/frontend/pure/TRY_SUPABASE/node_modules/.pnpm/unplugin-auto-import@0.17.3/node_modules/unplugin-auto-import/dist/vite.js";
import { VarletUIResolver } from "file:///E:/projects/frontend/pure/TRY_SUPABASE/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.15/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_import_meta_url = "file:///E:/projects/frontend/pure/TRY_SUPABASE/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    components({
      resolvers: [VarletUIResolver()]
    }),
    autoImport({
      resolvers: [VarletUIResolver({ autoImport: true })]
    }),
    UnoCSS()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxwcm9qZWN0c1xcXFxmcm9udGVuZFxcXFxwdXJlXFxcXFRSWV9TVVBBQkFTRVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxccHJvamVjdHNcXFxcZnJvbnRlbmRcXFxccHVyZVxcXFxUUllfU1VQQUJBU0VcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L3Byb2plY3RzL2Zyb250ZW5kL3B1cmUvVFJZX1NVUEFCQVNFL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuXG5pbXBvcnQgY29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IGF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCB7IFZhcmxldFVJUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgdnVlSnN4KCksXG4gICAgY29tcG9uZW50cyh7XG4gICAgICByZXNvbHZlcnM6W1ZhcmxldFVJUmVzb2x2ZXIoKV1cbiAgICB9KSxcbiAgICBhdXRvSW1wb3J0KHtcbiAgICAgIHJlc29sdmVyczpbVmFybGV0VUlSZXNvbHZlcih7YXV0b0ltcG9ydDp0cnVlfSldXG4gICAgfSksXG4gICAgVW5vQ1NTKCksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThTLFNBQVMsZUFBZSxXQUFXO0FBQ2pWLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxZQUFZO0FBRW5CLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsd0JBQXdCO0FBUjRKLElBQU0sMkNBQTJDO0FBVzlPLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFdBQVc7QUFBQSxNQUNULFdBQVUsQ0FBQyxpQkFBaUIsQ0FBQztBQUFBLElBQy9CLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFdBQVUsQ0FBQyxpQkFBaUIsRUFBQyxZQUFXLEtBQUksQ0FBQyxDQUFDO0FBQUEsSUFDaEQsQ0FBQztBQUFBLElBQ0QsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
