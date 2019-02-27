const day6utils = {
    getData(max) {
        const array = new Array()
        for (let i = 0; i < max; i++) {
            array.push({
                key: i,
                value: `value${i}`
            })
        }

        return array
    }
}

export {
    day6utils
}