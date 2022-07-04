
      function sum(){


        
        document.getElementById('c').style.background = 'green';
        document.getElementById('c').style.color = 'white';
        
        
        var a = document.getElementById('a').value;
        var b = document.getElementById('b').value;
        var c = Number(a)+Number(b);
         document.getElementById('c').value=c;

        
          var c = document.title;
          console.log(c);

        document.getElementById('show_data').innerHTML = c;

        document.title=Sum;

       };
