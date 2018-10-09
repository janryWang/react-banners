import * as Rebass from 'rebass'
import styled from 'styled-components'
import { minWidth, maxWidth } from 'styled-system'
import { themeable } from './theme'

export const Text = themeable()(Rebass.Text)

export const Heading = themeable()(Rebass.Heading)

export const Flex = themeable()(Rebass.Flex)

export const Box = themeable()(Rebass.Box)

export const Button = themeable()(Rebass.Button)

export const Link = themeable()(Rebass.Link)

export const Image = themeable()(Rebass.Image)

export const Card = themeable()(Rebass.Card)

export const ComplexCard = themeable()(styled(Card)(minWidth, maxWidth))

// const WrapperRebass = {}

// Object.keys(Rebass).forEach(key => {
//   WrapperRebass[key] = themeable()(Rebass[key])
// })

// module.exports = WrapperRebass
