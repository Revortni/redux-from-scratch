import { createAction } from "scratch-redux/actionCreator"

const UNDO = "UNDO"
const REDO = "REDO"
export const undo = createAction(UNDO)
export const redo = createAction(REDO)

export const undoActions = {
  UNDO, REDO
}