import { TemplateProps } from '../interface/index'

function componentTemplate ({ fileName, data }:TemplateProps) {
  const render = `
  const EOS_${fileName} = {
    props: {
      color: String,
      size: String
    },
    template:
      '${data}'
  };
  
  export default EOS_${fileName};
`
  return (render)
}



export default componentTemplate
