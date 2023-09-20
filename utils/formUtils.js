export function extractPriceValue(usPriceString) {
    return Number(usPriceString.replace('$', '').replaceAll(',', ''))
}

export function getClassesForSubmitButton(disabledSubmit) {
    const baseClasses = 'text-white w-full mt-2 rounded-md px-2 py-1 '
    return disabledSubmit ? baseClasses.concat('bg-indigo-300')
        : baseClasses.concat('bg-indigo-500 hvr-grow')
}

export function limitNumberCharacters(event) {
    const value = event.target.value
    let newValue = value === '' || value === '$' ? ''
        : `$${Number(event.target.value.replace(/[^\d]+/g, '').slice(0, 11)).toLocaleString('en-US')}`
    event.target.value = newValue
}

export function priceFormatter(number) {
    return "$" + Intl.NumberFormat("us").format(number).toString();
}