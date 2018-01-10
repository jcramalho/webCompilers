$(function(){
    $("#intext").val("")
    $("#proc").click(function(){
      var textSource = {"comp": $("#comp").val(),"intext": $("#intext").val()}
      $.ajax({
          type: 'POST',
          data: textSource,
          url: '/compilers/input',
          dataType: 'JSON'
      }).done(function(response){
        var html = "<pre>" + response.text + "</pre>"
        $("#resultado").append(html)
      })
    })

    $("#limpa").click(function(){
        $("#resultado").children().remove()
    })

    $("#novo").click(function(){
        $("#intext").val("")
    })
})

    