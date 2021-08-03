import { TemplateProps } from '../interface/index'

function componentTemplate ({ fileName, data }:TemplateProps) {
  const render = `
const Eos${fileName} = () => {
  return ${data}
};

export default Eos${fileName}
`
  return (render)
}

export default componentTemplate
