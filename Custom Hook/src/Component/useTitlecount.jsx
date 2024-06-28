import React, { useEffect } from 'react'

const useTitlecount =(count)=>{
    useEffect(()=>{
        if(count>= 1){
            document.title= `Chats (${count})`
        }else{
            document.title = `Chats`
        }
    },[count])
}


export default useTitlecount
