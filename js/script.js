const mailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const form = document.querySelector('form');

form.addEventListener('submit', (e) =>
{
    submitEmail(e);
});

function submitEmail(e)
{
    e.preventDefault();

    const emailInput = document.querySelector('#email-input');
    const validationError = document.querySelector('.validation-error');

    if(validateEmail(emailInput))
    {
        emailInput.classList.remove('failed');
        toggleValidationError(validationError, 'none');
        clearInput(emailInput);
    }
    else
    {
        emailInput.classList.add('failed');
        toggleValidationError(validationError, 'block');
    }

}

function validateEmail(emailInput)
{
    return emailInput.value.match(mailFormat);
}

function toggleValidationError(validationError, state)
{
    validationError.style.display = state;
}

function clearInput(emailInput)
{
    emailInput.value = '';
}

