export const isElectronEnv = (): boolean => {
  return window.electron !== undefined
}
