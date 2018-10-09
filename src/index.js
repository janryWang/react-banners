import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { createSlotComponents } from 'react-slot-props'
import BannerRelations from './shared/relations'
import {
  Text,
  Box,
  Flex,
  Card,
  Heading,
  Button,
  ComplexCard
} from './shared/rebass'
import { getWidth } from './shared/utils'
import defaultThemes from './theme'

class ReactBanners extends Component {
  render() {
    const { slot } = this.props
    return (
      <ThemeProvider theme={defaultThemes}>
        <Box>
          {slot.render('areas.title', (render, props) => {
            return (
              <Flex
                alignItems='center'
                justifyContent='center'
                p={20}
                fontSize={[5]}
                {...props}
              >
                {render()}
              </Flex>
            )
          })}
          {slot.has('areas.cards.elements') &&
            slot.render('areas.cards', (render, props) => {
              return (
                <Flex flexWrap='wrap' justifyContent='space-around' {...props}>
                  {slot.render('areas.cards.elements', (render, props) => {
                    return (
                      <ComplexCard
                        minWidth={[
                          'calc(100% - 90px)',
                          'calc(100% - 110px)',
                          getWidth(slot('areas.cards.elements.length'), 20, 30)
                        ]}
                        maxWidth={getWidth(
                          slot('areas.cards.elements.length'),
                          20,
                          30
                        )}
                        {...props}
                      >
                        {render()}
                      </ComplexCard>
                    )
                  })}
                </Flex>
              )
            })}
        </Box>
      </ThemeProvider>
    )
  }
}

export default createSlotComponents(ReactBanners, BannerRelations)
