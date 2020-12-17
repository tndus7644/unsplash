$(function (){
    /**
     * UI SCRIPT
     */
    unsplash.init()
})

const unsplash = {
    init: function (){
        unsplash.dropdown()
        unsplash.popup()
    },

    dropdown: function (){
        $('.btn-menu').on('click', function (){
            $('.dropdown').toggleClass('is-active')
        })
    },

    popup: function (){
        $('.submit-photo').on('click', function (){
            $('.login-popup').addClass('is-active')
        })

        $('.login-popup').on('click', function (){
            $(this).removeClass('is-active')
        })
    }
}