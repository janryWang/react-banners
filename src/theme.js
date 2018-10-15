export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ['40em', '52em', '60em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  Card: `
  box-shadow: rgba(31,56,88,0.15) 0px 2px 10px;
  background-color: #ffffff;
  border-radius: 6px;
  padding:30px;
  margin:20px;
  `,
  Block: `
  margin:0 20px;
  `,
  Heading: `
  line-height:1.5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  `,
  Text: `
  line-height: 1.7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  `,
  Button: `
  transition:all .35s ease-in-out;
  &:hover{
    transform:translateY(-5px);
    box-shadow:0 10px 20px rgba(102, 102, 102, 0.25);
  }
  `,
  Link: `
  text-decoration:none !important;
  cursor:pointer;
  display:block;
  transition:all .35s ease-in-out;
  &:hover{
    transform:translateY(-5px);
  }
  `
}
