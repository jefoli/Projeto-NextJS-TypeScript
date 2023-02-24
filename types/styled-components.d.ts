//isso é somente um arquivo de declaração de tipo, pois o styled components ainda não é possivel usar direto

import { theme } from '../src/styles/theme';

type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
