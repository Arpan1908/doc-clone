import React, { useCallback, useEffect, useRef } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import './Texteditor.css'

const Texteditor = () => {
   const wrapper = useCallback(wrapperRef =>{
         if(wrapperRef === null) return
         wrapperRef.innerHTML = ""
         const editor = document.createElement('div')
         wrapperRef.append(editor)
         new Quill(editor, {theme: 'snow'})
         //fdddfdfdf
   },[])

   return (
    <div className="container" ref={wrapper} style={{height: "70vh", width: "100%"}}></div>
   )
}

export default Texteditor