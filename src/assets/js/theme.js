jQuery(document).ready(function () {

    //-- Including the main nav contents in responsive main nav DIV --
    jQuery('.mainNav .navTabs').clone().appendTo('.responsiveMainNav');

    //-- Show and Hide responsive nav --
    jQuery('#responsiveMainNavToggler').click(function(event){
      event.preventDefault();
      jQuery('#responsiveMainNavToggler').toggleClass('opened');
      jQuery('.responsiveMainNav').slideToggle(1000);


      if ( jQuery('#responsiveMainNavToggler i').hasClass('fa-bars') )
      {   
          jQuery('#responsiveMainNavToggler i').removeClass('fa-bars');
          jQuery('#responsiveMainNavToggler i').addClass('fa-close');
      }else
      {  
          jQuery('#responsiveMainNavToggler i').removeClass('fa-close');
          jQuery('#responsiveMainNavToggler i').addClass('fa-bars');
      }

    });

    // dropdown level 1
    if(jQuery(".responsiveMainNav .navTabs > li > a").parent().has("ul")) {
      jQuery(".responsiveMainNav .navTabs > li > a:first-child").addClass("toggleResponsive");
      jQuery(".responsiveMainNav .navTabs > li > a:last-child").removeClass("toggleResponsive");
    }

    jQuery(".responsiveMainNav .navTabs > li > .toggleResponsive").on("click", function(e){
      if(jQuery(this).parent().has("ul")) {
        e.preventDefault();
      }
      
      if(!jQuery(this).hasClass("activeLine")) {
        // hide any open menus and remove all other classes
        jQuery(".responsiveMainNav .navTabs > li > .toggleResponsive").removeClass("activeLine");
        jQuery(".responsiveMainNav .navTabs > li > .dropDown").slideUp(500);
        
        // open our new menu and add the activeLine class
        jQuery(this).addClass("activeLine");
        jQuery(this).next(".responsiveMainNav .navTabs > li > .dropDown").slideDown(500);
      }
      
      else if(jQuery(this).hasClass("activeLine")) {
        jQuery(this).removeClass("activeLine");
        jQuery(this).next(".responsiveMainNav .navTabs > li > .dropDown").slideUp(500);
      }
    });


    // dropdown level 2
    if(jQuery(".responsiveMainNav .navTabs > li > .dropDown > li > a").parent().has("ul")) {
      jQuery(".responsiveMainNav .navTabs > li > .dropDown > li > a:first-child").addClass("toggleResponsive");
      jQuery(".responsiveMainNav .navTabs > li > .dropDown > li > a:last-child").removeClass("toggleResponsive");
    }


    jQuery(".responsiveMainNav .navTabs > li > .dropDown > li > .toggleResponsive").on("click", function(e){
      if(jQuery(this).parent().has("ul")) {
        e.preventDefault();
      }

      if(!jQuery(this).hasClass("activeLine")) {
        // hide any open menus and remove all other classes
        jQuery(".responsiveMainNav .navTabs > li > .dropDown > li > .toggleResponsive").removeClass("activeLine");
        jQuery(".responsiveMainNav .navTabs > li > .dropDown li .dropDown").slideUp(500);
        
        // open our new menu and add the activeLine class
        jQuery(this).addClass("activeLine");
        jQuery(this).next(".responsiveMainNav .navTabs > li > .dropDown li .dropDown").slideDown(500);
      }
      
      else if(jQuery(this).hasClass("activeLine")) {
        jQuery(this).removeClass("activeLine");
        jQuery(this).next(".responsiveMainNav .navTabs > li > .dropDown li .dropDown").slideUp(500);
      }
    });

  });