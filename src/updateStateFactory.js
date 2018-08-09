export const updateStateFactory = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};