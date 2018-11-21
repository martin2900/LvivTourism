$(document).ready(function () {
            let getId = (id) => document.getElementById(id);


            $('#iphone1').mouseover(() => {
                $('#iphone1').animate({
                    width: "20%",
                    height: "669px"
                })
            })
            $('#iphone1').mouseout(() => {
                $('#iphone1').animate({
                    width: "10%",
                    height: "569px"
                })
            })


            $('#iphone2').mouseover(() => {
                $('#iphone2').animate({
                    width: "35%",
                    height: "669px"
                })
            })
            $('#iphone2').mouseout(() => {
                $('#iphone2').animate({
                    width: "25%",
                    height: "569px"
                })
            })



            $('#iphone3').mouseover(() => {
                $('#iphone3').animate({
                    width: "35%",
                    height: "702px"
                })
            })
            $('#iphone3').mouseout(() => {
                $('#iphone3').animate({
                    width: "25%",
                    height: "602px"
                })
            })

            $('#iphone4').mouseover(() => {
                $('#iphone4').animate({
                    width: "35%",
                    height: "669px"
                })
            })
            $('#iphone4').mouseout(() => {
                $('#iphone4').animate({
                    width: "25%",
                    height: "569px"
                })
            })


            let child = $('#iconStars').children()

            $(child).each(function (index, elem) {
                $(child).eq(index).click(function () {
                    for (let i = 0; i <= index; i++) {
                        $(child).eq(i).animate({
                            width: "34px",
                            height: "33px",
                            backgroundColor: 'darkgolden',
                            opacity: '4'
                        })
                    }
                    for (let a = child.length - 1; a > index; a--) {
                        $(child).eq(a).animate({
                            width: "24px",
                            height: "23px",
                            opacity: '0.3'
                        })
                    }
                })

            })


            let count = 0;
            let child2 = $('#photosPersons').children();

            function cntr(a, b) {
                $(a).eq((1 + b) - 1).css({
                    opacity: '0.4'
                })
                $(a).eq((1 + b) + 1).css({
                    opacity: '0.4'
                })
                $(a).eq((1 + b)).css({
                    opacity: '1'
                })
            }
            cntr(child2, count);

            $('#strl2').click(() => {
                if (count == 0) {
                    $('#photosPersons').animate({
                        left: '-33.3%'
                    })
                    count++;

                } else {
                    if (count == 1) {
                        $('#photosPersons').animate({
                            left: '-66.6%'
                        })
                        count++;
                    } else if (count == 2) {
                        $('#photosPersons').animate({
                            left: '-99.9%'
                        })
                        count++;
                    }

                }

                cntr(child2, count);

            })


            $('#strl1').click(() => {
                if (count == 1) {
                    $('#photosPersons').animate({
                        left: '0%'
                    })


                    count--;
                } else {
                    if (count == 2) {
                        $('#photosPersons').animate({
                            left: '-33.3%'
                        })
                        count--;
                    } else if (count == 3) {
                        $('#photosPersons').animate({
                            left: '-66.6%'
                        })
                        count--;
                    }

                }
                cntr(child2, count);

            })

            var tdlList = ('#tdlApp ul');
            var mask = 'td_';
            var nId = 0;

            function showTasks() {
                var length = localStorage.length;
                if (length > 0) {
                    for (var i = 0; i < length; i++) {
                        var key = localStorage.key(i);
                        if (key.indexOf(mask) == 0) {
                            $('<li></li>').addClass('tdItem').attr('data-itemId', key).text(localStorage.getItem(key)).appendTo(tdlList);
                        }
                    }
                }
            }
            showTasks()


            $('#tdlApp input').on('keydown', function (e) {

                if (e.keyCode != 13)
                    return;
                var str = e.target.value;
                e.target.value = '';

                if (str.length > 0) {


                    $(tdlList).children().each(function (index, el) {


                        var jel = $(el).attr('data-itemId').slice(4);
                        if (jel > nId)
                            nId = jel;
                    })

                    nId++;

                    localStorage.setItem(mask + nId, str);

                    $('<li></li>').addClass('tdItem').attr('data-itemId', mask + nId).text(str).appendTo(tdlList);
                }
            });

            $(document).on('click', '.tdItem', function (e) {
                var jet = $(e.target);
                localStorage.removeItem(jet.attr('data-itemId'));
                jet.remove();

            })


            getId('chornovyk').addEventListener('click', function () {
                getId('tdlApp').style.display = 'block';
                getId('tdlApp').style.backgroundColor = '#aacbff';
                getId('tdlApp').style.boxShadow = '1px -1px 142px 18px rgba(0,0,0,0.75)';

            })

            window.addEventListener('click', (e) => {
                if (e.target.id != 'tdlApp' && e.target.id != 'inpChorn' && e.target.id != 'chornovyk' && e.target.className != 'tdItem' && e.target.className != 'tdlList list-unstyled' && e.target.id != 'tdlDiv') {
                    getId('tdlApp').style.display = 'none';
                }
            })


            $('#btnVideo').click(() => {
                $('#iPhone6s').fadeToggle(3500);

            })


          
         //анімований текст
  
//    function keyFoo(){
//            $('#key').one('mouseenter', ()=> {  
//                        $('.key2').slideDown(2000);
//            
//                            $('#realTime').css({
//                                color: "white"
//                            }),
//                               $('#timeText').css({
//                                color: "white"
//                            });
//                   $('#key').unbind('mouseenter');
//            })
//      
//   
//      
//        $('.key2').one('mouseleave', ()=>{
//            
//                $('.key2').slideUp(2000);
//            
//setTimeout(()=>{
//    keyFoo();
//},2000)
//            $('.key2').unbind('mouseleave');
//            })
//  }
//    keyFoo();
//    
    
    
       function keyFoo(firstEl, slideEl, hText, pText){
           this.f = firstEl;
           this.s = slideEl;
           this.t = hText;
           this.fo = pText;
           
           let that = this;
           
            $(firstEl).one('mouseenter', ()=> {  
                        $(slideEl).slideDown(2000);
            
                            $(hText).css({
                                color: "white"
                            }),
                               $(pText).css({
                                color: "white"
                            });
                   $(firstEl).unbind('mouseenter');
            })
      
   
      
        $(slideEl).one('mouseleave', ()=>{
            
                $(slideEl).slideUp(2000);
            
setTimeout(()=>{
    keyFoo(that.f, that.s, that.t, that.fo);
},2000)
            $(slideEl).unbind('mouseleave');
            })
  }
  let keyFirst = new  keyFoo('#key', '.key2', '#realTime', '#timeText');
  let keySecond = new  keyFoo('#alarmClock', '.key3', '#obstacles', '#alarmText');
//        function keyFoo2(){
//            $('#alarmClock').one('mouseenter', ()=> {  
//                        $('.key3').slideDown(2000);
//            
//                            $('#obstacles').css({
//                                color: "white"
//                            }),
//                               $('#alarmText').css({
//                                color: "white"
//                            });
//                   $('#alarmClock').unbind('mouseenter');
//            })
//      
//   
//      
//        $('.key3').one('mouseleave', ()=>{
//            
//                $('.key3').slideUp(2000);
//            
//setTimeout(()=>{
//    keyFoo2();
//},2000)
//            $('.key3').unbind('mouseleave');
//            })
//   
//                        
//                }
//       keyFoo2();
//    
    
    
    
    
    
    
    
})     
                
                
    
              //2частина
           
           
