const getStorReadlist = () =>{
    const StorItem = localStorage.getItem('Read-List')
    if(StorItem){
        const StorList = JSON.parse(StorItem)
        return StorList
    }
    else{
        return []
    }

}

const addTostorReadlist = (id) =>{
    const StorlistItem = getStorReadlist()
    if(StorlistItem.includes(id)){
        console.log('Do not stor this item already exist')
    }
    else{
        StorlistItem.push(id)
        const StorstrlistItem = JSON.stringify(StorlistItem)
        localStorage.setItem('Read-List', StorstrlistItem)
    }
}
export {addTostorReadlist}

const getStorWshislist = () =>{
    const StorItem = localStorage.getItem('Wish-List')
    if(StorItem){
        const StorWishList = JSON.parse(StorItem)
        return StorWishList
    }
    else{
        return []
    }

}

const addTostorWishlist = (id) =>{
    const StorlistItem = getStorWshislist()
    if(StorlistItem.includes(id)){
        console.log('Do not stor this item already exist')
    }
    else{
        StorlistItem.push(id)
        const StorWushlistItem = JSON.stringify(StorlistItem)
        localStorage.setItem('Wish-List', StorWushlistItem)
    }
}
export {addTostorWishlist}