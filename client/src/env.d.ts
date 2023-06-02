interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_API_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
