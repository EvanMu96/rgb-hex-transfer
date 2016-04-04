$(document).ready(function(){

  $('.container .form')
  .form({
    on: 'blur',
    fields: {
      R: {
        identifier  : 'R',
        rules: [
          {
            type   : 'integer[0..255]',
            prompt : '请输入0-255的整数'
          }
        ]
      },
      G: {
        identifier  : 'G',
        rules: [
          {
            type   : 'integer[0..255]',
            prompt : '请输入0-255的整数'
          }
        ]
      },
      B: {
        identifier  : 'B',
        rules: [
        {
          type: 'integer[0..255]',
          prompt: '请输入0-255的整数'
        }
      ]
      },
    }
  });

})