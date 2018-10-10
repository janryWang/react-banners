import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { createSlotComponents } from 'react-slot-props'
import BannerRelations from './shared/relations'
import { Box, Flex, Card, Block, Heading } from './shared/rebass'
import { getWidth } from './shared/utils'
import defaultThemes from './theme'
import SmartContent from './components/SmartContent'

class ReactBanners extends Component {
  render() {
    const { slot, ...others } = this.props
    return (
      <ThemeProvider theme={defaultThemes}>
        <Box {...others} style={{ position: 'relative', ...others.style }}>
          {slot.render('areas.title', (render, props) => {
            return (
              <Flex
                alignItems='center'
                style={{ zIndex: 1 }}
                justifyContent='center'
                p={20}
                pb={40}
              >
                <Heading fontSize={5} fontWeight={400} {...props}>
                  {render()}
                </Heading>
              </Flex>
            )
          })}
          {slot.has('areas.cards.elements') &&
            slot.render('areas.cards', (render, cardProps) => {
              return (
                <Flex
                  flexWrap='wrap'
                  style={{ zIndex: 1 }}
                  justifyContent='space-around'
                  {...cardProps}
                >
                  {slot.render('areas.cards.elements', (render, props, key) => {
                    return (
                      <Card
                        minWidth={[
                          'calc(100% - 90px)',
                          'calc(100% - 110px)',
                          'calc(100% - 110px)',
                          getWidth(
                            slot('areas.cards.elements.length'),
                            20,
                            30,
                            'card'
                          )
                        ]}
                        maxWidth={getWidth(
                          slot('areas.cards.elements.length'),
                          20,
                          30,
                          'card'
                        )}
                        {...props}
                      >
                        <SmartContent
                          imageAlign={props.imageAlign || cardProps.imageAlign}
                          textColor={props.textColor || cardProps.textColor}
                          textWidth={props.textWidth || cardProps.textWidth}
                          imageWidth={props.imageWidth || cardProps.imageWidth}
                          itemSize={slot('areas.cards.elements.length')}
                          path={`areas.cards.elements[${key}].areas`}
                          slot={slot}
                        />
                      </Card>
                    )
                  })}
                </Flex>
              )
            })}
          {slot.has('areas.blocks.elements') &&
            slot.render('areas.blocks', (render, blockProps, key) => {
              return (
                <Flex
                  flexWrap='wrap'
                  style={{ zIndex: 1 }}
                  justifyContent='space-around'
                  px={[0, 0, 0, 20]}
                  {...blockProps}
                >
                  {slot.render(
                    'areas.blocks.elements',
                    (render, props, key) => {
                      return (
                        <Block
                          minWidth={[
                            'calc(100% - 90px)',
                            'calc(100% - 110px)',
                            'calc(100% - 110px)',
                            getWidth(
                              slot('areas.blocks.elements.length'),
                              20,
                              0,
                              'block'
                            )
                          ]}
                          maxWidth={getWidth(
                            slot('areas.blocks.elements.length'),
                            20,
                            0,
                            'block'
                          )}
                          {...props}
                        >
                          <SmartContent
                            imageAlign={
                              props.imageAlign || blockProps.imageAlign
                            }
                            textColor={props.textColor || blockProps.textColor}
                            textWidth={props.textWidth || blockProps.textWidth}
                            imageWidth={
                              props.imageWidth || blockProps.imageWidth
                            }
                            itemSize={slot('areas.blocks.elements.length')}
                            path={`areas.blocks.elements[${key}].areas`}
                            slot={slot}
                          />
                        </Block>
                      )
                    }
                  )}
                </Flex>
              )
            })}
          {slot.render('areas.texture', (render, props) => {
            return (
              <Box
                {...props}
                className='banners-texture'
                style={{
                  ...props.style,
                  position: 'absolute',
                  zIndex: -1,
                  left: props.x || props.left || 0,
                  top: props.y || props.top || 0
                }}
              >
                {render()}
              </Box>
            )
          })}
        </Box>
      </ThemeProvider>
    )
  }
}

export default createSlotComponents(ReactBanners, BannerRelations)
