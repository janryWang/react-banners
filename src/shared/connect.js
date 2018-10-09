import { slotable } from 'react-slot-props'
import { themeable } from './theme'
import { compose } from './utils'

const wrappers = compose(
  slotable(),
  themeable()
)

export default () => Target => wrappers(Target)
