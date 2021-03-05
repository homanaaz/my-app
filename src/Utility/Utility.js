export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};
export const deepCloneObject = (obj) => {
  let clonedObject = JSON.parse(JSON.stringify(obj));
  return clonedObject;
};
