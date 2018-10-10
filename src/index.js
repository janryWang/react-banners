import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { createSlotComponents } from 'react-slot-props'
import BannerRelations from './shared/relations'
import { Box, Flex, Card, Block, Heading, Text, Image } from './shared/rebass'
import { getWidth } from './shared/utils'
import defaultThemes from './theme'
import Spectra from 'spectra'

const layoutIs = (type, contains) => {
  return contains.indexOf(type) > -1
}

class SmartContent extends Component {
  static defaultProps = {
    imageAlign: 'left'
  }

  getTextAlign() {
    const { imageAlign } = this.props
    if (layoutIs(imageAlign, ['top', 'bottom'])) {
      return 'center'
    } else if (layoutIs(imageAlign, ['left', 'right'])) {
      return 'left'
    }
    return 'left'
  }

  getFlexDirection() {
    const { imageAlign } = this.props
    if (layoutIs(imageAlign, ['top', 'bottom'])) {
      return 'column'
    } else if (layoutIs(imageAlign, ['left', 'right'])) {
      return 'row'
    }
    return 'row'
  }

  getTitleSize(fontSize) {
    const { itemSize } = this.props
    if (itemSize > 1) {
      return fontSize.map(i => (i - 2 > 1 ? i - 2 : 2))
    } else {
      return fontSize
    }
  }

  getImageWidth(width) {
    const { itemSize, imageAlign } = this.props
    if (itemSize > 1) {
      return ['25%', '25%', '25%', width || '25%']
    } else {
      return [
        layoutIs(imageAlign, ['left', 'top']) ? width || '50%' : '100%',
        layoutIs(imageAlign, ['left', 'top']) ? width || '50%' : '100%',
        layoutIs(imageAlign, ['left', 'top']) ? width || '50%' : '100%',
        layoutIs(imageAlign, ['left', 'right']) ? width || '50%' : '50%'
      ]
    }
  }

  getTextColor(color, type) {
    if (color) {
      switch (type) {
        case 'title':
          return color
        case 'subTitle':
          return Spectra(color)
            .alpha(0.8)
            .rgbaString()
        case 'description':
          return Spectra(color)
            .alpha(0.65)
            .rgbaString()
      }
    }
    return color
  }

  getTextBoxWidth() {
    const { itemSize, imageAlign, textWidth } = this.props
    return ['auto', 'auto', 'auto', textWidth]
  }

  render() {
    const { path, slot, imageAlign, textColor, imageWidth } = this.props
    const isVertical = layoutIs(imageAlign, ['top', 'bottom'])
    return (
      <Flex
        justifyContent='center'
        alignItems='center'
        flexDirection={['column', 'column', 'column', this.getFlexDirection()]}
        py={20}
      >
        {layoutIs(imageAlign, ['top', 'left']) &&
          slot.render(`${path}.image`, (render, props) => {
            return (
              <Box
                pb={[20, 20, 20, isVertical ? 20 : 0]}
                minWidth={this.getImageWidth(
                  props.width ||
                    (props.style && props.style.width) ||
                    imageWidth
                )}
                maxWidth={this.getImageWidth(
                  props.width ||
                    (props.style && props.style.width) ||
                    imageWidth
                )}
              >
                <Image {...props} width={'100%'} />
              </Box>
            )
          })}
        <Box px={[0, 0, 0, isVertical ? 0 : 20]} width={this.getTextBoxWidth()}>
          {slot.render(`${path}.title`, (render, props) => {
            return (
              <Heading
                fontSize={this.getTitleSize([5, 5, 6, 6])}
                fontWeight={400}
                color={this.getTextColor(
                  props.color ||
                    (props.style && props.style.color) ||
                    textColor,
                  'title'
                )}
                textAlign={['center', 'center', 'center', this.getTextAlign()]}
                {...props}
              >
                {render()}
              </Heading>
            )
          })}
          {slot.render(`${path}.sub_title`, (render, props) => {
            return (
              <Heading
                fontSize={this.getTitleSize([3, 3, 5, 5])}
                fontWeight={'lighter'}
                color={this.getTextColor(
                  props.color ||
                    (props.style && props.style.color) ||
                    textColor,
                  'subTitle'
                )}
                textAlign={['center', 'center', 'center', this.getTextAlign()]}
                mb={'2%'}
                {...props}
              >
                {render()}
              </Heading>
            )
          })}
          {slot.render(`${path}.description`, (render, props) => {
            return (
              <Text
                fontSize={1}
                color={this.getTextColor(
                  props.color ||
                    (props.style && props.style.color) ||
                    textColor,
                  'description'
                )}
                fontWeight={'lighter'}
                textAlign={['center', 'center', 'center', this.getTextAlign()]}
                {...props}
              >
                {render()}
              </Text>
            )
          })}
        </Box>
        {layoutIs(imageAlign, ['right', 'bottom']) &&
          slot.render(`${path}.image`, (render, props) => {
            return (
              <Box
                py={[20, 20, 20, isVertical ? 20 : 0]}
                minWidth={this.getImageWidth(
                  props.width ||
                    (props.style && props.style.width) ||
                    imageWidth
                )}
                maxWidth={this.getImageWidth(
                  props.width ||
                    (props.style && props.style.width) ||
                    imageWidth
                )}
                css={{
                  flexShrink: 3
                }}
              >
                <Image {...props} width={'100%'} />
              </Box>
            )
          })}
      </Flex>
    )
  }
}

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
