// type PlatformType = "windows" | "mac" | "linux";

// const getPlatform = ({icon}: {icon: PlatformType}) => {
//   const platformIcon:{[key in PlatformType]?: string} = {
//     windows: "mdi:microsoft-windows",
//     mac: "mdi:apple",
//     linux: "mdi:linux"
//   }
//   return platformIcon[icon]
// }


export interface IPlatforms {
  windows: boolean,
  mac:boolean,
  linux: boolean
}
export interface ICart {
  id: string,
  name:string,
  image:string,
  release_date: number,
  price:IPrice,
  platforms: IPlatforms
}

export interface IPayment {
    username: string,
    number: string,
    expired_at: string,
    security_code: string
}


