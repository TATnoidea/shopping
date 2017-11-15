$(function() {
  $(".container").fullpage({
    verticalCentered: false,
    sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
    navigation: true,
    scrollingSpeed: 1000,
    afterRender: function() {
      $(".more").on("click", function() {
        $.fn.fullpage.moveSectionDown();
      });
      //第8屏鼠标跟随手
      $(".screen08").on("mousemove", function(e) {
        $(".screen08 .hand").css({
          left: e.clientX - 290,
          top: e.clientY,
        })
      });
      //点击重新开始
      $(".screen08 .again").on("click", function() {
        $(".now").removeClass("now");
        $(".leave").removeClass("leave");
        $(".continue").removeClass("continue");
        $(".content [style]").removeAttr("style");
        $.fn.fullpage.moveTo("1");
      })
    },
    afterLoad: function(anchorLink, index) {
      $(".section").eq(index-1).addClass('now');
      $(".screen04 .cart").on("transitionend", function() {
        $(".screen04").addClass("continue");
      });
    },
    onLeave: function(index, nextIndex, direction) {
      $(".more").fadeOut(200).delay(200).fadeIn(800);
      $currentSection = $(".section").eq(index-1);
      if(index == 2 && nextIndex == 3) {
        $currentSection.addClass('leave');
      } else if (index == 3 && nextIndex == 4) {
        $currentSection.addClass('leave');
      } else if (index == 5 && nextIndex == 6) {
        $currentSection.addClass('leave');
        $(".screen06 .box").addClass('leave');
      } else if (index == 6 && nextIndex == 7) {
        $(".screen07 .star img").each(function(i, item) {
          $(item).delay(i * 300).fadeIn();
        });
      }
    }
  });
})
