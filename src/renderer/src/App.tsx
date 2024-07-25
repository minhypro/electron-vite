import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import { isElectronEnv } from './utils/electron-detecter'

function App(): JSX.Element {
  const openNetFlix = (): void => {
    if (isElectronEnv()) {
      window.electron.ipcRenderer.send('open-netflix')
    } else {
      alert('This feature is only available in Electron')
    }
  }

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
        &nbsp;and <span className="ts">TypeScript</span>
      </div>
      <div className="text">
        App deployed to Vercel by Y Le
      </div>
      <div>
        <a href="https://electron-vite-xi.vercel.app/" target="_blank" rel="noreferrer">
            Web Version
        </a>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={openNetFlix}>
            Open NetFlix (Electron version only)
          </a>
        </div>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
