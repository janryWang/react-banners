import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from '../shared/rebass'
import Spectra from 'spectra'

export default class extends Component {
  render() {
    const { children, ghost, className, color: _color = '#666' } = this.props
    return (
      <Button
        fontWeight={ghost ? 'normal' : 'lighter'}
        borderRadius={100}
        border={ghost ? `1px solid ${_color}` : 'none'}
        px={30}
        mr={10}
        style={{
          backgroundColor: ghost ? 'transparent' : _color,
          color: ghost ? _color : Spectra(_color).lighten(80),
          cursor: 'pointer'
        }}
      >
        {children}
      </Button>
    )
  }
}
