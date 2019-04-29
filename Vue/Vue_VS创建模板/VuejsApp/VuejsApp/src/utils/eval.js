import Vue from 'vue'
export default function treeToArray(data, expandAll, parent = null, level = null) {
    let tmp = []
    Array.from(data).forEach(function(record) {
        if (record._expanded === undefined) {
            Vue.set(record, '_expanded', expandAll)
        }
        let _level = 1
        if (level !== undefined && level !== null) {
            _level = level + 1
        }
        Vue.set(record, '_level', _level)
            // 如果有父元素
        if (parent) {
            Vue.set(record, 'parent', parent)
        }
        tmp.push(record)
        if (record.list && record.list.length > 0) {
            const list = treeToArray(record.list, expandAll, record, _level)
            tmp = tmp.concat(list)
        }
    })
    return tmp
}