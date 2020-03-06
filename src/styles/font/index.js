import { css } from 'styled-components'
import font from 'assets/font/comic-sans.ttf'

export const fontFaces = css`
	@font-face {	
		font-family: 'comic-sans';	
		font-weight: 100;	
		src: url(${font});
	}
`
