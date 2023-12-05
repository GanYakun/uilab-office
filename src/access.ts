import { getSecurityPermissionGroup } from '../config/appConfig'
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  return currentUser && getSecurityPermissionGroup ? getSecurityPermissionGroup(currentUser) : {}
}
