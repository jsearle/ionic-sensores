export interface SensoresPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
