import SignIn from "../../screens/signIn/signIn"
 
export type AppRootParamList = {
    SignInRoute: undefined
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

const routesListLogin: IRoute[] = [
    {
        component: SignIn,
        name: "SignInRoute",
        title: "SignInRoute"
    },
]

export default routesListLogin