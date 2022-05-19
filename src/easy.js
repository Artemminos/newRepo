const array = [
    'art',
    {
        name: 'art',
        pass: '123'
    },
    {
        name: 'art',
        pass: '123'
    },
    {
        name: 'art',
        pass: '123'
    },

];

const arr1 = [...array]//поверхностное копирование
arr1[0] = 'andy'
console.log(arr1)
console.log(array)

/**
 ссылочные типы данных({},[]) они пердаются по ссылке
 примитивные типы данных по значению
 **/


const DemoObj = {
    name: 'artem',
    level: 'middle'
}

const copyObj = Object.assign({}, DemoObj)
//полная копия 1 версия


const copyObj2 = JSON.parse(JSON.stringify(DemoObj))//stringify=> в json/stringify => в объект
console.log(copyObj2)
//полная копия 2 версия


const array3 = [
    {
        name: 'artem'
    }, {
        name: 'artem'
    }, {
        name: 'artem'
    },
]
const arrCopy = Object.assign({}, array3)
//полная копия массива