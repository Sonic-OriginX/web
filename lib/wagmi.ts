import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sonicBlazeTestnet } from 'viem/chains';

export const config = getDefaultConfig({
    appName: 'OriginX',
    projectId: '04251f8180896efb96c57a0984864657',
    chains: [
      sonicBlazeTestnet
    ],
});