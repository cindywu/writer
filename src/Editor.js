import React from 'react'
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {Schema, DOMParser} from "prosemirror-model"

export default function Editor() {

  const textSchema = new Schema({
    nodes: {
      text: {},
      doc: {content: "text*"}
    }
  })
  
  window.view = new EditorView(document.querySelector("#editor"), {
    state: EditorState.create({
      doc: DOMParser.fromSchema(textSchema).parse(document.querySelector("#content"))
    })
  })

  return (
    <div>
      
    </div>
  )
}
