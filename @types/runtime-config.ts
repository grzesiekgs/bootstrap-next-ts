export interface EnvVars {
  NODE_ENV: string;
}

export interface PublicRuntimeConfig {
  env: EnvVars;
}

export interface ServerRuntimeConfig {}

export interface RuntimeConfig {
  publicRuntimeConfig: PublicRuntimeConfig;
  serverRuntimeConfig: ServerRuntimeConfig;
}
