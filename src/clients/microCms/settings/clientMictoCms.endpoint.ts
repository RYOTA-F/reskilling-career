import { API_DOMAIN } from './clientMicroCms.const'

export const apiEndpoint = (url: string) => {
  return `${API_DOMAIN}${url}`
}
