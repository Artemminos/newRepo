const errors = [
    {
        widget: {
            key: {
                message: "Заполни поле",
                type: 'required'
            }
        }
    },
    {
        map: {
            key: {
                message: "Установи метку",
                type: 'required'
            }
        }
    },
    {
        image: {
            author: {
                message: "заполни автора",
                type: 'required'
            },
            src: {
                message: "укажи источник",
                type: 'required'
            },
        }
    },
]
const result = {
    'content[0].widget.key': 'заполни поле',
    'content[1].map.key': 'Установи метку',
    'content[2].image.author': 'заполни автора',
    'content[2].image.src': 'укажи источник',
}

function traverseAndFlatten(currentNode, target, flattenedKey) {
    for (const key in currentNode) {


        if (currentNode.hasOwnProperty(key)) {
            let newKey;
            if (flattenedKey === undefined) {
                newKey = `content[${key}]`;
            } else {
                newKey = flattenedKey + '.' + key;
            }

            const value = currentNode[key];

            if (typeof value === "object") {
                if ('message' in value) {
                    target[newKey] = value.message;
                } else {
                    traverseAndFlatten(value, target, newKey);
                }
            } else {
                target[newKey] = value;
            }
        }
    }
}

function flatten(obj) {
    const flattenedObject = {};
    traverseAndFlatten(obj, flattenedObject);
    return flattenedObject;
}

const values = Object.values(flatten(errors));



