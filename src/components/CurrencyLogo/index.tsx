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
      case getAddress('0xec901da9c68e90798bbbb74c11406a32a70652c3'):
        return 'https://storage.googleapis.com/ks-setting-1d682dca/dee351e5-ff61-4a8f-994d-82f3078119661696785945490.png'
      case getAddress('0xbdad407f77f44f7da6684b416b1951eca461fb07'):
        return 'https://etherscan.io/token/images/mountainusdm_32.png'
      case getAddress('0x20a512dbdc0d006f46e6ca11329034eb3d18c997'):
        return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iMTAiIGZpbGw9IiMwQjBCMTMiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjQ1NTIgMTMuMDY0MUgxMC41MTI5VjE0LjgzMzNINC4xNjY3NVY1LjgzMzM0SDYuMzU5MDVWNy41ODk3NVY5LjQ3NDM3VjExLjA3NjlWMTMuMDY0MUg3LjQ1NTJaTTE0Ljc0NDIgMTAuMjE4QzE1LjI2NiAxMC4zMjk1IDE1LjY4MzkgMTAuNTg3MiAxNi4wMDA2IDEwLjk5MzZDMTYuMzE3MyAxMS40IDE2LjQ3NSAxMS44NjI4IDE2LjQ3NSAxMi4zODQ2QzE2LjQ3NSAxMy4xMzcyIDE2LjIxMjEgMTMuNzMzMyAxNS42ODY1IDE0LjE3MzFDMTUuMTYwOSAxNC42MTI4IDE0LjQyNzUgMTQuODMzMyAxMy40ODc4IDE0LjgzMzNIMTIuMjY2OVYxMy4wNjQxSDEzLjEwMzJDMTMuNDcxMSAxMy4wNjQxIDEzLjc1NDQgMTIuOTgwOCAxMy45NTU3IDEyLjgxNDFDMTQuMTU3IDEyLjY0NzQgMTQuMjU3IDEyLjQwNjQgMTQuMjU3IDEyLjA4OThDMTQuMjU3IDExLjc3MzEgMTQuMTUxOSAxMS41MjU3IDEzLjk0MjkgMTEuMzQ2MkMxMy43MzM5IDExLjE2NjcgMTMuNDQ1NSAxMS4wNzY5IDEzLjA3NzUgMTEuMDc2OUg4LjExMzAyVjkuNDc0MzdIMTIuOTIzN0MxMy4yODI3IDkuNDc0MzcgMTMuNTU4MyA5LjM5NDg4IDEzLjc1MDYgOS4yMzcxOUMxMy45NDI5IDkuMDc5NSAxNC4wMzkxIDguODQ2MTYgMTQuMDM5MSA4LjUzODQ3QzE0LjAzOTEgOC4yMzA3OCAxMy45NDI5IDcuOTk2MTYgMTMuNzUwNiA3LjgzMzM0QzEzLjU1ODMgNy42NzA1MiAxMy4yODI3IDcuNTg5NzUgMTIuOTIzNyA3LjU4OTc1SDguMTEzMDJWNS44MzMzNEgxMy4zNDY4QzE0LjI2MDkgNS44MzMzNCAxNC45Nzc1IDYuMDQyMzIgMTUuNDk0MiA2LjQ2MTU1QzE2LjAxMDggNi44ODA3OCAxNi4yNjk4IDcuNDQ4NzMgMTYuMjY5OCA4LjE2NjY4QzE2LjI2OTggOC42OTYxNiAxNi4xMzE0IDkuMTM3MTkgMTUuODUzMiA5LjQ4NzE5QzE1LjU3NSA5LjgzNzE5IDE1LjIwNTcgMTAuMDgwOCAxNC43NDQyIDEwLjIxOFoiIGZpbGw9IiNENjZFQ0IiLz4KPC9zdmc+Cg=='
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
