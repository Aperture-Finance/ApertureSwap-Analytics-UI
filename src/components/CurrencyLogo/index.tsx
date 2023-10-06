import React, { useMemo } from 'react'
import styled from 'styled-components'
import { isAddress } from 'utils'
import Logo from '../Logo'
import { useActiveNetworkVersion } from 'state/application/hooks'
import { ChainId } from 'constants/networks'
import { getAddress } from 'ethers/lib/utils'

export function chainIdToNetworkName(networkId: ChainId) {
  switch (networkId) {
    case ChainId.MANTA_PACIFIC:
      return 'manta-pacific'
    default:
      return 'manta-pacific'
  }
}

const getTokenLogoURL = ({ address, chainId }: { address: string; chainId: ChainId }) => {
  if (chainId === ChainId.MANTA_PACIFIC) {
    switch (address) {
      case getAddress('0x0Dc808adcE2099A9F62AA87D9670745AbA741746'):
        return 'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
      case getAddress('0xb73603c5d87fa094b7314c74ace2e64d165016fb'):
        return 'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png'
      case getAddress('0xf417f5a458ec102b90352f697d6e2ac3a3d2851f'):
        return 'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png'
      case getAddress('0x305e88d809c9dc03179554bfbf85ac05ce8f18d6'):
        return 'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png'
      case getAddress('0x1c466b9371f8aba0d7c458be10a62192fcb8aa71'):
        return 'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png'
      case getAddress('0x2fe3ad97a60eb7c79a976fc18bb5ffd07dd94ba5'):
        return 'https://assets.coingecko.com/coins/images/18834/small/wstETH.png'
      case getAddress('0x6e9655611b42c10b9af25b6ca08be349df45c370'):
        return 'https://assets.coingecko.com/coins/images/20764/small/reth.png'
      default:
        return `https://raw.githubusercontent.com/uniswap/assets/master/blockchains/${chainIdToNetworkName(
          chainId
        )}/assets/${address}/logo.png`
    }
  }
  return `https://raw.githubusercontent.com/uniswap/assets/master/blockchains/${chainIdToNetworkName(
    chainId
  )}/assets/${address}/logo.png`
}

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text4};
`

export default function CurrencyLogo({
  address,
  size = '24px',
  style,
  ...rest
}: {
  address?: string
  size?: string
  style?: React.CSSProperties
}) {
  const [activeNetwork] = useActiveNetworkVersion()

  //temp until token logo issue merged
  const tempSources: { [address: string]: string } = useMemo(() => {
    return {
      ['0x4dd28568d05f09b02220b09c2cb307bfd837cb95']:
        'https://assets.coingecko.com/coins/images/18143/thumb/wCPb0b88_400x400.png?1630667954',
    }
  }, [])

  const srcs: string[] = useMemo(() => {
    const checkSummed = isAddress(address)

    if (checkSummed && address) {
      const override = tempSources[address]
      return [getTokenLogoURL({ address: checkSummed, chainId: activeNetwork.chainId }), override]
    }
    return []
  }, [address, tempSources, activeNetwork.chainId])

  return <StyledLogo size={size} srcs={srcs} alt={'token logo'} style={style} {...rest} />
}
