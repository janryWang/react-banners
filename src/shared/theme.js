import React from 'react'
import { ThemeConsumer } from 'styled-components'

export const themeable = () => Target => {
  return props => (
    <ThemeConsumer>
      {theme => <Target {...props} theme={theme} />}
    </ThemeConsumer>
  )
}
