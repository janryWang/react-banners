import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { createSlotComponents } from 'react-slot-props'
import BannerRelations from './shared/relations'
import { Box, Flex, Card, Block, Heading } from './shared/rebass'
import { getWidth } from './shared/utils'
import defaultThemes from './theme'
import SmartContent from './components/SmartContent'
import Button from './components/Button'

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
          {slot.render('elements', (render, props, type, key) => {
            const path = `elements[${key}]`
            switch (type) {
              case 'Cards':
                const cardProps = props
                return (
                  <Flex
                    flexWrap='wrap'
                    style={{ zIndex: 1 }}
                    justifyContent='space-around'
                    {...cardProps}
                  >
                    {slot.render(
                      `${path}.elements`,
                      (render, props, type, key) => {
                        return (
                          <Card
                            minWidth={[
                              'calc(100% - 90px)',
                              'calc(100% - 110px)',
                              'calc(100% - 110px)',
                              getWidth(
                                slot(`${path}.elements.length`),
                                20,
                                30,
                                'card'
                              )
                            ]}
                            maxWidth={getWidth(
                              slot(`${path}.elements.length`),
                              20,
                              30,
                              'card'
                            )}
                            {...props}
                          >
                            <SmartContent
                              imageAlign={
                                props.imageAlign || cardProps.imageAlign
                              }
                              textColor={props.textColor || cardProps.textColor}
                              textWidth={props.textWidth || cardProps.textWidth}
                              imageWidth={
                                props.imageWidth || cardProps.imageWidth
                              }
                              href={props.href}
                              itemSize={slot(`${path}.elements.length`)}
                              path={`${path}.elements[${key}].areas`}
                              slot={slot}
                            />
                          </Card>
                        )
                      }
                    )}
                  </Flex>
                )
              case 'Blocks':
                const blockProps = props
                return (
                  <Flex
                    flexWrap='wrap'
                    style={{ zIndex: 1 }}
                    justifyContent='space-around'
                    px={[0, 0, 0, 20]}
                    {...blockProps}
                  >
                    {slot.render(
                      `${path}.elements`,
                      (render, props, type, key) => {
                        return (
                          <Block
                            minWidth={[
                              'calc(100% - 90px)',
                              'calc(100% - 110px)',
                              'calc(100% - 110px)',
                              getWidth(
                                slot(`${path}.elements.length`),
                                20,
                                0,
                                'block'
                              )
                            ]}
                            maxWidth={getWidth(
                              slot(`${path}.elements.length`),
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
                              textColor={
                                props.textColor || blockProps.textColor
                              }
                              textWidth={
                                props.textWidth || blockProps.textWidth
                              }
                              imageWidth={
                                props.imageWidth || blockProps.imageWidth
                              }
                              href={props.href}
                              itemSize={slot(`${path}.elements.length`)}
                              path={`${path}.elements[${key}].areas`}
                              slot={slot}
                            />
                          </Block>
                        )
                      }
                    )}
                  </Flex>
                )
              case 'Box':
                return <Box {...props}>{render()}</Box>
            }
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

const exportComponents = createSlotComponents(ReactBanners, BannerRelations)

exportComponents.Button = Button

export default exportComponents
