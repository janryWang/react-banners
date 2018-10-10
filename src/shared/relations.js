export default [
  {
    type: 'ReactBanners',
    root: true,
    areas: ['Title', 'Cards', 'Blocks', 'Texture']
  },
  {
    type: 'Title'
  },
  {
    type: 'SubTitle'
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
