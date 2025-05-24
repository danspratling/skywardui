import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"
import { globalIgnores } from "eslint/config";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier", "plugin:storybook/recommended"),
  ...[globalIgnores(["**/.next/**"])],
  {
    rules: {
      // "no-console": "warn",
    },
  },
]

export default eslintConfig;
