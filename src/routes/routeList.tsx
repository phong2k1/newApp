import SingIn from "../screens/signIn/singIn"
import Profile from "../screens/profile";
 
export type AppRootParamList = {
    ProfileRoute: undefined,
}

declare global {
    namespace ReactNavigation {
      interface RootParamList extends AppRootParamList {}
    }
  }

interface IRoute  {
    component: any,
    name: string,
    title: string,
}

const routes: IRoute[] = [
    {
        component: SingIn,
        name: "SingInRoute",
        title: "SingIn"
    },
    {
        component: Profile,
        name: "ProfileRoute",
        title: "ProfileRoute"
    },
]

export default routes