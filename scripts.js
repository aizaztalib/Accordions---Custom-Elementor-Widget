/* --------------------------------------------------
    * accordions
    * --------------------------------------------------*/
    var customAccordions = function ($scope, $) {
        $scope.find('.xp-accordions').each( function () {
            var selector = $(this),
                content = selector.find('.acc-content'),
                header  = selector.find('.acc-toggle');

            header.off("click");

            header.each(function(){
                if ($(this).data('default') == 'yes') {
                    $(this).next().addClass('active').slideDown(300);
                    $(this).parent().addClass('current');
                }
            });

            header.on('click', function(e){
                e.preventDefault();
                var $this = $(this);

                $this.next().toggleClass('active').slideToggle(300);
                $this.parent().toggleClass('current');
                content.not($this.next()).slideUp(300);
                header.not($this).parent().removeClass('current');
            });
        });
    };
