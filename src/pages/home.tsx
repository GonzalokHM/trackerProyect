import { HomeWrapper } from "../App.styles"
import RoutineList from "../components/RutineList"
import UserProfile from "../components/UserProfile"
import { RoutineContextProvider } from "../context/RoutineContext"
import { UserContextProvider } from "../context/UserContext"

const Home = (): React.ReactElement => {
return (
    <HomeWrapper>
        <UserContextProvider>
         <UserProfile/>
        </UserContextProvider>

        <RoutineContextProvider>
         <RoutineList/>
        </RoutineContextProvider>
    </HomeWrapper>
)
}

export default Home