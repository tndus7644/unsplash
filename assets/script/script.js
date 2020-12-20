$(function () {
    /**
     * UI SCRIPT
     */
    unsplash.init()
})

const unsplash = {
    init: function () {
        unsplash.dropdown()
        unsplash.popup()
        unsplash.gallerypopup()
    },

    dropdown: function () {
        $('.btn-menu').on('click', function () {
            $('.dropdown').toggleClass('is-active')
        })
    },

    popup: function () {
        $('.submit-photo').on('click', function () {
            $('.login-popup').addClass('is-active')
        })

        $('.login-popup-bg').on('click', function () {
            $('.login-popup').removeClass('is-active')
        })
    },

    gallerypopup: function () {
        $('.gallery-picture').on('click', function () {
            $('.gallery-popup').addClass('is-active')

            const image = $(this).attr('src')
            $('.img-contents > img').attr('src', image)

            $('.close-btn').click(function () {
                $('.gallery-popup').removeClass('is-active')
            })
        })
    }
}