$(function() {

          var list = [['aaaaa','意味','10'],['bbbbb','意味2','9'],['cccc','意味3','8'],['dddd','意味4','8']]
          var word_list = new Array();
          dami     = "dami"
          var count = 0;
          var yes_count = 0;
          var no_count = 0;
          word     = "#btn_";

  $("#chack").text("英単語チェック" + count +"/"+ list.length );

  $('.btn').click(function(){

          var id   = $(this).attr("id");
          var text = $(this).text();

      if (text == list[count][1]){
          console.log("Yes");
          yes_count += 1;

      }else{
          console.log("No");
          word_list[no_count] = list[count];
          no_count += 1;

           }
      if(count < list.length ){
          //シャッフルアルゴリズム
           var arr = [1,2,3,4];
           var a = arr.length;

      while (a) {
           var j = Math.floor( Math.random() * a );
           var t = arr[--a];
           arr[a] = arr[j];
           arr[j] = t;

           word_1 = word + arr[0];
           word_2 = word + arr[1];
           word_3 = word + arr[2];
           word_4 = word + arr[3];

      }
           count += 1;

      if(count == list.length){
           console.log("完了");
           $("#chack").text("英単語チェック" + count +"/"+ list.length );
           $("#chack_2").text("間違った単語___正答率" +yes_count +"/"+ list.length );

           $("#articletable").append($("<tr></tr>")
                    .append($("<th></th>").text("単語"))
                    .append($("<th></th>").text("意味"))
                    .append($("<th></th>").text("出た回数")))
      for (var i=0; i<no_count; i++) {
           $("#articletable").append($("<tr></tr>")
                    .append($("<td></td>").text(word_list[i][0]))
                    .append($("<td></td>").text(word_list[i][1]))
                    .append($("<td></td>").text(word_list[i][2])))
                  }
             }

           $(word_1).text(list[count][1]);
           $(word_2).text(dami);
           $(word_3).text(dami);
           $(word_4).text(dami);
           $("#text").text(list[count][0]);
           console.log(count);
      }


   $("#chack").text("英単語チェック" + count +"/"+ list.length );


    });



});
