import { TemplateProps } from '../interface/index'

function componentTemplate ({ fileName, data }:TemplateProps) {
  const render = `
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default /*#__PURE__*/defineComponent({
    name: 'EOS_${fileName}', // vue component name
  });
  </script>
  
  <template>
    ${data}
  </template>
  
`
  return (render)
}

export default componentTemplate
