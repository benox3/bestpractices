function main() {
    var self = this; //this will be the item that clicks
    self.currentPage;
    self.previousPage;
    self.nextPage;

    //argument is object that was clicked
    self.SlideCurrentPageOut = function slideCurrentPageOut() {
        self.home.addClass("animated slideOutLeft");
    }
    self.SlideTargetPageIn = function slideTargetPageIn() {
        self.page.removeClass("slideOutRight");
        self.page.removeClass("hide");
    }

    var i = 0; //  set your counter to 0

    self.slideInListItems = function slideInListItems() {

        setTimeout(function () {
            $($(self.pageName + " .panel-body li")[i]).css("visibility", "visible");
            $($(self.pageName + " .panel-body li")[i]).addClass(" animated slideInRight ");
            i++;

            if (i < $(self.pageName + " .panel-body li").length) {
                self.slideInListItems();
            }
            else {
                i = 0;
            }

        }, 100);
    }

    self.init = function init(arg1) {
        self.page = $("." + $(arg1).attr("data-target"));
        self.pageName = "." + $(arg1).attr("data-target");
        self.home = $(".page0")
        self.NavBar = $(".navbar-brand");

        self.SlideCurrentPageOut();
        self.SlideTargetPageIn();
        self.slideInListItems();
        self.currentPage = self.page;

    }

    self.navbarClick = function navbarClick() {
        if (self.currentPage !== self.home) {

            self.page.addClass("animated slideOutRight");
            $(self.pageName + " .panel-body li").addClass("animated slideOutRight");
            $(self.page).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
    function (e) {

        // code to execute after animation ends
   
        $(self.pageName + " .panel-body li").removeClass("animated slideInRight");
        $(self.pageName + " .panel-body li").removeClass("animated slideOutRight");
        self.page.addClass("hide");
    });
            self.home.removeClass("slideOutLeft");


            self.currentPage = self.home;
            self.previousPage = self.page;



        }
        else {
            return false;
        }
    }


}
