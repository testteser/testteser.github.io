$(function () {
    const submitButton = $('#main-form-button'),
        mainForm = $('#main-form'),
        mainFormInputs = $('.data-form__item-input'),
        countrySelect = $('#country-select'),
        numberCodeSelect = $('#number-code-select')

    countrySelect.on('change', function (e) {
        e.preventDefault()

        $('.data-form__number-label').text(`+${numberCodeSelect.find(`option[value="${$(this).val()}"]`).data('code')}`)
        $('.data-form__flag').attr('src', `${$(this).val()}.png`)

        $(this).parent().removeClass('active')
    })

    $('.data-form__item--country').on('click', function () {
        $(this).addClass('active')
    })

    $('.data-form__item-field--select').on('click', function () {
        $(this).addClass('active')
    })

    numberCodeSelect.on('change', function () {
        $('.data-form__number-label').text(`+${$(this).find('option:selected').data('code')}`)
        $('.data-form__flag').attr('src', `${$(this).val()}.png`)

        $(this).parent().removeClass('active')
    })

    mainFormInputs.each(function (index, item) {
        $(item).on('input', function () {
            $(item).closest('.data-form__item').removeClass('error-field')
        })

        // $(item).on('focus', function () {
        //     $(item).closest('.data-form__decorate').addClass('ok')
        // })

        $(item).on('blur', function () {
            $(item).closest('.data-form__decorate').removeClass('ok')

            if ($(this).val().length <= 0) {
                $(this).closest('.data-form__item').find('.error-icon').css('visibility', 'visible')
                $(this).closest('.data-form__item').addClass('error-field')
                $(this).closest('.data-form__item').removeClass('success-field')
            } else {
                $(this).closest('.data-form__item').removeClass('error-field')
                $(this).closest('.data-form__item').addClass('success-field')
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