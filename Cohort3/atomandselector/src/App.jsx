import { RecoilRoot, useRecoilValue, useRecoilState } from 'recoil'
import { notifications, totalNotificationSelecter } from './atoms'
import { useEffect } from 'react'
import axios from "axios";




// Recoil Root

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelecter)
  
 useEffect(() => {
  // fetch
  axios.get("http://sum-server.100xdevs.com/notifications")
  .then(res => {
    setNetworkCount(res.data)
  })
 }, [])


  return (
    <>
      <button>Home</button>

      <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks })</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>



    </>
  )
}

export default App
