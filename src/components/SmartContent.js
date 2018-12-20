import React, { Component } from 'react'
import { Box, Flex, Heading, Text, Image, Link } from '../shared/rebass'
import Spectra from 'spectra'

const layoutIs = (type, contains) => {
  return contains.indexOf(type) > -1
}

export default class SmartContent extends Component {
  static defaultProps = {
    imageAlign: 'left',
    textColor: '#333'
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

  renderContent() {
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
                style={{
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

  render() {
    const { href,target } = this.props
    if (href) {
      return <Link href={href} target={target}>{this.renderContent()}</Link>
    } else {
      return this.renderContent()
    }
  }
}
