import { MantaPacificNetworkInfo, NetworkInfo } from 'constants/networks'

export function networkPrefix(activeNewtork: NetworkInfo) {
  const isEthereum = activeNewtork === MantaPacificNetworkInfo
  if (isEthereum) {
    return '/'
  }
  const prefix = '/' + activeNewtork.route.toLocaleLowerCase() + '/'
  return prefix
}
