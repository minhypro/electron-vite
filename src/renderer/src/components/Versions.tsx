import { isElectronEnv } from '@renderer/utils/electron-detecter'

function Versions(): JSX.Element {
  const versions = isElectronEnv() ? window.electron.process.versions : undefined

  return versions ? (
    <ul className="versions">
      <li className="electron-version">Electron v{versions.electron}</li>
      <li className="chrome-version">Chromium v{versions.chrome}</li>
      <li className="node-version">Node v{versions.node}</li>
    </ul>
  ) : (
    <h2>Open application with Electron to view the versions</h2>
  )
}

export default Versions
