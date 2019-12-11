export const BUY_ITEM = "BUY_ITEM";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const buyItemAction = item => {
    return { type: BUY_ITEM, payload: item}
}

export const removeFeatureAction = item => {
    console.log(item)
    return { type: REMOVE_FEATURE, payload: item}
}