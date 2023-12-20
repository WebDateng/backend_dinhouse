export default {
    name: 'price',
    type: 'document',
    title: 'Price',
    fields: [
        {
            name: "harga_jimbaran",
            title: "Harga Jimbaran",
            type: "number"
        },
        {
            name: "diskon_jimbaran",
            title: "Diskon Jimbaran",
            type: "number"
        },
        {
            name: "harga_jembrana",
            title: "Harga Jembrana",
            type: "number"
        },
        {
            name: "diskon_jembrana",
            title: "Diskon Jembrana",
            type: "number"
        },
        {
            name: "priceList",
            title: "Price List",
            type: "array",
            of: [{type: "string"}]
        }
    ]
}