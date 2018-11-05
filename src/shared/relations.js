export default [
  {
    type: 'ReactBanners',
    root: true,
    elements: ['Cards', 'Blocks', 'Box'],
    areas: ['Title', 'Texture']
  },
  {
    type: 'Title'
  },
  {
    type: 'SubTitle'
  },
  {
    type: 'Box'
  },
  {
    type: 'Description'
  },
  {
    type: 'Image'
  },
  {
    type: 'Cards',
    elements: ['Card']
  },
  {
    type: 'Blocks',
    elements: ['Block']
  },
  {
    type: 'Card',
    areas: ['Title', 'SubTitle', 'Description', 'Image']
  },
  {
    type: 'Block',
    areas: ['Title', 'SubTitle', 'Description', 'Image']
  },
  {
    type: 'Texture'
  }
]
