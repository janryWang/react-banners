import * as Rebass from 'rebass'
import styled from 'styled-components'
import { minWidth, maxWidth } from 'styled-system'
import { themeable } from './theme'

const themed = key => props => props.theme[key]

export const Text = themeable()(Rebass.Text)

export const Heading = themeable()(Rebass.Heading)

export const Flex = themeable()(Rebass.Flex)

const _Box = themeable()(Rebass.Box)

export const Box = themeable()(styled(_Box)(minWidth, maxWidth))

export const Button = themeable()(Rebass.Button)

export const Link = themeable()(Rebass.Link)

export const Image = themeable()(Rebass.Image)

const _Card = themeable()(Rebass.Card)

export const Card = themeable()(styled(_Card)(minWidth, maxWidth))

export const Block = themeable()(
  styled(Rebass.Box)(minWidth, maxWidth, themed('Block'))
)
