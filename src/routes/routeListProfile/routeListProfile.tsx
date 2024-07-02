import Profile from "../../screens/profile";
 
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

const routesListProfile: IRoute[] = [
    {
        component: Profile,
        name: "ProfileRoute",
        title: "ProfileRoute"
    },
]

export default routesListProfile