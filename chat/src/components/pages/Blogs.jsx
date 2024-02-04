import React, { useCallback, useEffect, useRef ,useState} from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import './Blogs.css'
import {io} from 'socket.io-client'

const  toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];

const Blogs = () => {

   const [socket, setSocket] = useState()
   const [quill,setQuill] = useState()
   
   useEffect(() => {
      const s = io('http://localhost:8000')
      setSocket(s);
      return () => {
         s.disconnect()
      }
   },[]) 


   useEffect(()=>{
    if (socket == null || quill == null) return
      const handler =  (delta ) => {
        quill.updateContents(delta)
     }
        socket.on('recieve-changes', handler)

      return () => {
         socket.off('recieve-changes', handler)
      }
      
   },[socket, quill])



   useEffect(()=>{
    if (socket == null || quill == null) return
      const handler =  (delta, oldDelta, source) => {
        if(source !== 'user') return
        socket.emit('send-changes', delta)
     }
        quill.on('text-change', handler)

      return () => {
         quill.off('text-change', handler)
      }
      
   },[socket, quill])


   const wrapper = useCallback(wrapperRef =>{
         if(wrapperRef === null) return
         wrapperRef.innerHTML = ""
         const editor = document.createElement('div')
         wrapperRef.append(editor)
         const q = new Quill(editor, {theme: 'snow', modules: {toolbar: toolbarOptions}})
         setQuill(q);
         //fdddfdfdf
   },[])

   return (
    <div className="container" ref={wrapper} style={{height: "70vh", width: "100%"}}></div>
   )
}

export default Blogs