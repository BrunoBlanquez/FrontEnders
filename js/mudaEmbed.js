let botaoDarkSwitch = $('#darkSwitch')
let figma = $('.figma')

botaoDarkSwitch.on('click', function() {
  if (darkSwitch.checked == false) {
    console.log('tema claro')
    figma.attr("src","https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FxuSosAXjAbx3p636t7d8Ys%2FDating-APP-Template-with-Micro-Interaction-(Community)%3Fnode-id%3D0%253A94%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D0%253A94")
  } else {
    console.log('tema escuro')
    figma.attr("src","https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FxtiN8NYH86b5dFbbccBNq4%2FFRONTENDERS-Black%3Fnode-id%3D0%253A94%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D0%253A94")
  }
})