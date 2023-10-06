export enum ChainId {
  MANTA_PACIFIC = 169,
}

export enum SupportedNetwork {
  MANTA_PACIFIC,
}

export type NetworkInfo = {
  chainId: ChainId
  id: SupportedNetwork
  route: string
  name: string
  imageURL: string
  bgColor: string
  primaryColor: string
  secondaryColor: string
}

export const MantaPacificNetworkInfo: NetworkInfo = {
  chainId: ChainId.MANTA_PACIFIC,
  id: SupportedNetwork.MANTA_PACIFIC,
  route: '',
  name: 'Manta Pacific',
  bgColor: '#fc077d',
  primaryColor: '#fc077d',
  secondaryColor: '#2172E5',
  imageURL: 'https://pacific.manta.network/favicon.ico',
}

export const SUPPORTED_NETWORK_VERSIONS: NetworkInfo[] = [MantaPacificNetworkInfo]
