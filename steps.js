$(function () {
    const submitButton = $('#main-form-button'),
          mainForm = $('#main-form'),
          mainFormInputs = $('.data-form__item-input')

    mainFormInputs.each(function (index, item) {
        $(item).on('input', function () {
            $(item).closest('.data-form__item').removeClass('error-field')

            if ($(this).val().length > 0) {
                $(this).closest('.data-form__item').addClass('success-field')
            } else {
                $(this).closest('.data-form__item').removeClass('success-field')
            }
        })

        $(item).on('focus', function () {
            $(item).closest('.data-form__decorate').addClass('ok')
        })

        $(item).on('blur', function () {
            $(item).closest('.data-form__decorate').removeClass('ok')

            if ($(this).val().length <= 0) {
                $(this).closest('.data-form__item').addClass('error-field')
            }
        })
    })

    mainForm.on('submit', function (e) {
        e.preventDefault()

        if (!getInvalidInputs().length) {
            submitButton.toggleClass('active')
        } else {
            getInvalidInputs().each(function (index, item) {
                $(item).closest('.data-form__item').addClass('error-field')
            })
        }
    })

    function getInvalidInputs() {
        return mainFormInputs.map(function (index, item) {
            if ($(item).val().length <= 0) {
                return $(item)
            }
        })
    }

    function getValidInputs() {
        return mainFormInputs.map(function (index, item) {
            if ($(item).val().length > 0) {
                return $(item)
            }
        })
    }
})