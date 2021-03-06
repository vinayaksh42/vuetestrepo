import { TemplateProps } from '../interface/index'

function componentTemplate ({ fileName, data }:TemplateProps) {
  const render = `
import { IconProps, valuesMap } from '../helper';
import { flipFunction } from '../flipFunction';

const EOS_${fileName} = ({size = "32", color = "black", rotate = 0, horizontalFlip = false, verticalFlip = false}: IconProps) => {
  const sizeString: string = size.toString()
    if(Object.keys(valuesMap).includes(sizeString)) {
        size = valuesMap[size]
    }
  const { scaleX, scaleY, translateX, translateY } = flipFunction({horizontalFlip,verticalFlip})
  return (
    ${data}
  );
};

export default EOS_${fileName}
`
  return (render)
}

export default componentTemplate
